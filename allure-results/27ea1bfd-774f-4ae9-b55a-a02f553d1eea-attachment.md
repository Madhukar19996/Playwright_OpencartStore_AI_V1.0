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
- generic [active] [ref=f8e1]:
  - navigation [ref=f8e2]:
    - generic [ref=f8e3]:
      - button "$ Currency " [ref=f8e7] [cursor=pointer]:
        - strong [ref=f8e8]: $
        - text: Currency
        - generic [ref=f8e9]: 
      - list [ref=f8e11]:
        - listitem [ref=f8e12]:
          - link "" [ref=f8e13] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=information/contact
          - text: "123456789"
        - listitem [ref=f8e15]:
          - link " My Account" [ref=f8e16] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=account/account
            - generic [ref=f8e17]: 
            - text: My Account
        - listitem [ref=f8e19]:
          - link " Wish List (0)" [ref=f8e20] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=account/wishlist
            - generic [ref=f8e21]: 
            - text: Wish List (0)
        - listitem [ref=f8e22]:
          - link " Shopping Cart" [ref=f8e23] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=checkout/cart
            - generic [ref=f8e24]: 
            - text: Shopping Cart
        - listitem [ref=f8e25]:
          - link " Checkout" [ref=f8e26] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=checkout/checkout
            - generic [ref=f8e27]: 
            - text: Checkout
  - banner [ref=f8e28]:
    - generic [ref=f8e30]:
      - link [ref=f8e33] [cursor=pointer]:
        - /url: https://awesomeqa.com/ui/index.php?route=common/home
        - img "TheTestingAcademy eCommerce" [ref=f8e34]
      - generic [ref=f8e36]:
        - textbox "Search" [ref=f8e37]
        - button "" [ref=f8e39] [cursor=pointer]
      - button " 0 item(s) - $0.00" [ref=f8e43] [cursor=pointer]:
        - generic [ref=f8e44]: 
        - text: 0 item(s) - $0.00
  - navigation [ref=f8e46]:
    - generic: 
    - list [ref=f8e48]:
      - listitem [ref=f8e49]:
        - link "Desktops" [ref=f8e50] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=20
      - listitem [ref=f8e51]:
        - link "Laptops & Notebooks" [ref=f8e52] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=18
      - listitem [ref=f8e53]:
        - link "Components" [ref=f8e54] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=25
      - listitem [ref=f8e55]:
        - link "Tablets" [ref=f8e56] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=57
      - listitem [ref=f8e57]:
        - link "Software" [ref=f8e58] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=17
      - listitem [ref=f8e59]:
        - link "Phones & PDAs" [ref=f8e60] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=24
      - listitem [ref=f8e61]:
        - link "Cameras" [ref=f8e62] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=33
      - listitem [ref=f8e63]:
        - link "MP3 Players" [ref=f8e64] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=34
  - generic [ref=f8e67]:
    - generic [ref=f8e68]:
      - generic [ref=f8e70]:
        - img "MacBookAir" [ref=f8e72]
        - link [ref=f8e74] [cursor=pointer]:
          - /url: index.php?route=product/product&path=57&product_id=49
          - img "iPhone 6" [ref=f8e75]
        - img "MacBookAir" [ref=f8e77]
        - link [ref=f8e79] [cursor=pointer]:
          - /url: index.php?route=product/product&path=57&product_id=49
          - img "iPhone 6" [ref=f8e80]
      - generic [ref=f8e81]:
        - generic [ref=f8e82] [cursor=pointer]
        - generic [ref=f8e83] [cursor=pointer]
      - generic:
        - generic [ref=f8e84] [cursor=pointer]: 
        - generic [ref=f8e85] [cursor=pointer]: 
    - heading "Featured" [level=3] [ref=f8e86]
    - generic [ref=f8e87]:
      - generic [ref=f8e89]:
        - link [ref=f8e91] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/product&product_id=43
          - img "MacBook" [ref=f8e92]
        - generic [ref=f8e93]:
          - heading [level=4] [ref=f8e94]:
            - link "MacBook" [ref=f8e95] [cursor=pointer]:
              - /url: https://awesomeqa.com/ui/index.php?route=product/product&product_id=43
          - paragraph [ref=f8e96]: Intel Core 2 Duo processor Powered by an Intel Core 2 Duo processor at speeds up to 2.1..
          - paragraph [ref=f8e97]:
            - text: $602.00
            - generic [ref=f8e98]: "Ex Tax: $500.00"
        - generic [ref=f8e99]:
          - button " Add to Cart" [ref=f8e100] [cursor=pointer]:
            - generic [ref=f8e101]: 
            - text: Add to Cart
          - button "" [ref=f8e102] [cursor=pointer]
          - button "" [ref=f8e104] [cursor=pointer]
      - generic [ref=f8e107]:
        - link [ref=f8e109] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/product&product_id=40
          - img "iPhone" [ref=f8e110]
        - generic [ref=f8e111]:
          - heading [level=4] [ref=f8e112]:
            - link "iPhone" [ref=f8e113] [cursor=pointer]:
              - /url: https://awesomeqa.com/ui/index.php?route=product/product&product_id=40
          - paragraph [ref=f8e114]: iPhone is a revolutionary new mobile phone that allows you to make a call by simply tapping a nam..
          - paragraph [ref=f8e115]:
            - text: $123.20
            - generic [ref=f8e116]: "Ex Tax: $101.00"
        - generic [ref=f8e117]:
          - button " Add to Cart" [ref=f8e118] [cursor=pointer]:
            - generic [ref=f8e119]: 
            - text: Add to Cart
          - button "" [ref=f8e120] [cursor=pointer]
          - button "" [ref=f8e122] [cursor=pointer]
      - generic [ref=f8e125]:
        - link [ref=f8e127] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/product&product_id=42
          - img "Apple Cinema 30\"" [ref=f8e128]
        - generic [ref=f8e129]:
          - heading [level=4] [ref=f8e130]:
            - link "Apple Cinema 30\"" [ref=f8e131] [cursor=pointer]:
              - /url: https://awesomeqa.com/ui/index.php?route=product/product&product_id=42
          - paragraph [ref=f8e132]: The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed sp..
          - paragraph [ref=f8e133]:
            - text: $110.00 $122.00
            - generic [ref=f8e134]: "Ex Tax: $90.00"
        - generic [ref=f8e135]:
          - button " Add to Cart" [ref=f8e136] [cursor=pointer]:
            - generic [ref=f8e137]: 
            - text: Add to Cart
          - button "" [ref=f8e138] [cursor=pointer]
          - button "" [ref=f8e140] [cursor=pointer]
      - generic [ref=f8e143]:
        - link [ref=f8e145] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/product&product_id=30
          - img "Canon EOS 5D" [ref=f8e146]
        - generic [ref=f8e147]:
          - heading [level=4] [ref=f8e148]:
            - link "Canon EOS 5D" [ref=f8e149] [cursor=pointer]:
              - /url: https://awesomeqa.com/ui/index.php?route=product/product&product_id=30
          - paragraph [ref=f8e150]: Canon's press material for the EOS 5D states that it 'defines (a) new D-SLR category', while we'r..
          - paragraph [ref=f8e151]:
            - text: $98.00 $122.00
            - generic [ref=f8e152]: "Ex Tax: $80.00"
        - generic [ref=f8e153]:
          - button " Add to Cart" [ref=f8e154] [cursor=pointer]:
            - generic [ref=f8e155]: 
            - text: Add to Cart
          - button "" [ref=f8e156] [cursor=pointer]
          - button "" [ref=f8e158] [cursor=pointer]
    - generic [ref=f8e160]:
      - generic [ref=f8e162]:
        - img "NFL" [ref=f8e164]
        - img "RedBull" [ref=f8e166]
        - img "Sony" [ref=f8e168]
        - img "Starbucks" [ref=f8e170]
        - img "Nintendo" [ref=f8e172]
        - img "Harley Davidson" [ref=f8e174]
        - img "Dell" [ref=f8e176]
        - img "Disney" [ref=f8e178]
        - img "Coca Cola" [ref=f8e180]
        - img "Burger King" [ref=f8e182]
        - img "Canon" [ref=f8e184]
        - img "NFL" [ref=f8e186]
        - img "RedBull" [ref=f8e188]
        - img "Sony" [ref=f8e190]
        - img "Starbucks" [ref=f8e192]
        - img "Nintendo" [ref=f8e194]
        - img "Harley Davidson" [ref=f8e196]
        - img "Dell" [ref=f8e198]
        - img "Disney" [ref=f8e200]
        - img "Coca Cola" [ref=f8e202]
        - img "Burger King" [ref=f8e204]
      - generic [ref=f8e205]:
        - generic [ref=f8e206] [cursor=pointer]
        - generic [ref=f8e207] [cursor=pointer]
        - generic [ref=f8e208] [cursor=pointer]
        - generic [ref=f8e209] [cursor=pointer]
        - generic [ref=f8e210] [cursor=pointer]
        - generic [ref=f8e211] [cursor=pointer]
        - generic [ref=f8e212] [cursor=pointer]
        - generic [ref=f8e213] [cursor=pointer]
        - generic [ref=f8e214] [cursor=pointer]
        - generic [ref=f8e215] [cursor=pointer]
        - generic [ref=f8e216] [cursor=pointer]
      - generic:
        - generic [ref=f8e217] [cursor=pointer]: 
        - generic [ref=f8e218] [cursor=pointer]: 
  - contentinfo [ref=f8e219]:
    - generic [ref=f8e220]:
      - generic [ref=f8e221]:
        - generic [ref=f8e222]:
          - heading "Information" [level=5] [ref=f8e223]
          - list [ref=f8e224]:
            - listitem [ref=f8e225]:
              - link "About Us" [ref=f8e226] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=information/information&information_id=4
            - listitem [ref=f8e227]:
              - link "Delivery Information" [ref=f8e228] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=information/information&information_id=6
            - listitem [ref=f8e229]:
              - link "Privacy Policy" [ref=f8e230] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=information/information&information_id=3
            - listitem [ref=f8e231]:
              - link "Terms & Conditions" [ref=f8e232] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=information/information&information_id=5
        - generic [ref=f8e233]:
          - heading "Customer Service" [level=5] [ref=f8e234]
          - list [ref=f8e235]:
            - listitem [ref=f8e236]:
              - link "Contact Us" [ref=f8e237] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=information/contact
            - listitem [ref=f8e238]:
              - link "Returns" [ref=f8e239] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=account/return/add
            - listitem [ref=f8e240]:
              - link "Site Map" [ref=f8e241] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=information/sitemap
        - generic [ref=f8e242]:
          - heading "Extras" [level=5] [ref=f8e243]
          - list [ref=f8e244]:
            - listitem [ref=f8e245]:
              - link "Brands" [ref=f8e246] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=product/manufacturer
            - listitem [ref=f8e247]:
              - link "Gift Certificates" [ref=f8e248] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=account/voucher
            - listitem [ref=f8e249]:
              - link "Affiliate" [ref=f8e250] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=affiliate/login
            - listitem [ref=f8e251]:
              - link "Specials" [ref=f8e252] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=product/special
        - generic [ref=f8e253]:
          - heading "My Account" [level=5] [ref=f8e254]
          - list [ref=f8e255]:
            - listitem [ref=f8e256]:
              - link "My Account" [ref=f8e257] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=account/account
            - listitem [ref=f8e258]:
              - link "Order History" [ref=f8e259] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=account/order
            - listitem [ref=f8e260]:
              - link "Wish List" [ref=f8e261] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=account/wishlist
            - listitem [ref=f8e262]:
              - link "Newsletter" [ref=f8e263] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=account/newsletter
      - separator [ref=f8e264]
      - paragraph [ref=f8e265]:
        - text: Powered By
        - link "OpenCart" [ref=f8e266] [cursor=pointer]:
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