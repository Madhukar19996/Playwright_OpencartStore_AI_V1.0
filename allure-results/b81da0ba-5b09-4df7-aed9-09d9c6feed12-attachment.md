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
- generic [active] [ref=f12e1]:
  - navigation [ref=f12e2]:
    - generic [ref=f12e3]:
      - button "$ Currency " [ref=f12e7] [cursor=pointer]:
        - strong [ref=f12e8]: $
        - text: Currency
        - generic [ref=f12e9]: 
      - list [ref=f12e11]:
        - listitem [ref=f12e12]:
          - link "" [ref=f12e13] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=information/contact
          - text: "123456789"
        - listitem [ref=f12e15]:
          - link " My Account" [ref=f12e16] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=account/account
            - generic [ref=f12e17]: 
            - text: My Account
        - listitem [ref=f12e19]:
          - link " Wish List (0)" [ref=f12e20] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=account/wishlist
            - generic [ref=f12e21]: 
            - text: Wish List (0)
        - listitem [ref=f12e22]:
          - link " Shopping Cart" [ref=f12e23] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=checkout/cart
            - generic [ref=f12e24]: 
            - text: Shopping Cart
        - listitem [ref=f12e25]:
          - link " Checkout" [ref=f12e26] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=checkout/checkout
            - generic [ref=f12e27]: 
            - text: Checkout
  - banner [ref=f12e28]:
    - generic [ref=f12e30]:
      - link [ref=f12e33] [cursor=pointer]:
        - /url: https://awesomeqa.com/ui/index.php?route=common/home
        - img "TheTestingAcademy eCommerce" [ref=f12e34]
      - generic [ref=f12e36]:
        - textbox "Search" [ref=f12e37]
        - button "" [ref=f12e39] [cursor=pointer]
      - button " 0 item(s) - $0.00" [ref=f12e43] [cursor=pointer]:
        - generic [ref=f12e44]: 
        - text: 0 item(s) - $0.00
  - navigation [ref=f12e46]:
    - generic: 
    - list [ref=f12e48]:
      - listitem [ref=f12e49]:
        - link "Desktops" [ref=f12e50] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=20
      - listitem [ref=f12e51]:
        - link "Laptops & Notebooks" [ref=f12e52] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=18
      - listitem [ref=f12e53]:
        - link "Components" [ref=f12e54] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=25
      - listitem [ref=f12e55]:
        - link "Tablets" [ref=f12e56] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=57
      - listitem [ref=f12e57]:
        - link "Software" [ref=f12e58] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=17
      - listitem [ref=f12e59]:
        - link "Phones & PDAs" [ref=f12e60] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=24
      - listitem [ref=f12e61]:
        - link "Cameras" [ref=f12e62] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=33
      - listitem [ref=f12e63]:
        - link "MP3 Players" [ref=f12e64] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=34
  - generic [ref=f12e67]:
    - generic [ref=f12e68]:
      - generic [ref=f12e70]:
        - img "MacBookAir" [ref=f12e72]
        - link [ref=f12e74] [cursor=pointer]:
          - /url: index.php?route=product/product&path=57&product_id=49
          - img "iPhone 6" [ref=f12e75]
        - img "MacBookAir" [ref=f12e77]
        - link [ref=f12e79] [cursor=pointer]:
          - /url: index.php?route=product/product&path=57&product_id=49
          - img "iPhone 6" [ref=f12e80]
      - generic [ref=f12e81]:
        - generic [ref=f12e82] [cursor=pointer]
        - generic [ref=f12e83] [cursor=pointer]
      - generic:
        - generic [ref=f12e84] [cursor=pointer]: 
        - generic [ref=f12e85] [cursor=pointer]: 
    - heading "Featured" [level=3] [ref=f12e86]
    - generic [ref=f12e87]:
      - generic [ref=f12e89]:
        - link [ref=f12e91] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/product&product_id=43
          - img "MacBook" [ref=f12e92]
        - generic [ref=f12e93]:
          - heading [level=4] [ref=f12e94]:
            - link "MacBook" [ref=f12e95] [cursor=pointer]:
              - /url: https://awesomeqa.com/ui/index.php?route=product/product&product_id=43
          - paragraph [ref=f12e96]: Intel Core 2 Duo processor Powered by an Intel Core 2 Duo processor at speeds up to 2.1..
          - paragraph [ref=f12e97]:
            - text: $602.00
            - generic [ref=f12e98]: "Ex Tax: $500.00"
        - generic [ref=f12e99]:
          - button " Add to Cart" [ref=f12e100] [cursor=pointer]:
            - generic [ref=f12e101]: 
            - text: Add to Cart
          - button "" [ref=f12e102] [cursor=pointer]
          - button "" [ref=f12e104] [cursor=pointer]
      - generic [ref=f12e107]:
        - link [ref=f12e109] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/product&product_id=40
          - img "iPhone" [ref=f12e110]
        - generic [ref=f12e111]:
          - heading [level=4] [ref=f12e112]:
            - link "iPhone" [ref=f12e113] [cursor=pointer]:
              - /url: https://awesomeqa.com/ui/index.php?route=product/product&product_id=40
          - paragraph [ref=f12e114]: iPhone is a revolutionary new mobile phone that allows you to make a call by simply tapping a nam..
          - paragraph [ref=f12e115]:
            - text: $123.20
            - generic [ref=f12e116]: "Ex Tax: $101.00"
        - generic [ref=f12e117]:
          - button " Add to Cart" [ref=f12e118] [cursor=pointer]:
            - generic [ref=f12e119]: 
            - text: Add to Cart
          - button "" [ref=f12e120] [cursor=pointer]
          - button "" [ref=f12e122] [cursor=pointer]
      - generic [ref=f12e125]:
        - link [ref=f12e127] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/product&product_id=42
          - img "Apple Cinema 30\"" [ref=f12e128]
        - generic [ref=f12e129]:
          - heading [level=4] [ref=f12e130]:
            - link "Apple Cinema 30\"" [ref=f12e131] [cursor=pointer]:
              - /url: https://awesomeqa.com/ui/index.php?route=product/product&product_id=42
          - paragraph [ref=f12e132]: The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed sp..
          - paragraph [ref=f12e133]:
            - text: $110.00 $122.00
            - generic [ref=f12e134]: "Ex Tax: $90.00"
        - generic [ref=f12e135]:
          - button " Add to Cart" [ref=f12e136] [cursor=pointer]:
            - generic [ref=f12e137]: 
            - text: Add to Cart
          - button "" [ref=f12e138] [cursor=pointer]
          - button "" [ref=f12e140] [cursor=pointer]
      - generic [ref=f12e143]:
        - link [ref=f12e145] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/product&product_id=30
          - img "Canon EOS 5D" [ref=f12e146]
        - generic [ref=f12e147]:
          - heading [level=4] [ref=f12e148]:
            - link "Canon EOS 5D" [ref=f12e149] [cursor=pointer]:
              - /url: https://awesomeqa.com/ui/index.php?route=product/product&product_id=30
          - paragraph [ref=f12e150]: Canon's press material for the EOS 5D states that it 'defines (a) new D-SLR category', while we'r..
          - paragraph [ref=f12e151]:
            - text: $98.00 $122.00
            - generic [ref=f12e152]: "Ex Tax: $80.00"
        - generic [ref=f12e153]:
          - button " Add to Cart" [ref=f12e154] [cursor=pointer]:
            - generic [ref=f12e155]: 
            - text: Add to Cart
          - button "" [ref=f12e156] [cursor=pointer]
          - button "" [ref=f12e158] [cursor=pointer]
    - generic [ref=f12e160]:
      - generic [ref=f12e162]:
        - img "NFL" [ref=f12e164]
        - img "RedBull" [ref=f12e166]
        - img "Sony" [ref=f12e168]
        - img "Starbucks" [ref=f12e170]
        - img "Nintendo" [ref=f12e172]
        - img "Harley Davidson" [ref=f12e174]
        - img "Dell" [ref=f12e176]
        - img "Disney" [ref=f12e178]
        - img "Coca Cola" [ref=f12e180]
        - img "Burger King" [ref=f12e182]
        - img "Canon" [ref=f12e184]
        - img "NFL" [ref=f12e186]
        - img "RedBull" [ref=f12e188]
        - img "Sony" [ref=f12e190]
        - img "Starbucks" [ref=f12e192]
        - img "Nintendo" [ref=f12e194]
        - img "Harley Davidson" [ref=f12e196]
        - img "Dell" [ref=f12e198]
        - img "Disney" [ref=f12e200]
        - img "Coca Cola" [ref=f12e202]
        - img "Burger King" [ref=f12e204]
      - generic [ref=f12e205]:
        - generic [ref=f12e206] [cursor=pointer]
        - generic [ref=f12e207] [cursor=pointer]
        - generic [ref=f12e208] [cursor=pointer]
        - generic [ref=f12e209] [cursor=pointer]
        - generic [ref=f12e210] [cursor=pointer]
        - generic [ref=f12e211] [cursor=pointer]
        - generic [ref=f12e212] [cursor=pointer]
        - generic [ref=f12e213] [cursor=pointer]
        - generic [ref=f12e214] [cursor=pointer]
        - generic [ref=f12e215] [cursor=pointer]
        - generic [ref=f12e216] [cursor=pointer]
      - generic:
        - generic [ref=f12e217] [cursor=pointer]: 
        - generic [ref=f12e218] [cursor=pointer]: 
  - contentinfo [ref=f12e219]:
    - generic [ref=f12e220]:
      - generic [ref=f12e221]:
        - generic [ref=f12e222]:
          - heading "Information" [level=5] [ref=f12e223]
          - list [ref=f12e224]:
            - listitem [ref=f12e225]:
              - link "About Us" [ref=f12e226] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=information/information&information_id=4
            - listitem [ref=f12e227]:
              - link "Delivery Information" [ref=f12e228] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=information/information&information_id=6
            - listitem [ref=f12e229]:
              - link "Privacy Policy" [ref=f12e230] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=information/information&information_id=3
            - listitem [ref=f12e231]:
              - link "Terms & Conditions" [ref=f12e232] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=information/information&information_id=5
        - generic [ref=f12e233]:
          - heading "Customer Service" [level=5] [ref=f12e234]
          - list [ref=f12e235]:
            - listitem [ref=f12e236]:
              - link "Contact Us" [ref=f12e237] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=information/contact
            - listitem [ref=f12e238]:
              - link "Returns" [ref=f12e239] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=account/return/add
            - listitem [ref=f12e240]:
              - link "Site Map" [ref=f12e241] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=information/sitemap
        - generic [ref=f12e242]:
          - heading "Extras" [level=5] [ref=f12e243]
          - list [ref=f12e244]:
            - listitem [ref=f12e245]:
              - link "Brands" [ref=f12e246] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=product/manufacturer
            - listitem [ref=f12e247]:
              - link "Gift Certificates" [ref=f12e248] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=account/voucher
            - listitem [ref=f12e249]:
              - link "Affiliate" [ref=f12e250] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=affiliate/login
            - listitem [ref=f12e251]:
              - link "Specials" [ref=f12e252] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=product/special
        - generic [ref=f12e253]:
          - heading "My Account" [level=5] [ref=f12e254]
          - list [ref=f12e255]:
            - listitem [ref=f12e256]:
              - link "My Account" [ref=f12e257] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=account/account
            - listitem [ref=f12e258]:
              - link "Order History" [ref=f12e259] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=account/order
            - listitem [ref=f12e260]:
              - link "Wish List" [ref=f12e261] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=account/wishlist
            - listitem [ref=f12e262]:
              - link "Newsletter" [ref=f12e263] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=account/newsletter
      - separator [ref=f12e264]
      - paragraph [ref=f12e265]:
        - text: Powered By
        - link "OpenCart" [ref=f12e266] [cursor=pointer]:
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