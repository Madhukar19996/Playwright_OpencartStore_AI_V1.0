# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: web\login-data-driven.spec.ts >> Login Data Driven - Invalid login [row 5] @datadriven @master @web
- Location: tests\web\login-data-driven.spec.ts:29:9

# Error details

```
TypeError: homePage.navigateTo is not a function
```

# Page snapshot

```yaml
- generic [active] [ref=f18e1]:
  - navigation [ref=f18e2]:
    - generic [ref=f18e3]:
      - button "$ Currency " [ref=f18e7] [cursor=pointer]:
        - strong [ref=f18e8]: $
        - text: Currency
        - generic [ref=f18e9]: 
      - list [ref=f18e11]:
        - listitem [ref=f18e12]:
          - link "" [ref=f18e13] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=information/contact
          - text: "123456789"
        - listitem [ref=f18e15]:
          - link " My Account" [ref=f18e16] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=account/account
            - generic [ref=f18e17]: 
            - text: My Account
        - listitem [ref=f18e19]:
          - link " Wish List (0)" [ref=f18e20] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=account/wishlist
            - generic [ref=f18e21]: 
            - text: Wish List (0)
        - listitem [ref=f18e22]:
          - link " Shopping Cart" [ref=f18e23] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=checkout/cart
            - generic [ref=f18e24]: 
            - text: Shopping Cart
        - listitem [ref=f18e25]:
          - link " Checkout" [ref=f18e26] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=checkout/checkout
            - generic [ref=f18e27]: 
            - text: Checkout
  - banner [ref=f18e28]:
    - generic [ref=f18e30]:
      - link [ref=f18e33] [cursor=pointer]:
        - /url: https://awesomeqa.com/ui/index.php?route=common/home
        - img "TheTestingAcademy eCommerce" [ref=f18e34]
      - generic [ref=f18e36]:
        - textbox "Search" [ref=f18e37]
        - button "" [ref=f18e39] [cursor=pointer]
      - button " 0 item(s) - $0.00" [ref=f18e43] [cursor=pointer]:
        - generic [ref=f18e44]: 
        - text: 0 item(s) - $0.00
  - navigation [ref=f18e46]:
    - generic: 
    - list [ref=f18e48]:
      - listitem [ref=f18e49]:
        - link "Desktops" [ref=f18e50] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=20
      - listitem [ref=f18e51]:
        - link "Laptops & Notebooks" [ref=f18e52] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=18
      - listitem [ref=f18e53]:
        - link "Components" [ref=f18e54] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=25
      - listitem [ref=f18e55]:
        - link "Tablets" [ref=f18e56] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=57
      - listitem [ref=f18e57]:
        - link "Software" [ref=f18e58] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=17
      - listitem [ref=f18e59]:
        - link "Phones & PDAs" [ref=f18e60] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=24
      - listitem [ref=f18e61]:
        - link "Cameras" [ref=f18e62] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=33
      - listitem [ref=f18e63]:
        - link "MP3 Players" [ref=f18e64] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=34
  - generic [ref=f18e67]:
    - generic [ref=f18e68]:
      - generic [ref=f18e70]:
        - img "MacBookAir" [ref=f18e72]
        - link [ref=f18e74] [cursor=pointer]:
          - /url: index.php?route=product/product&path=57&product_id=49
          - img "iPhone 6" [ref=f18e75]
        - img "MacBookAir" [ref=f18e77]
        - link [ref=f18e79] [cursor=pointer]:
          - /url: index.php?route=product/product&path=57&product_id=49
          - img "iPhone 6" [ref=f18e80]
      - generic [ref=f18e81]:
        - generic [ref=f18e82] [cursor=pointer]
        - generic [ref=f18e83] [cursor=pointer]
      - generic:
        - generic [ref=f18e84] [cursor=pointer]: 
        - generic [ref=f18e85] [cursor=pointer]: 
    - heading "Featured" [level=3] [ref=f18e86]
    - generic [ref=f18e87]:
      - generic [ref=f18e89]:
        - link [ref=f18e91] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/product&product_id=43
          - img "MacBook" [ref=f18e92]
        - generic [ref=f18e93]:
          - heading [level=4] [ref=f18e94]:
            - link "MacBook" [ref=f18e95] [cursor=pointer]:
              - /url: https://awesomeqa.com/ui/index.php?route=product/product&product_id=43
          - paragraph [ref=f18e96]: Intel Core 2 Duo processor Powered by an Intel Core 2 Duo processor at speeds up to 2.1..
          - paragraph [ref=f18e97]:
            - text: $602.00
            - generic [ref=f18e98]: "Ex Tax: $500.00"
        - generic [ref=f18e99]:
          - button " Add to Cart" [ref=f18e100] [cursor=pointer]:
            - generic [ref=f18e101]: 
            - text: Add to Cart
          - button "" [ref=f18e102] [cursor=pointer]
          - button "" [ref=f18e104] [cursor=pointer]
      - generic [ref=f18e107]:
        - link [ref=f18e109] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/product&product_id=40
          - img "iPhone" [ref=f18e110]
        - generic [ref=f18e111]:
          - heading [level=4] [ref=f18e112]:
            - link "iPhone" [ref=f18e113] [cursor=pointer]:
              - /url: https://awesomeqa.com/ui/index.php?route=product/product&product_id=40
          - paragraph [ref=f18e114]: iPhone is a revolutionary new mobile phone that allows you to make a call by simply tapping a nam..
          - paragraph [ref=f18e115]:
            - text: $123.20
            - generic [ref=f18e116]: "Ex Tax: $101.00"
        - generic [ref=f18e117]:
          - button " Add to Cart" [ref=f18e118] [cursor=pointer]:
            - generic [ref=f18e119]: 
            - text: Add to Cart
          - button "" [ref=f18e120] [cursor=pointer]
          - button "" [ref=f18e122] [cursor=pointer]
      - generic [ref=f18e125]:
        - link [ref=f18e127] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/product&product_id=42
          - img "Apple Cinema 30\"" [ref=f18e128]
        - generic [ref=f18e129]:
          - heading [level=4] [ref=f18e130]:
            - link "Apple Cinema 30\"" [ref=f18e131] [cursor=pointer]:
              - /url: https://awesomeqa.com/ui/index.php?route=product/product&product_id=42
          - paragraph [ref=f18e132]: The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed sp..
          - paragraph [ref=f18e133]:
            - text: $110.00 $122.00
            - generic [ref=f18e134]: "Ex Tax: $90.00"
        - generic [ref=f18e135]:
          - button " Add to Cart" [ref=f18e136] [cursor=pointer]:
            - generic [ref=f18e137]: 
            - text: Add to Cart
          - button "" [ref=f18e138] [cursor=pointer]
          - button "" [ref=f18e140] [cursor=pointer]
      - generic [ref=f18e143]:
        - link [ref=f18e145] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/product&product_id=30
          - img "Canon EOS 5D" [ref=f18e146]
        - generic [ref=f18e147]:
          - heading [level=4] [ref=f18e148]:
            - link "Canon EOS 5D" [ref=f18e149] [cursor=pointer]:
              - /url: https://awesomeqa.com/ui/index.php?route=product/product&product_id=30
          - paragraph [ref=f18e150]: Canon's press material for the EOS 5D states that it 'defines (a) new D-SLR category', while we'r..
          - paragraph [ref=f18e151]:
            - text: $98.00 $122.00
            - generic [ref=f18e152]: "Ex Tax: $80.00"
        - generic [ref=f18e153]:
          - button " Add to Cart" [ref=f18e154] [cursor=pointer]:
            - generic [ref=f18e155]: 
            - text: Add to Cart
          - button "" [ref=f18e156] [cursor=pointer]
          - button "" [ref=f18e158] [cursor=pointer]
    - generic [ref=f18e160]:
      - generic [ref=f18e162]:
        - img "NFL" [ref=f18e164]
        - img "RedBull" [ref=f18e166]
        - img "Sony" [ref=f18e168]
        - img "Starbucks" [ref=f18e170]
        - img "Nintendo" [ref=f18e172]
        - img "Harley Davidson" [ref=f18e174]
        - img "Dell" [ref=f18e176]
        - img "Disney" [ref=f18e178]
        - img "Coca Cola" [ref=f18e180]
        - img "Burger King" [ref=f18e182]
        - img "Canon" [ref=f18e184]
        - img "NFL" [ref=f18e186]
        - img "RedBull" [ref=f18e188]
        - img "Sony" [ref=f18e190]
        - img "Starbucks" [ref=f18e192]
        - img "Nintendo" [ref=f18e194]
        - img "Harley Davidson" [ref=f18e196]
        - img "Dell" [ref=f18e198]
        - img "Disney" [ref=f18e200]
        - img "Coca Cola" [ref=f18e202]
        - img "Burger King" [ref=f18e204]
      - generic [ref=f18e205]:
        - generic [ref=f18e206] [cursor=pointer]
        - generic [ref=f18e207] [cursor=pointer]
        - generic [ref=f18e208] [cursor=pointer]
        - generic [ref=f18e209] [cursor=pointer]
        - generic [ref=f18e210] [cursor=pointer]
        - generic [ref=f18e211] [cursor=pointer]
        - generic [ref=f18e212] [cursor=pointer]
        - generic [ref=f18e213] [cursor=pointer]
        - generic [ref=f18e214] [cursor=pointer]
        - generic [ref=f18e215] [cursor=pointer]
        - generic [ref=f18e216] [cursor=pointer]
      - generic:
        - generic [ref=f18e217] [cursor=pointer]: 
        - generic [ref=f18e218] [cursor=pointer]: 
  - contentinfo [ref=f18e219]:
    - generic [ref=f18e220]:
      - generic [ref=f18e221]:
        - generic [ref=f18e222]:
          - heading "Information" [level=5] [ref=f18e223]
          - list [ref=f18e224]:
            - listitem [ref=f18e225]:
              - link "About Us" [ref=f18e226] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=information/information&information_id=4
            - listitem [ref=f18e227]:
              - link "Delivery Information" [ref=f18e228] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=information/information&information_id=6
            - listitem [ref=f18e229]:
              - link "Privacy Policy" [ref=f18e230] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=information/information&information_id=3
            - listitem [ref=f18e231]:
              - link "Terms & Conditions" [ref=f18e232] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=information/information&information_id=5
        - generic [ref=f18e233]:
          - heading "Customer Service" [level=5] [ref=f18e234]
          - list [ref=f18e235]:
            - listitem [ref=f18e236]:
              - link "Contact Us" [ref=f18e237] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=information/contact
            - listitem [ref=f18e238]:
              - link "Returns" [ref=f18e239] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=account/return/add
            - listitem [ref=f18e240]:
              - link "Site Map" [ref=f18e241] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=information/sitemap
        - generic [ref=f18e242]:
          - heading "Extras" [level=5] [ref=f18e243]
          - list [ref=f18e244]:
            - listitem [ref=f18e245]:
              - link "Brands" [ref=f18e246] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=product/manufacturer
            - listitem [ref=f18e247]:
              - link "Gift Certificates" [ref=f18e248] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=account/voucher
            - listitem [ref=f18e249]:
              - link "Affiliate" [ref=f18e250] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=affiliate/login
            - listitem [ref=f18e251]:
              - link "Specials" [ref=f18e252] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=product/special
        - generic [ref=f18e253]:
          - heading "My Account" [level=5] [ref=f18e254]
          - list [ref=f18e255]:
            - listitem [ref=f18e256]:
              - link "My Account" [ref=f18e257] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=account/account
            - listitem [ref=f18e258]:
              - link "Order History" [ref=f18e259] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=account/order
            - listitem [ref=f18e260]:
              - link "Wish List" [ref=f18e261] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=account/wishlist
            - listitem [ref=f18e262]:
              - link "Newsletter" [ref=f18e263] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=account/newsletter
      - separator [ref=f18e264]
      - paragraph [ref=f18e265]:
        - text: Powered By
        - link "OpenCart" [ref=f18e266] [cursor=pointer]:
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