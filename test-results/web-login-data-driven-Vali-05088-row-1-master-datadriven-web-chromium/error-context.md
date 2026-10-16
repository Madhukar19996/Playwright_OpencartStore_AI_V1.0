# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: web\login-data-driven.spec.ts >> Valid login (row 1) @master @datadriven @web
- Location: tests\web\login-data-driven.spec.ts:60:9

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /route=account\/account/
Received string:  "https://awesomeqa.com/ui/index.php?route=account/login"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    13 × locator resolved to <html dir="ltr" lang="en">…</html>
       - unexpected value "https://awesomeqa.com/ui/index.php?route=account/login"

```

```yaml
- navigation:
  - button "$ Currency ":
    - strong: $
    - text: Currency 
  - list:
    - listitem:
      - link "":
        - /url: https://awesomeqa.com/ui/index.php?route=information/contact
      - text: "123456789"
    - listitem:
      - link " My Account":
        - /url: https://awesomeqa.com/ui/index.php?route=account/account
    - listitem:
      - link " Wish List (0)":
        - /url: https://awesomeqa.com/ui/index.php?route=account/wishlist
    - listitem:
      - link " Shopping Cart":
        - /url: https://awesomeqa.com/ui/index.php?route=checkout/cart
    - listitem:
      - link " Checkout":
        - /url: https://awesomeqa.com/ui/index.php?route=checkout/checkout
- banner:
  - link "TheTestingAcademy eCommerce":
    - /url: https://awesomeqa.com/ui/index.php?route=common/home
    - img "TheTestingAcademy eCommerce"
  - textbox "Search"
  - button ""
  - button " 0 item(s) - $0.00"
- navigation:
  - list:
    - listitem:
      - link "Desktops":
        - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=20
    - listitem:
      - link "Laptops & Notebooks":
        - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=18
    - listitem:
      - link "Components":
        - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=25
    - listitem:
      - link "Tablets":
        - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=57
    - listitem:
      - link "Software":
        - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=17
    - listitem:
      - link "Phones & PDAs":
        - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=24
    - listitem:
      - link "Cameras":
        - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=33
    - listitem:
      - link "MP3 Players":
        - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=34
- list:
  - listitem:
    - link "":
      - /url: https://awesomeqa.com/ui/index.php?route=common/home
  - listitem:
    - link "Account":
      - /url: https://awesomeqa.com/ui/index.php?route=account/account
  - listitem:
    - link "Login":
      - /url: https://awesomeqa.com/ui/index.php?route=account/login
- text: " Warning: Your account has exceeded allowed number of login attempts. Please try again in 1 hour."
- heading "New Customer" [level=2]
- paragraph:
  - strong: Register Account
- paragraph: By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.
- link "Continue":
  - /url: https://awesomeqa.com/ui/index.php?route=account/register
- heading "Returning Customer" [level=2]
- paragraph:
  - strong: I am a returning customer
- text: E-Mail Address
- textbox "E-Mail Address": madhukar121@gmail.com
- text: Password
- textbox "Password": test@123
- link "Forgotten Password":
  - /url: https://awesomeqa.com/ui/index.php?route=account/forgotten
- button "Login"
- complementary:
  - link "Login":
    - /url: https://awesomeqa.com/ui/index.php?route=account/login
  - link "Register":
    - /url: https://awesomeqa.com/ui/index.php?route=account/register
  - link "Forgotten Password":
    - /url: https://awesomeqa.com/ui/index.php?route=account/forgotten
  - link "My Account":
    - /url: https://awesomeqa.com/ui/index.php?route=account/account
  - link "Address Book":
    - /url: https://awesomeqa.com/ui/index.php?route=account/address
  - link "Wish List":
    - /url: https://awesomeqa.com/ui/index.php?route=account/wishlist
  - link "Order History":
    - /url: https://awesomeqa.com/ui/index.php?route=account/order
  - link "Downloads":
    - /url: https://awesomeqa.com/ui/index.php?route=account/download
  - link "Recurring payments":
    - /url: https://awesomeqa.com/ui/index.php?route=account/recurring
  - link "Reward Points":
    - /url: https://awesomeqa.com/ui/index.php?route=account/reward
  - link "Returns":
    - /url: https://awesomeqa.com/ui/index.php?route=account/return
  - link "Transactions":
    - /url: https://awesomeqa.com/ui/index.php?route=account/transaction
  - link "Newsletter":
    - /url: https://awesomeqa.com/ui/index.php?route=account/newsletter
- contentinfo:
  - heading "Information" [level=5]
  - list:
    - listitem:
      - link "About Us":
        - /url: https://awesomeqa.com/ui/index.php?route=information/information&information_id=4
    - listitem:
      - link "Delivery Information":
        - /url: https://awesomeqa.com/ui/index.php?route=information/information&information_id=6
    - listitem:
      - link "Privacy Policy":
        - /url: https://awesomeqa.com/ui/index.php?route=information/information&information_id=3
    - listitem:
      - link "Terms & Conditions":
        - /url: https://awesomeqa.com/ui/index.php?route=information/information&information_id=5
  - heading "Customer Service" [level=5]
  - list:
    - listitem:
      - link "Contact Us":
        - /url: https://awesomeqa.com/ui/index.php?route=information/contact
    - listitem:
      - link "Returns":
        - /url: https://awesomeqa.com/ui/index.php?route=account/return/add
    - listitem:
      - link "Site Map":
        - /url: https://awesomeqa.com/ui/index.php?route=information/sitemap
  - heading "Extras" [level=5]
  - list:
    - listitem:
      - link "Brands":
        - /url: https://awesomeqa.com/ui/index.php?route=product/manufacturer
    - listitem:
      - link "Gift Certificates":
        - /url: https://awesomeqa.com/ui/index.php?route=account/voucher
    - listitem:
      - link "Affiliate":
        - /url: https://awesomeqa.com/ui/index.php?route=affiliate/login
    - listitem:
      - link "Specials":
        - /url: https://awesomeqa.com/ui/index.php?route=product/special
  - heading "My Account" [level=5]
  - list:
    - listitem:
      - link "My Account":
        - /url: https://awesomeqa.com/ui/index.php?route=account/account
    - listitem:
      - link "Order History":
        - /url: https://awesomeqa.com/ui/index.php?route=account/order
    - listitem:
      - link "Wish List":
        - /url: https://awesomeqa.com/ui/index.php?route=account/wishlist
    - listitem:
      - link "Newsletter":
        - /url: https://awesomeqa.com/ui/index.php?route=account/newsletter
  - separator
  - paragraph:
    - text: Powered By
    - link "OpenCart":
      - /url: http://www.opencart.com
    - text: TheTestingAcademy eCommerce © 2026
```

# Test source

```ts
  1  | /**
  2  |  * Test Case: Login Flow (Data Driven using External File)
  3  |  *
  4  |  * Tags: @master @datadriven @regression
  5  |  *
  6  |  * Steps:
  7  |  * 1) Load test data from external file
  8  |  * 2) For each row, create an independent test
  9  |  * 3) Open the application
  10 |  * 4) Enter email and password from data row
  11 |  * 5) Submit the login form
  12 |  * 6) Validate result based on expected value
  13 |  */
  14 | 
  15 | import path from 'node:path';
  16 | import { test, expect } from '../../fixtures/pageFixtures';
  17 | import { DataProvider } from '../../utils/DataReader';
  18 | 
  19 | type LoginCase = {
  20 |     testName: string;
  21 |     email: string;
  22 |     password: string;
  23 |     expected: 'success' | 'failure';
  24 | };
  25 | 
  26 | function parseLoginCases(data: unknown): LoginCase[] {
  27 |     if (!Array.isArray(data)) {
  28 |         throw new Error('Login test data must be a JSON array.');
  29 |     }
  30 | 
  31 |     return data.map((row: unknown, index: number) => {
  32 |         if (typeof row !== 'object' || row === null || Array.isArray(row)) {
  33 |             throw new Error(`Login test data row ${index + 1} must be an object.`);
  34 |         }
  35 | 
  36 |         const record = row as Record<string, unknown>;
  37 |         const testName = record.testName ?? record.TestName;
  38 |         const email = record.email ?? record.Email;
  39 |         const password = record.password ?? record.Password;
  40 |         const rawExpected = record.expected ?? record.Expected;
  41 |         const expected = typeof rawExpected === 'string' ? rawExpected.trim().toLowerCase() : rawExpected;
  42 | 
  43 |         if (typeof testName !== 'string' || typeof email !== 'string' || typeof password !== 'string') {
  44 |             throw new Error(`Login test data row ${index + 1} must include a test name, email, and password.`);
  45 |         }
  46 |         if (expected !== 'success' && expected !== 'failure') {
  47 |             throw new Error(`Login test data row ${index + 1} must set expected to success or failure.`);
  48 |         }
  49 | 
  50 |         return { testName, email, password, expected };
  51 |     });
  52 | }
  53 | 
  54 | 
  55 | const OPENCART_HOME_URL = process.env.WEB_APP_URL || 'https://awesomeqa.com/ui/';
  56 | const dataFile = path.join(__dirname, '../../testdata/opencart_logindata.json');
  57 | const loginCases = parseLoginCases(DataProvider.readJson(dataFile));
  58 | 
  59 | loginCases.forEach(({ testName, email, password, expected }, index) => {
  60 |     test(`${testName} (row ${index + 1}) @master @datadriven @web`, async ({
  61 |         page,
  62 |         loginPage,
  63 |         myAccountPage
  64 |     }) => {
  65 |         await test.step('1) Open the OpenCart login page', async () => {
  66 |             await loginPage.openLoginPage(OPENCART_HOME_URL);
  67 |             await expect(page).toHaveURL(/route=account\/login/);
  68 |             expect(await loginPage.isLoginPageDisplayed()).toBeTruthy();
  69 |         });
  70 | 
  71 |         await test.step('2) Submit the supplied credentials', async () => {
  72 |             await loginPage.login(email.trim(), password.trim());
  73 |         });
  74 | 
  75 |         await test.step('3) Validate the login result', async () => {
  76 |             if (expected === 'success') {
> 77 |                 await expect(page).toHaveURL(/route=account\/account/);
     |                                    ^ Error: expect(page).toHaveURL(expected) failed
  78 |                 expect(await myAccountPage.isMyAccountPageDisplayed()).toBeTruthy();
  79 |             } else {
  80 |                 await expect(page).not.toHaveURL(/route=account\/account/);
  81 |                 expect(await loginPage.isLoginPageDisplayed()).toBeTruthy();
  82 |                 expect(await loginPage.isErrorMessageDisplayed()).toBeTruthy();
  83 |                 expect((await loginPage.getErrorMessage()).trim()).not.toBe('');
  84 |             }
  85 |         });
  86 | 
  87 |         console.log(`Login scenario "${testName}" completed with expected ${expected} result.`);
  88 |     });
  89 | });
  90 | 
```