# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: web\login-data-driven.spec.ts >> Invalid login (row 4) @master @datadriven @web
- Location: tests\web\login-data-driven.spec.ts:43:9

# Error details

```
ReferenceError: APP_URL is not defined
```

# Test source

```ts
  1  | import path from 'node:path';
  2  | import { test, expect } from '../../fixtures/pageFixtures';
  3  | import { DataProvider } from '../../utils/DataReader';
  4  | 
  5  | type LoginCase = {
  6  |     testName: string;
  7  |     email: string;
  8  |     password: string;
  9  |     expected: 'success' | 'failure';
  10 | };
  11 | 
  12 | function parseLoginCases(data: unknown): LoginCase[] {
  13 |     if (!Array.isArray(data)) {
  14 |         throw new Error('Login test data must be a JSON array.');
  15 |     }
  16 | 
  17 |     return data.map((row: unknown, index: number) => {
  18 |         if (typeof row !== 'object' || row === null || Array.isArray(row)) {
  19 |             throw new Error(`Login test data row ${index + 1} must be an object.`);
  20 |         }
  21 | 
  22 |         const record = row as Record<string, unknown>;
  23 |         const testName = record.testName ?? record.TestName;
  24 |         const { email, password, expected } = record;
  25 | 
  26 |         if (typeof testName !== 'string' || typeof email !== 'string' || typeof password !== 'string') {
  27 |             throw new Error(`Login test data row ${index + 1} must include a test name, email, and password.`);
  28 |         }
  29 |         if (expected !== 'success' && expected !== 'failure') {
  30 |             throw new Error(`Login test data row ${index + 1} must set expected to success or failure.`);
  31 |         }
  32 | 
  33 |         return { testName, email, password, expected };
  34 |     });
  35 | }
  36 | 
  37 | 
  38 | 
  39 | const dataFile = path.join(__dirname, '../../testdata/opencart_logindata.json');
  40 | const loginCases = parseLoginCases(DataProvider.readJson(dataFile));
  41 | 
  42 | loginCases.forEach(({ testName, email, password, expected }, index) => {
  43 |     test(`${testName} (row ${index + 1}) @master @datadriven @web`, async ({
  44 |         page,
  45 |         loginPage,
  46 |         myAccountPage
  47 |     }) => {
  48 |         await test.step('1) Open the OpenCart login page', async () => {
> 49 |             await loginPage.openLoginPage(APP_URL);
     |                                           ^ ReferenceError: APP_URL is not defined
  50 |             await expect(page).toHaveURL(/route=account\/login/);
  51 |             expect(await loginPage.isLoginPageDisplayed()).toBeTruthy();
  52 |         });
  53 | 
  54 |         await test.step('2) Submit the supplied credentials', async () => {
  55 |             await loginPage.login(email.trim() ? email : '', password.trim() ? password : '');
  56 |         });
  57 | 
  58 |         await test.step('3) Validate the login result', async () => {
  59 |             if (expected === 'success') {
  60 |                 await expect(page).toHaveURL(/route=account\/account/);
  61 |                 expect(await myAccountPage.isMyAccountPageDisplayed()).toBeTruthy();
  62 |             } else {
  63 |                 await expect(page).not.toHaveURL(/route=account\/account/);
  64 |                 expect(await loginPage.isLoginPageDisplayed()).toBeTruthy();
  65 |                 expect(await loginPage.isErrorMessageDisplayed()).toBeTruthy();
  66 |                 expect((await loginPage.getErrorMessage()).trim()).not.toBe('');
  67 |             }
  68 |         });
  69 | 
  70 |         console.log(`Login scenario "${testName}" completed with expected ${expected} result.`);
  71 |     });
  72 | });
  73 | 
```