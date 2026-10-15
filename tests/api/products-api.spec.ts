import Ajv from 'ajv';
import dotenv from 'dotenv';
import path from 'node:path';
import { expect, test } from '@playwright/test';
import { Routes } from '../../api/endpoints/routes';
import { DataProvider } from '../../utils/DataReader';
import { API_BASE_URL, requireApiNumber } from '../../utils/apiTestConfig';

dotenv.config();

type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating?: { rate: number; count: number };
};

const payloads = DataProvider.readJson(
    path.resolve(__dirname, '../../testdata/fakestore_api_payloads.json')
) as { product: { create: Omit<Product, 'id'>; update: Omit<Product, 'id'> } };

function productRoute(route: string, id: number): string {
    return route.replace('{id}', String(id));
}

function assertProductFields(product: Product): void {
    expect(Number.isInteger(product.id), 'Product id should be an integer.').toBeTruthy();
    expect(typeof product.title, 'Product title should be a string.').toBe('string');
    expect(typeof product.price, 'Product price should be a number.').toBe('number');
    expect(typeof product.category, 'Product category should be a string.').toBe('string');
    expect(typeof product.image, 'Product image should be a string.').toBe('string');
}

test.describe('Products API Tests', () => {
    // ---------------------------------------------------------
    // Configuration
    // ---------------------------------------------------------

    const PRODUCT_ID = requireApiNumber('PRODUCT_ID');
    const LIMIT = requireApiNumber('LIMIT');
    const CATEGORY = 'electronics';

    // ---------------------------------------------------------
    // GET - Products
    // ---------------------------------------------------------

    test('GET - All products @master @sanity @api', async ({ request }) => {
        const response = await request.get(`${API_BASE_URL}${Routes.GET_ALL_PRODUCTS}`);

        expect(response.status(), 'Product list request should return HTTP 200.').toBe(200);
        const products = await response.json() as Product[];

        expect(Array.isArray(products), 'Product response should be an array.').toBeTruthy();
        expect(products.length, 'Product list should not be empty.').toBeGreaterThan(0);
        products.forEach(assertProductFields);
    });

    test('GET - Product by ID @master @sanity @api', async ({ request }) => {
        const route = productRoute(Routes.GET_PRODUCT_BY_ID, PRODUCT_ID);
        const response = await request.get(`${API_BASE_URL}${route}`);

        expect(response.status(), 'Product lookup should return HTTP 200.').toBe(200);
        const product = await response.json() as Product;

        expect(product.id, 'Returned product id should match the requested id.').toBe(PRODUCT_ID);
        assertProductFields(product);
    });

    test('GET - Products with limit @master @regression @api', async ({ request }) => {
        const route = Routes.GET_PRODUCTS_WITH_LIMIT.replace('{limit}', String(LIMIT));
        const response = await request.get(`${API_BASE_URL}${route}`);

        expect(response.status(), 'Limited product request should return HTTP 200.').toBe(200);
        const products = await response.json() as Product[];

        expect(Array.isArray(products), 'Limited product response should be an array.').toBeTruthy();
        expect(products.length, 'Product count should match the requested limit.').toBe(LIMIT);
    });

    test('GET - Products sorted ascending @master @regression @api', async ({ request }) => {
        const route = Routes.GET_PRODUCTS_SORTED.replace('{order}', 'asc');
        const response = await request.get(`${API_BASE_URL}${route}`);

        expect(response.status(), 'Ascending product sort should return HTTP 200.').toBe(200);
        const products = await response.json() as Product[];
        const ids = products.map(({ id }) => id);

        expect(ids, 'Product ids should be in ascending order.')
            .toEqual([...ids].sort((first, second) => first - second));
    });

    test('GET - Products sorted descending @master @regression @api', async ({ request }) => {
        const route = Routes.GET_PRODUCTS_SORTED.replace('{order}', 'desc');
        const response = await request.get(`${API_BASE_URL}${route}`);

        expect(response.status(), 'Descending product sort should return HTTP 200.').toBe(200);
        const products = await response.json() as Product[];
        const ids = products.map(({ id }) => id);

        expect(ids, 'Product ids should be in descending order.')
            .toEqual([...ids].sort((first, second) => second - first));
    });

    test('GET - All product categories @master @regression @api', async ({ request }) => {
        const response = await request.get(`${API_BASE_URL}${Routes.GET_ALL_CATEGORIES}`);

        expect(response.status(), 'Category request should return HTTP 200.').toBe(200);
        const categories = await response.json() as string[];

        expect(Array.isArray(categories), 'Category response should be an array.').toBeTruthy();
        expect(categories.length, 'Category list should not be empty.').toBeGreaterThan(0);
    });

    test('GET - Products by category @master @regression @api', async ({ request }) => {
        const route = Routes.GET_PRODUCTS_BY_CATEGORY.replace('{category}', encodeURIComponent(CATEGORY));
        const response = await request.get(`${API_BASE_URL}${route}`);

        expect(response.status(), 'Category product request should return HTTP 200.').toBe(200);
        const products = await response.json() as Product[];

        expect(Array.isArray(products), 'Category product response should be an array.').toBeTruthy();
        expect(products.length, 'The selected category should have products.').toBeGreaterThan(0);
        products.forEach((product) => {
            expect(product.category, 'Every product should match the requested category.').toBe(CATEGORY);
        });
    });

    // ---------------------------------------------------------
    // POST - Create
    // ---------------------------------------------------------

    test('POST - Create product @master @regression @api', async ({ request }) => {
        const createResponse = await request.post(`${API_BASE_URL}${Routes.CREATE_PRODUCT}`, {
            data: payloads.product.create
        });

        expect(createResponse.status(), 'Product creation should return HTTP 201.').toBe(201);
        const created = await createResponse.json() as Product;

        expect(Number.isInteger(created.id), 'Created product should include an integer id.').toBeTruthy();
        expect(created.title, 'Created title should match the submitted title.').toBe(payloads.product.create.title);
        expect(created.price, 'Created price should match the submitted price.').toBe(payloads.product.create.price);
        expect(created.category, 'Created category should match the submitted category.')
            .toBe(payloads.product.create.category);

        const cleanupResponse = await request.delete(
            `${API_BASE_URL}${productRoute(Routes.DELETE_PRODUCT, created.id)}`
        );
        expect(cleanupResponse.status(), 'Created product cleanup should return HTTP 200.').toBe(200);
    });

    // ---------------------------------------------------------
    // PUT - Update
    // ---------------------------------------------------------

    test('PUT - Update product @master @regression @api', async ({ request }) => {
        const route = productRoute(Routes.UPDATE_PRODUCT, PRODUCT_ID);
        const response = await request.put(`${API_BASE_URL}${route}`, {
            data: payloads.product.update
        });

        expect(response.status(), 'Product update should return HTTP 200.').toBe(200);
        const updated = await response.json() as Product;

        expect(updated.id, 'Updated product id should match the requested id.').toBe(PRODUCT_ID);
        expect(updated.title, 'Updated title should match the submitted title.').toBe(payloads.product.update.title);
        expect(updated.price, 'Updated price should match the submitted price.').toBe(payloads.product.update.price);
        expect(updated.category, 'Updated category should match the submitted category.')
            .toBe(payloads.product.update.category);
    });

    // ---------------------------------------------------------
    // DELETE - Remove
    // ---------------------------------------------------------

    test('DELETE - Product by ID @master @regression @api', async ({ request }) => {
        const route = productRoute(Routes.DELETE_PRODUCT, PRODUCT_ID);
        const response = await request.delete(`${API_BASE_URL}${route}`);

        expect(response.status(), 'Product deletion should return HTTP 200.').toBe(200);
        const deleted = await response.json() as Product;
        expect(deleted.id, 'Delete response should identify the requested product.').toBe(PRODUCT_ID);
    });

    // ---------------------------------------------------------
    // Schema Validation
    // ---------------------------------------------------------

    test('GET - Product response matches schema @master @regression @api', async ({ request }) => {
        const route = productRoute(Routes.GET_PRODUCT_BY_ID, PRODUCT_ID);
        const response = await request.get(`${API_BASE_URL}${route}`);

        expect(response.status(), 'Product schema request should return HTTP 200.').toBe(200);
        const product = await response.json();
        const schema = DataProvider.readJson(path.resolve(__dirname, '../../api/schemas/product_api_schema.json'));
        const validate = new Ajv().compile(schema);
        const isValid = validate(product);
        const validationErrors = validate.errors?.map(({ instancePath, message }) => `${instancePath} ${message}`)
            .join('; ');

        expect(isValid, `Product response schema validation failed: ${validationErrors ?? 'unknown error'}`)
            .toBeTruthy();
    });

    // ---------------------------------------------------------
    // End-to-End CRUD Workflow
    // ---------------------------------------------------------

    test('POST/PUT/DELETE - Product CRUD workflow @master @end-to-end @api', async ({ request }) => {
        const createResponse = await request.post(`${API_BASE_URL}${Routes.CREATE_PRODUCT}`, {
            data: payloads.product.create
        });

        expect(createResponse.status(), 'Workflow product creation should return HTTP 201.').toBe(201);
        const created = await createResponse.json() as Product;
        expect(Number.isInteger(created.id), 'Workflow should use the generated product id.').toBeTruthy();
        const route = productRoute(Routes.UPDATE_PRODUCT, created.id);

        const updateResponse = await request.put(`${API_BASE_URL}${route}`, {
            data: payloads.product.update
        });
        expect(updateResponse.status(), 'Workflow product update should return HTTP 200.').toBe(200);
        const updated = await updateResponse.json() as Product;

        expect(updated.id, 'Updated product id should match the created id.').toBe(created.id);
        expect(updated.title, 'Workflow should return the updated product title.')
            .toBe(payloads.product.update.title);
        expect(updated.price, 'Workflow should return the updated product price.')
            .toBe(payloads.product.update.price);

        const deleteRoute = productRoute(Routes.DELETE_PRODUCT, created.id);
        const deleteResponse = await request.delete(`${API_BASE_URL}${deleteRoute}`);
        expect(deleteResponse.status(), 'Workflow product deletion should return HTTP 200.').toBe(200);
    });
});
