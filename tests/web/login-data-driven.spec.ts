/**
 * Test Case: Login Flow (Data Driven using External File)
 *
 * Tags: @master @datadriven @regression
 *
 * Steps:
 * 1) Load test data from external file
 * 2) For each row, create an independent test
 * 3) Open the application
 * 4) Enter email and password from data row
 * 5) Submit the login form
 * 6) Validate result based on expected value
 */

import path from 'node:path';
import { test, expect } from '../../fixtures/pageFixtures';
import { DataProvider } from '../../utils/DataReader';

type LoginCase = {
    testName: string;
    email: string;
    password: string;
    expected: 'success' | 'failure';
};

function parseLoginCases(data: unknown): LoginCase[] {
    if (!Array.isArray(data)) {
        throw new Error('Login test data must be a JSON array.');
    }

    return data.map((row: unknown, index: number) => {
        if (typeof row !== 'object' || row === null || Array.isArray(row)) {
            throw new Error(`Login test data row ${index + 1} must be an object.`);
        }

        const record = row as Record<string, unknown>;
        const testName = record.testName ?? record.TestName;
        const email = record.email ?? record.Email;
        const password = record.password ?? record.Password;
        const rawExpected = record.expected ?? record.Expected;
        const expected = typeof rawExpected === 'string' ? rawExpected.trim().toLowerCase() : rawExpected;

        if (typeof testName !== 'string' || typeof email !== 'string' || typeof password !== 'string') {
            throw new Error(`Login test data row ${index + 1} must include a test name, email, and password.`);
        }
        if (expected !== 'success' && expected !== 'failure') {
            throw new Error(`Login test data row ${index + 1} must set expected to success or failure.`);
        }

        return { testName, email, password, expected };
    });
}


const OPENCART_HOME_URL = process.env.WEB_APP_URL || 'https://awesomeqa.com/ui/';
const dataFile = path.join(__dirname, '../../testdata/opencart_logindata.json');
const loginCases = parseLoginCases(DataProvider.readJson(dataFile));

loginCases.forEach(({ testName, email, password, expected }, index) => {
    test(`${testName} (row ${index + 1}) @master @datadriven @web`, async ({
        page,
        loginPage,
        myAccountPage
    }) => {
        await test.step('1) Open the OpenCart login page', async () => {
            await loginPage.openLoginPage(OPENCART_HOME_URL);
            await expect(page).toHaveURL(/route=account\/login/);
            expect(await loginPage.isLoginPageDisplayed()).toBeTruthy();
        });

        await test.step('2) Submit the supplied credentials', async () => {
            await loginPage.login(email.trim(), password.trim());
        });

        await test.step('3) Validate the login result', async () => {
            if (expected === 'success') {
                await expect(page).toHaveURL(/route=account\/account/);
                expect(await myAccountPage.isMyAccountPageDisplayed()).toBeTruthy();
            } else {
                await expect(page).not.toHaveURL(/route=account\/account/);
                expect(await loginPage.isLoginPageDisplayed()).toBeTruthy();
                expect(await loginPage.isErrorMessageDisplayed()).toBeTruthy();
                expect((await loginPage.getErrorMessage()).trim()).not.toBe('');
            }
        });

        console.log(`Login scenario "${testName}" completed with expected ${expected} result.`);
    });
});
