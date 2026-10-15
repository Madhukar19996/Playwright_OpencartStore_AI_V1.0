import dotenv from 'dotenv';
import { expect, test } from '@playwright/test';
import { Routes } from '../../api/endpoints/routes';
import { RandomDataUtil } from '../../utils/dataGenerator';
import { API_BASE_URL, requireApiEnv } from '../../utils/apiTestConfig';

dotenv.config();

test.describe('Authentication API Tests', () => {
    // ---------------------------------------------------------
    // Configuration
    // ---------------------------------------------------------

    const validCredentials = {
        username: requireApiEnv('FAKESTORE_USERNAME'),
        password: requireApiEnv('FAKESTORE_PASSWORD')
    };

    // ---------------------------------------------------------
    // POST - Authentication
    // ---------------------------------------------------------

    test('POST - Successful login returns a token @master @sanity @api', async ({ request }) => {
        const response = await request.post(`${API_BASE_URL}${Routes.AUTH_LOGIN}`, {
            data: validCredentials
        });

        expect(response.status(), 'Valid login should return HTTP 201.').toBe(201);
        const responseBody = await response.json() as { token?: unknown };

        expect(typeof responseBody.token, 'Login response should contain a token string.').toBe('string');
        if (typeof responseBody.token !== 'string') {
            throw new Error('Login response token must be a string.');
        }
        expect(responseBody.token.length, 'Authentication token should not be empty.').toBeGreaterThan(0);
    });

    test('POST - Invalid login returns the authentication error @master @regression @api', async ({ request }) => {
        const response = await request.post(`${API_BASE_URL}${Routes.AUTH_LOGIN}`, {
            data: RandomDataUtil.generateInvalidLoginPayload()
        });

        expect(response.status(), 'Invalid login should return HTTP 401.').toBe(401);
        const responseBody = await response.text();

        expect(responseBody, 'Login error message should match the API contract.')
            .toBe('username or password is incorrect');
    });
});
