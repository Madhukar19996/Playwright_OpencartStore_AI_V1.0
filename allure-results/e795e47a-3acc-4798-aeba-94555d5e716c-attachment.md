# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: web\login-data-driven.spec.ts >> Login Data Driven - Invalid login [row 3] @datadriven @master @web
- Location: tests\web\login-data-driven.spec.ts:29:9

# Error details

```
TypeError: homePage.navigateTo is not a function
```

# Page snapshot

```yaml
- generic [active] [ref=f14e1]:
  - navigation [ref=f14e2]:
    - generic [ref=f14e3]:
      - button "$ Currency " [ref=f14e7] [cursor=pointer]:
        - strong [ref=f14e8]: $
        - text: Currency
        - generic [ref=f14e9]: 
      - list [ref=f14e11]:
        - listitem [ref=f14e12]:
          - link "" [ref=f14e13] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=information/contact
          - text: "123456789"
        - listitem [ref=f14e15]:
          - link " My Account" [ref=f14e16] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=account/account
            - generic [ref=f14e17]: 
            - text: My Account
        - listitem [ref=f14e19]:
          - link " Wish List (0)" [ref=f14e20] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=account/wishlist
            - generic [ref=f14e21]: 
            - text: Wish List (0)
        - listitem [ref=f14e22]:
          - link " Shopping Cart" [ref=f14e23] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=checkout/cart
            - generic [ref=f14e24]: 
            - text: Shopping Cart
        - listitem [ref=f14e25]:
          - link " Checkout" [ref=f14e26] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=checkout/checkout
            - generic [ref=f14e27]: 
            - text: Checkout
  - banner [ref=f14e28]:
    - generic [ref=f14e30]:
      - link [ref=f14e33] [cursor=pointer]:
        - /url: https://awesomeqa.com/ui/index.php?route=common/home
        - img "TheTestingAcademy eCommerce" [ref=f14e34]
      - generic [ref=f14e36]:
        - textbox "Search" [ref=f14e37]
        - button "" [ref=f14e39] [cursor=pointer]
      - button " 0 item(s) - $0.00" [ref=f14e43] [cursor=pointer]:
        - generic [ref=f14e44]: 
        - text: 0 item(s) - $0.00
  - navigation [ref=f14e46]:
    - generic: 
    - list [ref=f14e48]:
      - listitem [ref=f14e49]:
        - link "Desktops" [ref=f14e50] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=20
      - listitem [ref=f14e51]:
        - link "Laptops & Notebooks" [ref=f14e52] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=18
      - listitem [ref=f14e53]:
        - link "Components" [ref=f14e54] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=25
      - listitem [ref=f14e55]:
        - link "Tablets" [ref=f14e56] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=57
      - listitem [ref=f14e57]:
        - link "Software" [ref=f14e58] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=17
      - listitem [ref=f14e59]:
        - link "Phones & PDAs" [ref=f14e60] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=24
      - listitem [ref=f14e61]:
        - link "Cameras" [ref=f14e62] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=33
      - listitem [ref=f14e63]:
        - link "MP3 Players" [ref=f14e64] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=34
  - generic [ref=f14e67]:
    - generic [ref=f14e68]:
      - generic [ref=f14e70]:
        - img "MacBookAir" [ref=f14e72]
        - link [ref=f14e74] [cursor=pointer]:
          - /url: index.php?route=product/product&path=57&product_id=49
          - img "iPhone 6" [ref=f14e75]
        - img "MacBookAir" [ref=f14e77]
        - link [ref=f14e79] [cursor=pointer]:
          - /url: index.php?route=product/product&path=57&product_id=49
          - img "iPhone 6" [ref=f14e80]
      - generic [ref=f14e81]:
        - generic [ref=f14e82] [cursor=pointer]
        - generic [ref=f14e83] [cursor=pointer]
      - generic:
        - generic [ref=f14e84] [cursor=pointer]: 
        - generic [ref=f14e85] [cursor=pointer]: 
    - heading "Featured" [level=3] [ref=f14e86]
    - generic [ref=f14e87]:
      - generic [ref=f14e89]:
        - link [ref=f14e91] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/product&product_id=43
          - img "MacBook" [ref=f14e92]
        - generic [ref=f14e93]:
          - heading [level=4] [ref=f14e94]:
            - link "MacBook" [ref=f14e95] [cursor=pointer]:
              - /url: https://awesomeqa.com/ui/index.php?route=product/product&product_id=43
          - paragraph [ref=f14e96]: Intel Core 2 Duo processor Powered by an Intel Core 2 Duo processor at speeds up to 2.1..
          - paragraph [ref=f14e97]:
            - text: $602.00
            - generic [ref=f14e98]: "Ex Tax: $500.00"
        - generic [ref=f14e99]:
          - button " Add to Cart" [ref=f14e100] [cursor=pointer]:
            - generic [ref=f14e101]: 
            - text: Add to Cart
          - button "" [ref=f14e102] [cursor=pointer]
          - button "" [ref=f14e104] [cursor=pointer]
      - generic [ref=f14e107]:
        - link [ref=f14e109] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/product&product_id=40
          - img "iPhone" [ref=f14e110]
        - generic [ref=f14e111]:
          - heading [level=4] [ref=f14e112]:
            - link "iPhone" [ref=f14e113] [cursor=pointer]:
              - /url: https://awesomeqa.com/ui/index.php?route=product/product&product_id=40
          - paragraph [ref=f14e114]: iPhone is a revolutionary new mobile phone that allows you to make a call by simply tapping a nam..
          - paragraph [ref=f14e115]:
            - text: $123.20
            - generic [ref=f14e116]: "Ex Tax: $101.00"
        - generic [ref=f14e117]:
          - button " Add to Cart" [ref=f14e118] [cursor=pointer]:
            - generic [ref=f14e119]: 
            - text: Add to Cart
          - button "" [ref=f14e120] [cursor=pointer]
          - button "" [ref=f14e122] [cursor=pointer]
      - generic [ref=f14e125]:
        - link [ref=f14e127] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/product&product_id=42
          - img "Apple Cinema 30\"" [ref=f14e128]
        - generic [ref=f14e129]:
          - heading [level=4] [ref=f14e130]:
            - link "Apple Cinema 30\"" [ref=f14e131] [cursor=pointer]:
              - /url: https://awesomeqa.com/ui/index.php?route=product/product&product_id=42
          - paragraph [ref=f14e132]: The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed sp..
          - paragraph [ref=f14e133]:
            - text: $110.00 $122.00
            - generic [ref=f14e134]: "Ex Tax: $90.00"
        - generic [ref=f14e135]:
          - button " Add to Cart" [ref=f14e136] [cursor=pointer]:
            - generic [ref=f14e137]: 
            - text: Add to Cart
          - button "" [ref=f14e138] [cursor=pointer]
          - button "" [ref=f14e140] [cursor=pointer]
      - generic [ref=f14e143]:
        - link [ref=f14e145] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/product&product_id=30
          - img "Canon EOS 5D" [ref=f14e146]
        - generic [ref=f14e147]:
          - heading [level=4] [ref=f14e148]:
            - link "Canon EOS 5D" [ref=f14e149] [cursor=pointer]:
              - /url: https://awesomeqa.com/ui/index.php?route=product/product&product_id=30
          - paragraph [ref=f14e150]: Canon's press material for the EOS 5D states that it 'defines (a) new D-SLR category', while we'r..
          - paragraph [ref=f14e151]:
            - text: $98.00 $122.00
            - generic [ref=f14e152]: "Ex Tax: $80.00"
        - generic [ref=f14e153]:
          - button " Add to Cart" [ref=f14e154] [cursor=pointer]:
            - generic [ref=f14e155]: 
            - text: Add to Cart
          - button "" [ref=f14e156] [cursor=pointer]
          - button "" [ref=f14e158] [cursor=pointer]
    - generic [ref=f14e160]:
      - generic [ref=f14e162]:
        - img "NFL" [ref=f14e164]
        - img "RedBull" [ref=f14e166]
        - img "Sony" [ref=f14e168]
        - img "Starbucks" [ref=f14e170]
        - img "Nintendo" [ref=f14e172]
        - img "Harley Davidson" [ref=f14e174]
        - img "Dell" [ref=f14e176]
        - img "Disney" [ref=f14e178]
        - img "Coca Cola" [ref=f14e180]
        - img "Burger King" [ref=f14e182]
        - img "Canon" [ref=f14e184]
        - img "NFL" [ref=f14e186]
        - img "RedBull" [ref=f14e188]
        - img "Sony" [ref=f14e190]
        - img "Starbucks" [ref=f14e192]
        - img "Nintendo" [ref=f14e194]
        - img "Harley Davidson" [ref=f14e196]
        - img "Dell" [ref=f14e198]
        - img "Disney" [ref=f14e200]
        - img "Coca Cola" [ref=f14e202]
        - img "Burger King" [ref=f14e204]
      - generic [ref=f14e205]:
        - generic [ref=f14e206] [cursor=pointer]
        - generic [ref=f14e207] [cursor=pointer]
        - generic [ref=f14e208] [cursor=pointer]
        - generic [ref=f14e209] [cursor=pointer]
        - generic [ref=f14e210] [cursor=pointer]
        - generic [ref=f14e211] [cursor=pointer]
        - generic [ref=f14e212] [cursor=pointer]
        - generic [ref=f14e213] [cursor=pointer]
        - generic [ref=f14e214] [cursor=pointer]
        - generic [ref=f14e215] [cursor=pointer]
        - generic [ref=f14e216] [cursor=pointer]
      - generic:
        - generic [ref=f14e217] [cursor=pointer]: 
        - generic [ref=f14e218] [cursor=pointer]: 
  - contentinfo [ref=f14e219]:
    - generic [ref=f14e220]:
      - generic [ref=f14e221]:
        - generic [ref=f14e222]:
          - heading "Information" [level=5] [ref=f14e223]
          - list [ref=f14e224]:
            - listitem [ref=f14e225]:
              - link "About Us" [ref=f14e226] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=information/information&information_id=4
            - listitem [ref=f14e227]:
              - link "Delivery Information" [ref=f14e228] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=information/information&information_id=6
            - listitem [ref=f14e229]:
              - link "Privacy Policy" [ref=f14e230] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=information/information&information_id=3
            - listitem [ref=f14e231]:
              - link "Terms & Conditions" [ref=f14e232] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=information/information&information_id=5
        - generic [ref=f14e233]:
          - heading "Customer Service" [level=5] [ref=f14e234]
          - list [ref=f14e235]:
            - listitem [ref=f14e236]:
              - link "Contact Us" [ref=f14e237] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=information/contact
            - listitem [ref=f14e238]:
              - link "Returns" [ref=f14e239] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=account/return/add
            - listitem [ref=f14e240]:
              - link "Site Map" [ref=f14e241] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=information/sitemap
        - generic [ref=f14e242]:
          - heading "Extras" [level=5] [ref=f14e243]
          - list [ref=f14e244]:
            - listitem [ref=f14e245]:
              - link "Brands" [ref=f14e246] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=product/manufacturer
            - listitem [ref=f14e247]:
              - link "Gift Certificates" [ref=f14e248] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=account/voucher
            - listitem [ref=f14e249]:
              - link "Affiliate" [ref=f14e250] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=affiliate/login
            - listitem [ref=f14e251]:
              - link "Specials" [ref=f14e252] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=product/special
        - generic [ref=f14e253]:
          - heading "My Account" [level=5] [ref=f14e254]
          - list [ref=f14e255]:
            - listitem [ref=f14e256]:
              - link "My Account" [ref=f14e257] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=account/account
            - listitem [ref=f14e258]:
              - link "Order History" [ref=f14e259] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=account/order
            - listitem [ref=f14e260]:
              - link "Wish List" [ref=f14e261] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=account/wishlist
            - listitem [ref=f14e262]:
              - link "Newsletter" [ref=f14e263] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=account/newsletter
      - separator [ref=f14e264]
      - paragraph [ref=f14e265]:
        - text: Powered By
        - link "OpenCart" [ref=f14e266] [cursor=pointer]:
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