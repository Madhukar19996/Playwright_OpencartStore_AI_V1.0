import Ajv from 'ajv';
import dotenv from 'dotenv';
import path from 'node:path';
import { expect, test } from '@playwright/test';
import { Routes } from '../../api/endpoints/routes';
import { DataProvider } from '../../utils/DataReader';
import { API_BASE_URL, requireApiEnv, requireApiNumber } from '../../utils/apiTestConfig';

dotenv.config();

type CartProduct = { productId: number; quantity: number };
type Cart = {
    id: number;
    userId: number;
    date: string;
    products: CartProduct[];
};

function cartRoute(route: string, id: number): string {
    return route.replace('{id}', String(id));
}

test.describe('Carts API Tests', () => {
    // ---------------------------------------------------------
    // Configuration
    // ---------------------------------------------------------

    const CART_ID = requireApiNumber('CART_ID');
    const USER_ID = requireApiNumber('USER_ID');
    const PRODUCT_ID = requireApiNumber('PRODUCT_ID');
    const LIMIT = requireApiNumber('LIMIT');
    const START_DATE = requireApiEnv('START_DATE');
    const END_DATE = requireApiEnv('END_DATE');
    const createPayload = {
        userId: USER_ID,
        date: START_DATE,
        products: [{ productId: PRODUCT_ID, quantity: 2 }]
    };
    const updatePayload = {
        userId: USER_ID,
        date: START_DATE,
        products: [{ productId: PRODUCT_ID, quantity: 5 }]
    };

    // ---------------------------------------------------------
    // GET - Carts
    // ---------------------------------------------------------

    test('GET - All carts @master @sanity @api', async ({ request }) => {
        const response = await request.get(`${API_BASE_URL}${Routes.GET_ALL_CARTS}`);

        expect(response.status(), 'Cart list request should return HTTP 200.').toBe(200);
        const carts = await response.json() as Cart[];

        expect(Array.isArray(carts), 'Cart response should be an array.').toBeTruthy();
        expect(carts.length, 'Cart list should not be empty.').toBeGreaterThan(0);
    });

    test('GET - Cart by ID @master @sanity @api', async ({ request }) => {
        const route = cartRoute(Routes.GET_CART_BY_ID, CART_ID);
        const response = await request.get(`${API_BASE_URL}${route}`);

        expect(response.status(), 'Cart lookup should return HTTP 200.').toBe(200);
        const cart = await response.json() as Cart;

        expect(cart.id, 'Returned cart id should match the requested id.').toBe(CART_ID);
    });

    test('GET - Carts by date range @master @regression @api', async ({ request }) => {
        const route = Routes.GET_CARTS_BY_DATE_RANGE
            .replace('{startdate}', encodeURIComponent(START_DATE))
            .replace('{enddate}', encodeURIComponent(END_DATE));
        const response = await request.get(`${API_BASE_URL}${route}`);

        expect(response.status(), 'Cart date-range request should return HTTP 200.').toBe(200);
        const carts = await response.json() as Cart[];

        expect(Array.isArray(carts), 'Date-range cart response should be an array.').toBeTruthy();
        const startTime = new Date(START_DATE).getTime();
        const endTime = new Date(END_DATE).getTime();

        expect(Number.isFinite(startTime), 'Configured start date should be valid.').toBeTruthy();
        expect(Number.isFinite(endTime), 'Configured end date should be valid.').toBeTruthy();
        expect(startTime, 'Start date should not be after end date.').toBeLessThanOrEqual(endTime);
        carts.forEach((cart) => {
            const cartTime = new Date(cart.date).getTime();
            expect(Number.isFinite(cartTime), 'Each cart should have a valid date.').toBeTruthy();
            expect(cartTime, 'Cart date should be on or after the requested start date.')
                .toBeGreaterThanOrEqual(startTime);
            expect(cartTime, 'Cart date should be on or before the requested end date.')
                .toBeLessThanOrEqual(endTime);
        });
    });

    test('GET - Carts for user @master @regression @api', async ({ request }) => {
        const route = Routes.GET_USER_CART.replace('{userId}', String(USER_ID));
        const response = await request.get(`${API_BASE_URL}${route}`);

        expect(response.status(), 'User cart request should return HTTP 200.').toBe(200);
        const carts = await response.json() as Cart[];

        expect(Array.isArray(carts), 'User cart response should be an array.').toBeTruthy();
        expect(carts.length, 'The configured user should have cart records.').toBeGreaterThan(0);
        carts.forEach((cart) => {
            expect(cart.userId, 'Every returned cart should belong to the requested user.').toBe(USER_ID);
        });
    });

    test('GET - Carts with limit @master @regression @api', async ({ request }) => {
        const route = Routes.GET_CARTS_WITH_LIMIT.replace('{limit}', String(LIMIT));
        const response = await request.get(`${API_BASE_URL}${route}`);

        expect(response.status(), 'Limited cart request should return HTTP 200.').toBe(200);
        const carts = await response.json() as Cart[];

        expect(Array.isArray(carts), 'Limited cart response should be an array.').toBeTruthy();
        expect(carts.length, 'Cart count should match the requested limit.').toBe(LIMIT);
    });

    test('GET - Carts sorted ascending @master @regression @api', async ({ request }) => {
        const route = Routes.GET_CARTS_SORTED.replace('{order}', 'asc');
        const response = await request.get(`${API_BASE_URL}${route}`);

        expect(response.status(), 'Ascending cart sort should return HTTP 200.').toBe(200);
        const carts = await response.json() as Cart[];
        const ids = carts.map(({ id }) => id);

        expect(ids, 'Cart ids should be in ascending order.')
            .toEqual([...ids].sort((first, second) => first - second));
    });

    test('GET - Carts sorted descending @master @regression @api', async ({ request }) => {
        const route = Routes.GET_CARTS_SORTED.replace('{order}', 'desc');
        const response = await request.get(`${API_BASE_URL}${route}`);

        expect(response.status(), 'Descending cart sort should return HTTP 200.').toBe(200);
        const carts = await response.json() as Cart[];
        const ids = carts.map(({ id }) => id);

        expect(ids, 'Cart ids should be in descending order.')
            .toEqual([...ids].sort((first, second) => second - first));
    });

    // ---------------------------------------------------------
    // POST - Create
    // ---------------------------------------------------------

    test('POST - Create cart @master @regression @api', async ({ request }) => {
        const createResponse = await request.post(`${API_BASE_URL}${Routes.CREATE_CART}`, {
            data: createPayload
        });

        expect(createResponse.status(), 'Cart creation should return HTTP 201.').toBe(201);
        const created = await createResponse.json() as Cart;

        expect(Number.isInteger(created.id), 'Created cart should include an integer id.').toBeTruthy();
        expect(created.userId, 'Created cart should use the submitted user id.').toBe(createPayload.userId);
        expect(created.products, 'Created cart should contain the submitted products.')
            .toEqual(createPayload.products);

        const cleanupResponse = await request.delete(
            `${API_BASE_URL}${cartRoute(Routes.DELETE_CART, created.id)}`
        );
        expect(cleanupResponse.status(), 'Created cart cleanup should return HTTP 200.').toBe(200);
    });

    // ---------------------------------------------------------
    // PUT - Update
    // ---------------------------------------------------------

    test('PUT - Update cart @master @regression @api', async ({ request }) => {
        const route = cartRoute(Routes.UPDATE_CART, CART_ID);
        const response = await request.put(`${API_BASE_URL}${route}`, {
            data: updatePayload
        });

        expect(response.status(), 'Cart update should return HTTP 200.').toBe(200);
        const updated = await response.json() as Cart;

        expect(updated.id, 'Updated cart id should match the requested id.').toBe(CART_ID);
        expect(updated.userId, 'Updated cart should use the submitted user id.').toBe(updatePayload.userId);
        expect(updated.products, 'Updated cart should contain the requested quantity.')
            .toEqual(updatePayload.products);
    });

    // ---------------------------------------------------------
    // DELETE - Remove
    // ---------------------------------------------------------

    test('DELETE - Cart by ID @master @regression @api', async ({ request }) => {
        const route = cartRoute(Routes.DELETE_CART, CART_ID);
        const response = await request.delete(`${API_BASE_URL}${route}`);

        expect(response.status(), 'Cart deletion should return HTTP 200.').toBe(200);
        const deleted = await response.json() as Cart;
        expect(deleted.id, 'Delete response should identify the requested cart.').toBe(CART_ID);
    });

    // ---------------------------------------------------------
    // Schema Validation
    // ---------------------------------------------------------

    test('GET - Cart response matches schema @master @regression @api', async ({ request }) => {
        const route = cartRoute(Routes.GET_CART_BY_ID, CART_ID);
        const response = await request.get(`${API_BASE_URL}${route}`);

        expect(response.status(), 'Cart schema request should return HTTP 200.').toBe(200);
        const cart = await response.json();
        const schema = DataProvider.readJson(path.resolve(__dirname, '../../api/schemas/cart_api_schema.json'));
        const validate = new Ajv().compile(schema);
        const isValid = validate(cart);
        const validationErrors = validate.errors?.map(({ instancePath, message }) => `${instancePath} ${message}`)
            .join('; ');

        expect(isValid, `Cart response schema validation failed: ${validationErrors ?? 'unknown error'}`)
            .toBeTruthy();
    });

    // ---------------------------------------------------------
    // End-to-End CRUD Workflow
    // ---------------------------------------------------------

    test('POST/PUT/DELETE - Cart CRUD workflow @master @end-to-end @api', async ({ request }) => {
        const createResponse = await request.post(`${API_BASE_URL}${Routes.CREATE_CART}`, {
            data: createPayload
        });

        expect(createResponse.status(), 'Workflow cart creation should return HTTP 201.').toBe(201);
        const created = await createResponse.json() as Cart;
        expect(Number.isInteger(created.id), 'Workflow should use the generated cart id.').toBeTruthy();
        expect(created.userId, 'Workflow cart should contain the submitted user id.').toBe(createPayload.userId);
        expect(created.products, 'Workflow cart should contain the submitted products.')
            .toEqual(createPayload.products);

        const updateRoute = cartRoute(Routes.UPDATE_CART, created.id);
        const updateResponse = await request.put(`${API_BASE_URL}${updateRoute}`, {
            data: updatePayload
        });
        expect(updateResponse.status(), 'Workflow cart update should return HTTP 200.').toBe(200);
        const updated = await updateResponse.json() as Cart;

        expect(updated.id, 'Updated cart id should match the created id.').toBe(created.id);
        expect(updated.products, 'Workflow should return the updated product quantity.')
            .toEqual(updatePayload.products);

        const deleteRoute = cartRoute(Routes.DELETE_CART, created.id);
        const deleteResponse = await request.delete(`${API_BASE_URL}${deleteRoute}`);
        expect(deleteResponse.status(), 'Workflow cart deletion should return HTTP 200.').toBe(200);
    });
});
