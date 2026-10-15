# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: web\login-data-driven.spec.ts >> Login Data Driven - Invalid login [row 2] @datadriven @master @web
- Location: tests\web\login-data-driven.spec.ts:29:9

# Error details

```
TypeError: homePage.navigateTo is not a function
```

# Page snapshot

```yaml
- generic [active] [ref=f2e1]:
  - navigation [ref=f2e2]:
    - generic [ref=f2e3]:
      - button "$ Currency " [ref=f2e7] [cursor=pointer]:
        - strong [ref=f2e8]: $
        - text: Currency
        - generic [ref=f2e9]: 
      - list [ref=f2e11]:
        - listitem [ref=f2e12]:
          - link "" [ref=f2e13] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=information/contact
          - text: "123456789"
        - listitem [ref=f2e15]:
          - link " My Account" [ref=f2e16] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=account/account
            - generic [ref=f2e17]: 
            - text: My Account
        - listitem [ref=f2e19]:
          - link " Wish List (0)" [ref=f2e20] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=account/wishlist
            - generic [ref=f2e21]: 
            - text: Wish List (0)
        - listitem [ref=f2e22]:
          - link " Shopping Cart" [ref=f2e23] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=checkout/cart
            - generic [ref=f2e24]: 
            - text: Shopping Cart
        - listitem [ref=f2e25]:
          - link " Checkout" [ref=f2e26] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=checkout/checkout
            - generic [ref=f2e27]: 
            - text: Checkout
  - banner [ref=f2e28]:
    - generic [ref=f2e30]:
      - link [ref=f2e33] [cursor=pointer]:
        - /url: https://awesomeqa.com/ui/index.php?route=common/home
        - img "TheTestingAcademy eCommerce" [ref=f2e34]
      - generic [ref=f2e36]:
        - textbox "Search" [ref=f2e37]
        - button "" [ref=f2e39] [cursor=pointer]
      - button " 0 item(s) - $0.00" [ref=f2e43] [cursor=pointer]:
        - generic [ref=f2e44]: 
        - text: 0 item(s) - $0.00
  - navigation [ref=f2e46]:
    - generic: 
    - list [ref=f2e48]:
      - listitem [ref=f2e49]:
        - link "Desktops" [ref=f2e50] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=20
      - listitem [ref=f2e51]:
        - link "Laptops & Notebooks" [ref=f2e52] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=18
      - listitem [ref=f2e53]:
        - link "Components" [ref=f2e54] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=25
      - listitem [ref=f2e55]:
        - link "Tablets" [ref=f2e56] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=57
      - listitem [ref=f2e57]:
        - link "Software" [ref=f2e58] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=17
      - listitem [ref=f2e59]:
        - link "Phones & PDAs" [ref=f2e60] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=24
      - listitem [ref=f2e61]:
        - link "Cameras" [ref=f2e62] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=33
      - listitem [ref=f2e63]:
        - link "MP3 Players" [ref=f2e64] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=34
  - generic [ref=f2e67]:
    - generic [ref=f2e68]:
      - generic [ref=f2e70]:
        - img "MacBookAir" [ref=f2e72]
        - link [ref=f2e74] [cursor=pointer]:
          - /url: index.php?route=product/product&path=57&product_id=49
          - img "iPhone 6" [ref=f2e75]
        - img "MacBookAir" [ref=f2e77]
        - link [ref=f2e79] [cursor=pointer]:
          - /url: index.php?route=product/product&path=57&product_id=49
          - img "iPhone 6" [ref=f2e80]
      - generic [ref=f2e81]:
        - generic [ref=f2e82] [cursor=pointer]
        - generic [ref=f2e83] [cursor=pointer]
      - generic:
        - generic [ref=f2e84] [cursor=pointer]: 
        - generic [ref=f2e85] [cursor=pointer]: 
    - heading "Featured" [level=3] [ref=f2e86]
    - generic [ref=f2e87]:
      - generic [ref=f2e89]:
        - link [ref=f2e91] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/product&product_id=43
          - img "MacBook" [ref=f2e92]
        - generic [ref=f2e93]:
          - heading [level=4] [ref=f2e94]:
            - link "MacBook" [ref=f2e95] [cursor=pointer]:
              - /url: https://awesomeqa.com/ui/index.php?route=product/product&product_id=43
          - paragraph [ref=f2e96]: Intel Core 2 Duo processor Powered by an Intel Core 2 Duo processor at speeds up to 2.1..
          - paragraph [ref=f2e97]:
            - text: $602.00
            - generic [ref=f2e98]: "Ex Tax: $500.00"
        - generic [ref=f2e99]:
          - button " Add to Cart" [ref=f2e100] [cursor=pointer]:
            - generic [ref=f2e101]: 
            - text: Add to Cart
          - button "" [ref=f2e102] [cursor=pointer]
          - button "" [ref=f2e104] [cursor=pointer]
      - generic [ref=f2e107]:
        - link [ref=f2e109] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/product&product_id=40
          - img "iPhone" [ref=f2e110]
        - generic [ref=f2e111]:
          - heading [level=4] [ref=f2e112]:
            - link "iPhone" [ref=f2e113] [cursor=pointer]:
              - /url: https://awesomeqa.com/ui/index.php?route=product/product&product_id=40
          - paragraph [ref=f2e114]: iPhone is a revolutionary new mobile phone that allows you to make a call by simply tapping a nam..
          - paragraph [ref=f2e115]:
            - text: $123.20
            - generic [ref=f2e116]: "Ex Tax: $101.00"
        - generic [ref=f2e117]:
          - button " Add to Cart" [ref=f2e118] [cursor=pointer]:
            - generic [ref=f2e119]: 
            - text: Add to Cart
          - button "" [ref=f2e120] [cursor=pointer]
          - button "" [ref=f2e122] [cursor=pointer]
      - generic [ref=f2e125]:
        - link [ref=f2e127] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/product&product_id=42
          - img "Apple Cinema 30\"" [ref=f2e128]
        - generic [ref=f2e129]:
          - heading [level=4] [ref=f2e130]:
            - link "Apple Cinema 30\"" [ref=f2e131] [cursor=pointer]:
              - /url: https://awesomeqa.com/ui/index.php?route=product/product&product_id=42
          - paragraph [ref=f2e132]: The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed sp..
          - paragraph [ref=f2e133]:
            - text: $110.00 $122.00
            - generic [ref=f2e134]: "Ex Tax: $90.00"
        - generic [ref=f2e135]:
          - button " Add to Cart" [ref=f2e136] [cursor=pointer]:
            - generic [ref=f2e137]: 
            - text: Add to Cart
          - button "" [ref=f2e138] [cursor=pointer]
          - button "" [ref=f2e140] [cursor=pointer]
      - generic [ref=f2e143]:
        - link [ref=f2e145] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/product&product_id=30
          - img "Canon EOS 5D" [ref=f2e146]
        - generic [ref=f2e147]:
          - heading [level=4] [ref=f2e148]:
            - link "Canon EOS 5D" [ref=f2e149] [cursor=pointer]:
              - /url: https://awesomeqa.com/ui/index.php?route=product/product&product_id=30
          - paragraph [ref=f2e150]: Canon's press material for the EOS 5D states that it 'defines (a) new D-SLR category', while we'r..
          - paragraph [ref=f2e151]:
            - text: $98.00 $122.00
            - generic [ref=f2e152]: "Ex Tax: $80.00"
        - generic [ref=f2e153]:
          - button " Add to Cart" [ref=f2e154] [cursor=pointer]:
            - generic [ref=f2e155]: 
            - text: Add to Cart
          - button "" [ref=f2e156] [cursor=pointer]
          - button "" [ref=f2e158] [cursor=pointer]
    - generic [ref=f2e160]:
      - generic [ref=f2e162]:
        - img "NFL" [ref=f2e164]
        - img "RedBull" [ref=f2e166]
        - img "Sony" [ref=f2e168]
        - img "Starbucks" [ref=f2e170]
        - img "Nintendo" [ref=f2e172]
        - img "Harley Davidson" [ref=f2e174]
        - img "Dell" [ref=f2e176]
        - img "Disney" [ref=f2e178]
        - img "Coca Cola" [ref=f2e180]
        - img "Burger King" [ref=f2e182]
        - img "Canon" [ref=f2e184]
        - img "NFL" [ref=f2e186]
        - img "RedBull" [ref=f2e188]
        - img "Sony" [ref=f2e190]
        - img "Starbucks" [ref=f2e192]
        - img "Nintendo" [ref=f2e194]
        - img "Harley Davidson" [ref=f2e196]
        - img "Dell" [ref=f2e198]
        - img "Disney" [ref=f2e200]
        - img "Coca Cola" [ref=f2e202]
        - img "Burger King" [ref=f2e204]
      - generic [ref=f2e205]:
        - generic [ref=f2e206] [cursor=pointer]
        - generic [ref=f2e207] [cursor=pointer]
        - generic [ref=f2e208] [cursor=pointer]
        - generic [ref=f2e209] [cursor=pointer]
        - generic [ref=f2e210] [cursor=pointer]
        - generic [ref=f2e211] [cursor=pointer]
        - generic [ref=f2e212] [cursor=pointer]
        - generic [ref=f2e213] [cursor=pointer]
        - generic [ref=f2e214] [cursor=pointer]
        - generic [ref=f2e215] [cursor=pointer]
        - generic [ref=f2e216] [cursor=pointer]
      - generic:
        - generic [ref=f2e217] [cursor=pointer]: 
        - generic [ref=f2e218] [cursor=pointer]: 
  - contentinfo [ref=f2e219]:
    - generic [ref=f2e220]:
      - generic [ref=f2e221]:
        - generic [ref=f2e222]:
          - heading "Information" [level=5] [ref=f2e223]
          - list [ref=f2e224]:
            - listitem [ref=f2e225]:
              - link "About Us" [ref=f2e226] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=information/information&information_id=4
            - listitem [ref=f2e227]:
              - link "Delivery Information" [ref=f2e228] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=information/information&information_id=6
            - listitem [ref=f2e229]:
              - link "Privacy Policy" [ref=f2e230] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=information/information&information_id=3
            - listitem [ref=f2e231]:
              - link "Terms & Conditions" [ref=f2e232] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=information/information&information_id=5
        - generic [ref=f2e233]:
          - heading "Customer Service" [level=5] [ref=f2e234]
          - list [ref=f2e235]:
            - listitem [ref=f2e236]:
              - link "Contact Us" [ref=f2e237] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=information/contact
            - listitem [ref=f2e238]:
              - link "Returns" [ref=f2e239] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=account/return/add
            - listitem [ref=f2e240]:
              - link "Site Map" [ref=f2e241] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=information/sitemap
        - generic [ref=f2e242]:
          - heading "Extras" [level=5] [ref=f2e243]
          - list [ref=f2e244]:
            - listitem [ref=f2e245]:
              - link "Brands" [ref=f2e246] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=product/manufacturer
            - listitem [ref=f2e247]:
              - link "Gift Certificates" [ref=f2e248] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=account/voucher
            - listitem [ref=f2e249]:
              - link "Affiliate" [ref=f2e250] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=affiliate/login
            - listitem [ref=f2e251]:
              - link "Specials" [ref=f2e252] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=product/special
        - generic [ref=f2e253]:
          - heading "My Account" [level=5] [ref=f2e254]
          - list [ref=f2e255]:
            - listitem [ref=f2e256]:
              - link "My Account" [ref=f2e257] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=account/account
            - listitem [ref=f2e258]:
              - link "Order History" [ref=f2e259] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=account/order
            - listitem [ref=f2e260]:
              - link "Wish List" [ref=f2e261] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=account/wishlist
            - listitem [ref=f2e262]:
              - link "Newsletter" [ref=f2e263] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=account/newsletter
      - separator [ref=f2e264]
      - paragraph [ref=f2e265]:
        - text: Powered By
        - link "OpenCart" [ref=f2e266] [cursor=pointer]:
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
  15 | import { test, expect } from '../../fixtures/pageFixtures';
  16 | import { DataProvider } from '../../utils/DataReader';
  17 | import path from 'path';
  18 | 
  19 | interface LoginDataRow {
  20 |     testName: string;
  21 |     email: string;
  22 |     password: string;
  23 |     expected: string;
  24 | }
  25 | 
  26 | const loginData: LoginDataRow[] = DataProvider.readJson(path.resolve(__dirname, '../../testdata/opencart_logindata.json'));
  27 | 
  28 | loginData.forEach((data, index) => {
  29 |     test(`Login Data Driven - ${data.testName} [row ${index + 1}] @datadriven @master @web`, async ({ homePage, loginPage, myAccountPage }) => {
  30 | 
  31 |         await test.step('1) Open the application and navigate to login', async () => {
> 32 |             await homePage.navigateTo(process.env.WEB_APP_URL || 'http://localhost/opencart/upload/');
     |                            ^ TypeError: homePage.navigateTo is not a function
  33 |             await homePage.clickMyAccount();
  34 |             await homePage.clickLogin();
  35 |         });
  36 | 
  37 |         await test.step('2) Enter credentials from test data', async () => {
  38 |             const email = data.email.trim();
  39 |             const password = data.password.trim();
  40 | 
  41 |             if (email) {
  42 |                 await loginPage.setEmail(email);
  43 |             }
  44 |             if (password) {
  45 |                 await loginPage.setPassword(password);
  46 |             }
  47 |         });
  48 | 
  49 |         await test.step('3) Submit the login form', async () => {
  50 |             await loginPage.clickLogin();
  51 |         });
  52 | 
  53 |         await test.step('4) Validate the result', async () => {
  54 |             if (data.expected === 'success') {
  55 |                 const isMyAccount = await myAccountPage.isMyAccountPageExists();
  56 |                 expect(isMyAccount).toBeTruthy();
  57 |             } else {
  58 |                 const isWarning = await loginPage.isWarningMessageVisible();
  59 |                 expect(isWarning).toBeTruthy();
  60 | 
  61 |                 const warningText = await loginPage.getWarningMessage();
  62 |                 expect(warningText).toContain('Warning');
  63 |             }
  64 |         });
  65 | 
  66 |         console.log(`✅ Login Data Driven - ${data.testName} completed!`);
  67 |     });
  68 | });
```