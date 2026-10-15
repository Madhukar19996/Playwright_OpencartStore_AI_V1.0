import Ajv from 'ajv';
import dotenv from 'dotenv';
import path from 'node:path';
import { expect, test } from '@playwright/test';
import { Routes } from '../../api/endpoints/routes';
import { DataProvider } from '../../utils/DataReader';
import { API_BASE_URL, requireApiNumber } from '../../utils/apiTestConfig';

dotenv.config();

type User = {
    id: number;
    email: string;
    username: string;
    password: string;
    name: { firstname: string; lastname: string };
    address: {
        city: string;
        street: string;
        number: number;
        zipcode: string;
        geolocation: { lat: string; long: string };
    };
    phone: string;
};

const payloads = DataProvider.readJson(
    path.resolve(__dirname, '../../testdata/fakestore_api_payloads.json')
) as { user: { create: Omit<User, 'id'>; update: Omit<User, 'id'> } };

function userRoute(route: string, id: number): string {
    return route.replace('{id}', String(id));
}

test.describe('Users API Tests', () => {
    // ---------------------------------------------------------
    // Configuration
    // ---------------------------------------------------------

    const USER_ID = requireApiNumber('USER_ID');
    const LIMIT = requireApiNumber('LIMIT');

    // ---------------------------------------------------------
    // GET - Users
    // ---------------------------------------------------------

    test('GET - All users @master @sanity @api', async ({ request }) => {
        const response = await request.get(`${API_BASE_URL}${Routes.GET_ALL_USERS}`);

        expect(response.status(), 'User list request should return HTTP 200.').toBe(200);
        const users = await response.json() as User[];

        expect(Array.isArray(users), 'User response should be an array.').toBeTruthy();
        expect(users.length, 'User list should not be empty.').toBeGreaterThan(0);
        users.forEach((user) => {
            expect(Number.isInteger(user.id), 'Every user should have an integer id.').toBeTruthy();
        });
    });

    test('GET - User by ID @master @sanity @api', async ({ request }) => {
        const route = userRoute(Routes.GET_USER_BY_ID, USER_ID);
        const response = await request.get(`${API_BASE_URL}${route}`);

        expect(response.status(), 'User lookup should return HTTP 200.').toBe(200);
        const user = await response.json() as User;

        expect(user.id, 'Returned user id should match the requested id.').toBe(USER_ID);
    });

    test('GET - Users with limit @master @regression @api', async ({ request }) => {
        const route = Routes.GET_USERS_WITH_LIMIT.replace('{limit}', String(LIMIT));
        const response = await request.get(`${API_BASE_URL}${route}`);

        expect(response.status(), 'Limited user request should return HTTP 200.').toBe(200);
        const users = await response.json() as User[];

        expect(Array.isArray(users), 'Limited user response should be an array.').toBeTruthy();
        expect(users.length, 'User count should match the requested limit.').toBe(LIMIT);
    });

    test('GET - Users sorted ascending @master @regression @api', async ({ request }) => {
        const route = Routes.GET_USERS_SORTED.replace('{order}', 'asc');
        const response = await request.get(`${API_BASE_URL}${route}`);

        expect(response.status(), 'Ascending user sort should return HTTP 200.').toBe(200);
        const users = await response.json() as User[];
        const ids = users.map(({ id }) => id);

        expect(ids, 'User ids should be in ascending order.')
            .toEqual([...ids].sort((first, second) => first - second));
    });

    test('GET - Users sorted descending @master @regression @api', async ({ request }) => {
        const route = Routes.GET_USERS_SORTED.replace('{order}', 'desc');
        const response = await request.get(`${API_BASE_URL}${route}`);

        expect(response.status(), 'Descending user sort should return HTTP 200.').toBe(200);
        const users = await response.json() as User[];
        const ids = users.map(({ id }) => id);

        expect(ids, 'User ids should be in descending order.')
            .toEqual([...ids].sort((first, second) => second - first));
    });

    // ---------------------------------------------------------
    // POST - Create
    // ---------------------------------------------------------

    test('POST - Create user @master @regression @api', async ({ request }) => {
        const createResponse = await request.post(`${API_BASE_URL}${Routes.CREATE_USER}`, {
            data: payloads.user.create
        });

        expect(createResponse.status(), 'User creation should return HTTP 201.').toBe(201);
        const created = await createResponse.json() as { id: number };

        expect(Number.isInteger(created.id), 'Created user should include an integer id.').toBeTruthy();

        const cleanupResponse = await request.delete(
            `${API_BASE_URL}${userRoute(Routes.DELETE_USER, created.id)}`
        );
        expect(cleanupResponse.status(), 'Created user cleanup should return HTTP 200.').toBe(200);
    });

    // ---------------------------------------------------------
    // PUT - Update
    // ---------------------------------------------------------

    test('PUT - Update user @master @regression @api', async ({ request }) => {
        const route = userRoute(Routes.UPDATE_USER, USER_ID);
        const response = await request.put(`${API_BASE_URL}${route}`, {
            data: payloads.user.update
        });

        expect(response.status(), 'User update should return HTTP 200.').toBe(200);
        const updated = await response.json() as User;

        expect(updated.email, 'Updated email should match the submitted value.').toBe(payloads.user.update.email);
        expect(updated.username, 'Updated username should match the submitted value.')
            .toBe(payloads.user.update.username);
        expect(updated.name.firstname, 'Updated first name should match the submitted value.')
            .toBe(payloads.user.update.name.firstname);
    });

    // ---------------------------------------------------------
    // DELETE - Remove
    // ---------------------------------------------------------

    test('DELETE - User by ID @master @regression @api', async ({ request }) => {
        const route = userRoute(Routes.DELETE_USER, USER_ID);
        const response = await request.delete(`${API_BASE_URL}${route}`);

        expect(response.status(), 'User deletion should return HTTP 200.').toBe(200);
        const deleted = await response.json() as User;
        expect(deleted.id, 'Delete response should identify the requested user.').toBe(USER_ID);
    });

    // ---------------------------------------------------------
    // Schema Validation
    // ---------------------------------------------------------

    test('GET - User response matches schema @master @regression @api', async ({ request }) => {
        const route = userRoute(Routes.GET_USER_BY_ID, USER_ID);
        const response = await request.get(`${API_BASE_URL}${route}`);

        expect(response.status(), 'User schema request should return HTTP 200.').toBe(200);
        const user = await response.json();
        const schema = DataProvider.readJson(path.resolve(__dirname, '../../api/schemas/user_api_schema.json'));
        const validate = new Ajv().compile(schema);
        const isValid = validate(user);
        const validationErrors = validate.errors?.map(({ instancePath, message }) => `${instancePath} ${message}`)
            .join('; ');

        expect(isValid, `User response schema validation failed: ${validationErrors ?? 'unknown error'}`)
            .toBeTruthy();
    });

    // ---------------------------------------------------------
    // End-to-End CRUD Workflow
    // ---------------------------------------------------------

    test('POST/PUT/DELETE - User CRUD workflow @master @end-to-end @api', async ({ request }) => {
        const createResponse = await request.post(`${API_BASE_URL}${Routes.CREATE_USER}`, {
            data: payloads.user.create
        });

        expect(createResponse.status(), 'Workflow user creation should return HTTP 201.').toBe(201);
        const created = await createResponse.json() as { id: number };
        expect(Number.isInteger(created.id), 'Workflow should use the generated user id.').toBeTruthy();

        const updateRoute = userRoute(Routes.UPDATE_USER, created.id);
        const updateResponse = await request.put(`${API_BASE_URL}${updateRoute}`, {
            data: payloads.user.update
        });
        expect(updateResponse.status(), 'Workflow user update should return HTTP 200.').toBe(200);
        const updated = await updateResponse.json() as User;

        expect(updated.email, 'Workflow should return the updated email.').toBe(payloads.user.update.email);
        expect(updated.username, 'Workflow should return the updated username.').toBe(payloads.user.update.username);

        const deleteRoute = userRoute(Routes.DELETE_USER, created.id);
        const deleteResponse = await request.delete(`${API_BASE_URL}${deleteRoute}`);
        expect(deleteResponse.status(), 'Workflow user deletion should return HTTP 200.').toBe(200);
    });
});
