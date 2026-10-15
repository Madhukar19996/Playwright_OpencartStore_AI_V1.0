# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: web\login-data-driven.spec.ts >> Login Data Driven - Valid login [row 1] @datadriven @master @web
- Location: tests\web\login-data-driven.spec.ts:29:9

# Error details

```
TypeError: homePage.navigateTo is not a function
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - navigation [ref=e2]:
    - generic [ref=e3]:
      - button "$ Currency " [ref=e7] [cursor=pointer]:
        - strong [ref=e8]: $
        - text: Currency
        - generic [ref=e9]: 
      - list [ref=e11]:
        - listitem [ref=e12]:
          - link "" [ref=e13] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=information/contact
          - text: "123456789"
        - listitem [ref=e15]:
          - link " My Account" [ref=e16] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=account/account
            - generic [ref=e17]: 
            - text: My Account
        - listitem [ref=e19]:
          - link " Wish List (0)" [ref=e20] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=account/wishlist
            - generic [ref=e21]: 
            - text: Wish List (0)
        - listitem [ref=e22]:
          - link " Shopping Cart" [ref=e23] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=checkout/cart
            - generic [ref=e24]: 
            - text: Shopping Cart
        - listitem [ref=e25]:
          - link " Checkout" [ref=e26] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=checkout/checkout
            - generic [ref=e27]: 
            - text: Checkout
  - banner [ref=e28]:
    - generic [ref=e30]:
      - link [ref=e33] [cursor=pointer]:
        - /url: https://awesomeqa.com/ui/index.php?route=common/home
        - img "TheTestingAcademy eCommerce" [ref=e34]
      - generic [ref=e36]:
        - textbox "Search" [ref=e37]
        - button "" [ref=e39] [cursor=pointer]
      - button " 0 item(s) - $0.00" [ref=e43] [cursor=pointer]:
        - generic [ref=e44]: 
        - text: 0 item(s) - $0.00
  - navigation [ref=e46]:
    - generic: 
    - list [ref=e48]:
      - listitem [ref=e49]:
        - link "Desktops" [ref=e50] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=20
      - listitem [ref=e51]:
        - link "Laptops & Notebooks" [ref=e52] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=18
      - listitem [ref=e53]:
        - link "Components" [ref=e54] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=25
        - generic [ref=e55]:
          - list [ref=e57]:
            - listitem [ref=e58]:
              - link "Mice and Trackballs (0)" [ref=e59] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=25_29
            - listitem [ref=e60]:
              - link "Monitors (2)" [ref=e61] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=25_28
            - listitem [ref=e62]:
              - link "Printers (0)" [ref=e63] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=25_30
            - listitem [ref=e64]:
              - link "Scanners (0)" [ref=e65] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=25_31
            - listitem [ref=e66]:
              - link "Web Cameras (0)" [ref=e67] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=25_32
          - link "Show All Components" [ref=e68] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=25
      - listitem [ref=e69]:
        - link "Tablets" [ref=e70] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=57
      - listitem [ref=e71]:
        - link "Software" [ref=e72] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=17
      - listitem [ref=e73]:
        - link "Phones & PDAs" [ref=e74] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=24
      - listitem [ref=e75]:
        - link "Cameras" [ref=e76] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=33
      - listitem [ref=e77]:
        - link "MP3 Players" [ref=e78] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=34
  - generic [ref=e81]:
    - generic [ref=e82]:
      - generic [ref=e84]:
        - img "MacBookAir" [ref=e86]
        - link [ref=e88] [cursor=pointer]:
          - /url: index.php?route=product/product&path=57&product_id=49
          - img "iPhone 6" [ref=e89]
        - img "MacBookAir" [ref=e91]
        - link [ref=e93] [cursor=pointer]:
          - /url: index.php?route=product/product&path=57&product_id=49
          - img "iPhone 6" [ref=e94]
      - generic [ref=e95]:
        - generic [ref=e96] [cursor=pointer]
        - generic [ref=e97] [cursor=pointer]
      - generic:
        - generic [ref=e98] [cursor=pointer]: 
        - generic [ref=e99] [cursor=pointer]: 
    - heading "Featured" [level=3] [ref=e100]
    - generic [ref=e101]:
      - generic [ref=e103]:
        - link [ref=e105] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/product&product_id=43
          - img "MacBook" [ref=e106]
        - generic [ref=e107]:
          - heading [level=4] [ref=e108]:
            - link "MacBook" [ref=e109] [cursor=pointer]:
              - /url: https://awesomeqa.com/ui/index.php?route=product/product&product_id=43
          - paragraph [ref=e110]: Intel Core 2 Duo processor Powered by an Intel Core 2 Duo processor at speeds up to 2.1..
          - paragraph [ref=e111]:
            - text: $602.00
            - generic [ref=e112]: "Ex Tax: $500.00"
        - generic [ref=e113]:
          - button " Add to Cart" [ref=e114] [cursor=pointer]:
            - generic [ref=e115]: 
            - text: Add to Cart
          - button "" [ref=e116] [cursor=pointer]
          - button "" [ref=e118] [cursor=pointer]
      - generic [ref=e121]:
        - link [ref=e123] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/product&product_id=40
          - img "iPhone" [ref=e124]
        - generic [ref=e125]:
          - heading [level=4] [ref=e126]:
            - link "iPhone" [ref=e127] [cursor=pointer]:
              - /url: https://awesomeqa.com/ui/index.php?route=product/product&product_id=40
          - paragraph [ref=e128]: iPhone is a revolutionary new mobile phone that allows you to make a call by simply tapping a nam..
          - paragraph [ref=e129]:
            - text: $123.20
            - generic [ref=e130]: "Ex Tax: $101.00"
        - generic [ref=e131]:
          - button " Add to Cart" [ref=e132] [cursor=pointer]:
            - generic [ref=e133]: 
            - text: Add to Cart
          - button "" [ref=e134] [cursor=pointer]
          - button "" [ref=e136] [cursor=pointer]
      - generic [ref=e139]:
        - link [ref=e141] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/product&product_id=42
          - img "Apple Cinema 30\"" [ref=e142]
        - generic [ref=e143]:
          - heading [level=4] [ref=e144]:
            - link "Apple Cinema 30\"" [ref=e145] [cursor=pointer]:
              - /url: https://awesomeqa.com/ui/index.php?route=product/product&product_id=42
          - paragraph [ref=e146]: The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed sp..
          - paragraph [ref=e147]:
            - text: $110.00 $122.00
            - generic [ref=e148]: "Ex Tax: $90.00"
        - generic [ref=e149]:
          - button " Add to Cart" [ref=e150] [cursor=pointer]:
            - generic [ref=e151]: 
            - text: Add to Cart
          - button "" [ref=e152] [cursor=pointer]
          - button "" [ref=e154] [cursor=pointer]
      - generic [ref=e157]:
        - link [ref=e159] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/product&product_id=30
          - img "Canon EOS 5D" [ref=e160]
        - generic [ref=e161]:
          - heading [level=4] [ref=e162]:
            - link "Canon EOS 5D" [ref=e163] [cursor=pointer]:
              - /url: https://awesomeqa.com/ui/index.php?route=product/product&product_id=30
          - paragraph [ref=e164]: Canon's press material for the EOS 5D states that it 'defines (a) new D-SLR category', while we'r..
          - paragraph [ref=e165]:
            - text: $98.00 $122.00
            - generic [ref=e166]: "Ex Tax: $80.00"
        - generic [ref=e167]:
          - button " Add to Cart" [ref=e168] [cursor=pointer]:
            - generic [ref=e169]: 
            - text: Add to Cart
          - button "" [ref=e170] [cursor=pointer]
          - button "" [ref=e172] [cursor=pointer]
    - generic [ref=e174]:
      - generic [ref=e176]:
        - img "NFL" [ref=e178]
        - img "RedBull" [ref=e180]
        - img "Sony" [ref=e182]
        - img "Starbucks" [ref=e184]
        - img "Nintendo" [ref=e186]
        - img "Harley Davidson" [ref=e188]
        - img "Dell" [ref=e190]
        - img "Disney" [ref=e192]
        - img "Coca Cola" [ref=e194]
        - img "Burger King" [ref=e196]
        - img "Canon" [ref=e198]
        - img "NFL" [ref=e200]
        - img "RedBull" [ref=e202]
        - img "Sony" [ref=e204]
        - img "Starbucks" [ref=e206]
        - img "Nintendo" [ref=e208]
        - img "Harley Davidson" [ref=e210]
        - img "Dell" [ref=e212]
        - img "Disney" [ref=e214]
        - img "Coca Cola" [ref=e216]
        - img "Burger King" [ref=e218]
      - generic [ref=e219]:
        - generic [ref=e220] [cursor=pointer]
        - generic [ref=e221] [cursor=pointer]
        - generic [ref=e222] [cursor=pointer]
        - generic [ref=e223] [cursor=pointer]
        - generic [ref=e224] [cursor=pointer]
        - generic [ref=e225] [cursor=pointer]
        - generic [ref=e226] [cursor=pointer]
        - generic [ref=e227] [cursor=pointer]
        - generic [ref=e228] [cursor=pointer]
        - generic [ref=e229] [cursor=pointer]
        - generic [ref=e230] [cursor=pointer]
      - generic:
        - generic [ref=e231] [cursor=pointer]: 
        - generic [ref=e232] [cursor=pointer]: 
  - contentinfo [ref=e233]:
    - generic [ref=e234]:
      - generic [ref=e235]:
        - generic [ref=e236]:
          - heading "Information" [level=5] [ref=e237]
          - list [ref=e238]:
            - listitem [ref=e239]:
              - link "About Us" [ref=e240] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=information/information&information_id=4
            - listitem [ref=e241]:
              - link "Delivery Information" [ref=e242] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=information/information&information_id=6
            - listitem [ref=e243]:
              - link "Privacy Policy" [ref=e244] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=information/information&information_id=3
            - listitem [ref=e245]:
              - link "Terms & Conditions" [ref=e246] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=information/information&information_id=5
        - generic [ref=e247]:
          - heading "Customer Service" [level=5] [ref=e248]
          - list [ref=e249]:
            - listitem [ref=e250]:
              - link "Contact Us" [ref=e251] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=information/contact
            - listitem [ref=e252]:
              - link "Returns" [ref=e253] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=account/return/add
            - listitem [ref=e254]:
              - link "Site Map" [ref=e255] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=information/sitemap
        - generic [ref=e256]:
          - heading "Extras" [level=5] [ref=e257]
          - list [ref=e258]:
            - listitem [ref=e259]:
              - link "Brands" [ref=e260] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=product/manufacturer
            - listitem [ref=e261]:
              - link "Gift Certificates" [ref=e262] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=account/voucher
            - listitem [ref=e263]:
              - link "Affiliate" [ref=e264] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=affiliate/login
            - listitem [ref=e265]:
              - link "Specials" [ref=e266] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=product/special
        - generic [ref=e267]:
          - heading "My Account" [level=5] [ref=e268]
          - list [ref=e269]:
            - listitem [ref=e270]:
              - link "My Account" [ref=e271] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=account/account
            - listitem [ref=e272]:
              - link "Order History" [ref=e273] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=account/order
            - listitem [ref=e274]:
              - link "Wish List" [ref=e275] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=account/wishlist
            - listitem [ref=e276]:
              - link "Newsletter" [ref=e277] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=account/newsletter
      - separator [ref=e278]
      - paragraph [ref=e279]:
        - text: Powered By
        - link "OpenCart" [ref=e280] [cursor=pointer]:
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