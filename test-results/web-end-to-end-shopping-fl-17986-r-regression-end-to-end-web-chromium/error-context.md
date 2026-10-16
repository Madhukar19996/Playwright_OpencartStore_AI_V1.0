# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: web\end-to-end-shopping-flow.spec.ts >> End-to-end shopping flow test @master @regression @end-to-end @web
- Location: tests\web\end-to-end-shopping-flow.spec.ts:25:5

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

# Page snapshot

```yaml
- generic [active] [ref=f9e1]:
  - navigation [ref=f9e2]:
    - generic [ref=f9e3]:
      - button "$ Currency " [ref=f9e7] [cursor=pointer]:
        - strong [ref=f9e8]: $
        - text: Currency
        - generic [ref=f9e9]: 
      - list [ref=f9e11]:
        - listitem [ref=f9e12]:
          - link "" [ref=f9e13] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=information/contact
          - text: "123456789"
        - listitem [ref=f9e15]:
          - link " My Account" [ref=f9e16] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=account/account
            - generic [ref=f9e17]: 
            - text: My Account
        - listitem [ref=f9e19]:
          - link " Wish List (0)" [ref=f9e20] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=account/wishlist
            - generic [ref=f9e21]: 
            - text: Wish List (0)
        - listitem [ref=f9e22]:
          - link " Shopping Cart" [ref=f9e23] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=checkout/cart
            - generic [ref=f9e24]: 
            - text: Shopping Cart
        - listitem [ref=f9e25]:
          - link " Checkout" [ref=f9e26] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=checkout/checkout
            - generic [ref=f9e27]: 
            - text: Checkout
  - banner [ref=f9e28]:
    - generic [ref=f9e30]:
      - link [ref=f9e33] [cursor=pointer]:
        - /url: https://awesomeqa.com/ui/index.php?route=common/home
        - img "TheTestingAcademy eCommerce" [ref=f9e34]
      - generic [ref=f9e36]:
        - textbox "Search" [ref=f9e37]: MacBook
        - button "" [ref=f9e39] [cursor=pointer]
      - generic [ref=f9e42]:
        - button " 1 item(s) - $602.00" [ref=f9e43] [cursor=pointer]:
          - generic [ref=f9e44]:
            - generic [ref=f9e45]: 
            - text: 1 item(s) - $602.00
        - text:   
  - navigation [ref=f9e47]:
    - generic: 
    - list [ref=f9e49]:
      - listitem [ref=f9e50]:
        - link "Desktops" [ref=f9e51] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=20
      - listitem [ref=f9e52]:
        - link "Laptops & Notebooks" [ref=f9e53] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=18
      - listitem [ref=f9e54]:
        - link "Components" [ref=f9e55] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=25
      - listitem [ref=f9e56]:
        - link "Tablets" [ref=f9e57] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=57
      - listitem [ref=f9e58]:
        - link "Software" [ref=f9e59] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=17
      - listitem [ref=f9e60]:
        - link "Phones & PDAs" [ref=f9e61] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=24
      - listitem [ref=f9e62]:
        - link "Cameras" [ref=f9e63] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=33
      - listitem [ref=f9e64]:
        - link "MP3 Players" [ref=f9e65] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=34
  - generic [ref=f9e66]:
    - list [ref=f9e67]:
      - listitem [ref=f9e68]:
        - link "" [ref=f9e69] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=common/home
      - listitem [ref=f9e71]:
        - link "Search" [ref=f9e72] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/search&search=MacBook
      - listitem [ref=f9e73]:
        - link "MacBook" [ref=f9e74] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/product&search=MacBook&product_id=43
    - generic [ref=f9e75]:
      - text: "Success: You have added"
      - link "MacBook" [ref=f9e76] [cursor=pointer]:
        - /url: https://awesomeqa.com/ui/index.php?route=product/product&product_id=43
      - text: to your
      - link "shopping cart" [ref=f9e77] [cursor=pointer]:
        - /url: https://awesomeqa.com/ui/index.php?route=checkout/cart
      - text: "!"
      - button "×" [ref=f9e78] [cursor=pointer]
    - generic [ref=f9e81]:
      - generic [ref=f9e82]:
        - list [ref=f9e83]:
          - listitem [ref=f9e84]:
            - link [ref=f9e85] [cursor=pointer]:
              - /url: https://awesomeqa.com/ui/image/cache/catalog/demo/macbook_1-500x500.jpg
              - img "MacBook" [ref=f9e86]
          - listitem [ref=f9e87]:
            - link [ref=f9e88] [cursor=pointer]:
              - /url: https://awesomeqa.com/ui/image/cache/catalog/demo/macbook_3-500x500.jpg
              - img "MacBook" [ref=f9e89]
          - listitem [ref=f9e90]:
            - link [ref=f9e91] [cursor=pointer]:
              - /url: https://awesomeqa.com/ui/image/cache/catalog/demo/macbook_2-500x500.jpg
              - img "MacBook" [ref=f9e92]
          - listitem [ref=f9e93]:
            - link [ref=f9e94] [cursor=pointer]:
              - /url: https://awesomeqa.com/ui/image/cache/catalog/demo/macbook_4-500x500.jpg
              - img "MacBook" [ref=f9e95]
          - listitem [ref=f9e96]:
            - link [ref=f9e97] [cursor=pointer]:
              - /url: https://awesomeqa.com/ui/image/cache/catalog/demo/macbook_5-500x500.jpg
              - img "MacBook" [ref=f9e98]
        - list [ref=f9e99]:
          - listitem [ref=f9e100]:
            - link "Description" [ref=f9e101]:
              - /url: "#tab-description"
          - listitem [ref=f9e102]:
            - link "Specification" [ref=f9e103] [cursor=pointer]:
              - /url: "#tab-specification"
          - listitem [ref=f9e104]:
            - link "Reviews (0)" [ref=f9e105] [cursor=pointer]:
              - /url: "#tab-review"
        - generic [ref=f9e106]:
          - generic [ref=f9e108]:
            - paragraph [ref=f9e109]: Intel Core 2 Duo processor
            - paragraph [ref=f9e110]: Powered by an Intel Core 2 Duo processor at speeds up to 2.16GHz, the new MacBook is the fastest ever.
            - paragraph [ref=f9e111]: 1GB memory, larger hard drives
            - paragraph [ref=f9e112]: The new MacBook now comes with 1GB of memory standard and larger hard drives for the entire line perfect for running more of your favorite applications and storing growing media collections.
            - paragraph [ref=f9e113]: Sleek, 1.08-inch-thin design
            - paragraph [ref=f9e114]: MacBook makes it easy to hit the road thanks to its tough polycarbonate case, built-in wireless technologies, and innovative MagSafe Power Adapter that releases automatically if someone accidentally trips on the cord.
            - paragraph [ref=f9e115]: Built-in iSight camera
            - paragraph [ref=f9e116]: Right out of the box, you can have a video chat with friends or family,2 record a video at your desk, or take fun pictures with Photo Booth
          - text: "* * *"
      - generic [ref=f9e117]:
        - generic [ref=f9e118]:
          - button "" [ref=f9e119] [cursor=pointer]
          - button "" [ref=f9e121] [cursor=pointer]
        - heading "MacBook" [level=1] [ref=f9e123]
        - list [ref=f9e124]:
          - listitem [ref=f9e125]:
            - text: "Brand:"
            - link "Apple" [ref=f9e126] [cursor=pointer]:
              - /url: https://awesomeqa.com/ui/index.php?route=product/manufacturer/info&manufacturer_id=8
          - listitem [ref=f9e127]: "Product Code: Product 16"
          - listitem [ref=f9e128]: "Reward Points: 600"
          - listitem [ref=f9e129]: "Availability: Out Of Stock"
        - list [ref=f9e130]:
          - listitem [ref=f9e131]:
            - heading "$602.00" [level=2] [ref=f9e132]
          - listitem [ref=f9e133]: "Ex Tax: $500.00"
        - generic [ref=f9e135]:
          - generic [ref=f9e136]: Qty
          - textbox "Qty" [ref=f9e137]: "1"
          - button "Add to Cart" [ref=f9e138] [cursor=pointer]
        - paragraph [ref=f9e140]:
          - generic [ref=f9e141]: 
          - generic [ref=f9e143]: 
          - generic [ref=f9e145]: 
          - generic [ref=f9e147]: 
          - generic [ref=f9e149]: 
          - link "0 reviews" [ref=f9e151] [cursor=pointer]:
            - /url: ""
          - text: /
          - link "Write a review" [ref=f9e152] [cursor=pointer]:
            - /url: ""
  - contentinfo [ref=f9e153]:
    - generic [ref=f9e154]:
      - generic [ref=f9e155]:
        - generic [ref=f9e156]:
          - heading "Information" [level=5] [ref=f9e157]
          - list [ref=f9e158]:
            - listitem [ref=f9e159]:
              - link "About Us" [ref=f9e160] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=information/information&information_id=4
            - listitem [ref=f9e161]:
              - link "Delivery Information" [ref=f9e162] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=information/information&information_id=6
            - listitem [ref=f9e163]:
              - link "Privacy Policy" [ref=f9e164] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=information/information&information_id=3
            - listitem [ref=f9e165]:
              - link "Terms & Conditions" [ref=f9e166] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=information/information&information_id=5
        - generic [ref=f9e167]:
          - heading "Customer Service" [level=5] [ref=f9e168]
          - list [ref=f9e169]:
            - listitem [ref=f9e170]:
              - link "Contact Us" [ref=f9e171] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=information/contact
            - listitem [ref=f9e172]:
              - link "Returns" [ref=f9e173] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=account/return/add
            - listitem [ref=f9e174]:
              - link "Site Map" [ref=f9e175] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=information/sitemap
        - generic [ref=f9e176]:
          - heading "Extras" [level=5] [ref=f9e177]
          - list [ref=f9e178]:
            - listitem [ref=f9e179]:
              - link "Brands" [ref=f9e180] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=product/manufacturer
            - listitem [ref=f9e181]:
              - link "Gift Certificates" [ref=f9e182] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=account/voucher
            - listitem [ref=f9e183]:
              - link "Affiliate" [ref=f9e184] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=affiliate/login
            - listitem [ref=f9e185]:
              - link "Specials" [ref=f9e186] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=product/special
        - generic [ref=f9e187]:
          - heading "My Account" [level=5] [ref=f9e188]
          - list [ref=f9e189]:
            - listitem [ref=f9e190]:
              - link "My Account" [ref=f9e191] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=account/account
            - listitem [ref=f9e192]:
              - link "Order History" [ref=f9e193] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=account/order
            - listitem [ref=f9e194]:
              - link "Wish List" [ref=f9e195] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=account/wishlist
            - listitem [ref=f9e196]:
              - link "Newsletter" [ref=f9e197] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=account/newsletter
      - separator [ref=f9e198]
      - paragraph [ref=f9e199]:
        - text: Powered By
        - link "OpenCart" [ref=f9e200] [cursor=pointer]:
          - /url: http://www.opencart.com
        - text: TheTestingAcademy eCommerce © 2026
```

# Test source

```ts
  1   | /**
  2   |  * Test Case: End-to-End Shopping Flow
  3   |  *
  4   |  * Tags: @master @regression @end-to-end @web
  5   |  *
  6   |  * Steps:
  7   |  * 1) Open the application
  8   |  * 2) Register a new customer with unique data
  9   |  * 3) Verify successful registration
  10  |  * 4) Log out
  11  |  * 5) Log in again with the new credentials
  12  |  * 6) Verify successful authentication
  13  |  * 7) Search for a known product
  14  |  * 8) Open the product details page
  15  |  * 9) Add the product to the cart
  16  |  * 10) Open the shopping cart
  17  |  * 11) Verify product, quantity, price and cart total
  18  |  */
  19  | 
  20  | // using custom fixtures
  21  | import { test, expect } from '../../fixtures/pageFixtures';
  22  | import { RandomDataUtil } from '../../utils/dataGenerator';
  23  | import { Helper } from '../../utils/helper';
  24  | 
  25  | test('End-to-end shopping flow test @master @regression @end-to-end @web', async ({
  26  |     homePage,
  27  |     registerPage,
  28  |     accountSuccessPage,
  29  |     myAccountPage,
  30  |     logoutPage,
  31  |     loginPage,
  32  |     searchResultsPage,
  33  |     productPage,
  34  |     shoppingCartPage,
  35  | }) => {
  36  |     const customer = RandomDataUtil.generateCustomerData();
  37  |     const { name: productName, quantity: expectedQuantity } = Helper.getProductDetails();
  38  |     let productPagePrice = '';
  39  | 
  40  |     await test.step('1) Open the application', async () => {
  41  |         expect(await homePage.isHomePageExists()).toBeTruthy();
  42  |     });
  43  | 
  44  |     await test.step('2) Register a new customer using unique data', async () => {
  45  |         await homePage.clickMyAccount();
  46  |         await homePage.clickRegister();
  47  |         expect(await registerPage.isRegisterPageExists()).toBeTruthy();
  48  |         await registerPage.completeRegistration(customer);
  49  |     });
  50  | 
  51  |     await test.step('3) Verify successful registration', async () => {
  52  |         expect(await accountSuccessPage.isAccountCreated()).toBeTruthy();
  53  |         await accountSuccessPage.clickContinue();
  54  |         expect(await myAccountPage.isMyAccountPageExists()).toBeTruthy();
  55  |     });
  56  | 
  57  |     await test.step('4) Log out', async () => {
  58  |         await myAccountPage.clickLogout();
  59  |         expect(await logoutPage.isLogoutPageExists()).toBeTruthy();
  60  |         await logoutPage.clickContinue();
  61  |     });
  62  | 
  63  |     await test.step('5) Log in again using the new credentials', async () => {
  64  |         await homePage.clickMyAccount();
  65  |         await homePage.clickLogin();
  66  |         await loginPage.login(customer.email, customer.password);
  67  |     });
  68  | 
  69  |     await test.step('6) Verify successful authentication', async () => {
  70  |         expect(await myAccountPage.isMyAccountPageExists()).toBeTruthy();
  71  |     });
  72  | 
  73  |     await test.step('7) Search for a known product', async () => {
  74  |         await homePage.searchProduct(productName);
  75  |         expect(await searchResultsPage.isProductDisplayed(productName)).toBeTruthy();
  76  |     });
  77  | 
  78  |     await test.step('8) Open the product details page', async () => {
  79  |         await searchResultsPage.clickProduct(productName);
  80  |         expect(await productPage.getProductName()).toBe(productName);
  81  |         productPagePrice = await productPage.getProductPrice();
  82  |     });
  83  | 
  84  |     await test.step('9) Add the product to the cart', async () => {
  85  |         await productPage.clickAddToCart();
> 86  |         expect(await productPage.isAddedToCartMessageDisplayed()).toBeTruthy();
      |                                                                   ^ Error: expect(received).toBeTruthy()
  87  |     });
  88  | 
  89  |     await test.step('10) Open the shopping cart', async () => {
  90  |         await productPage.clickShoppingCart();
  91  |         expect(await shoppingCartPage.isShoppingCartPageExists()).toBeTruthy();
  92  |     });
  93  | 
  94  |     await test.step('11) Verify product, quantity, price and cart total', async () => {
  95  |         expect(await shoppingCartPage.isProductInCart(productName)).toBeTruthy();
  96  |         expect(await shoppingCartPage.getQuantity(productName)).toBe(expectedQuantity);
  97  | 
  98  |         const unitPrice = await shoppingCartPage.getUnitPrice(productName);
  99  |         expect(unitPrice).toBe(productPagePrice);
  100 | 
  101 |         const expectedTotal = Helper.parsePrice(unitPrice) * expectedQuantity;
  102 |         expect(Helper.parsePrice(await shoppingCartPage.getLineTotal(productName))).toBe(expectedTotal);
  103 |         expect(Helper.parsePrice(await shoppingCartPage.getCartTotal())).toBe(expectedTotal);
  104 |     });
  105 | 
  106 |     console.log('✅ ✔️ End-to-end shopping flow completed successfully!');
  107 | });
  108 | 
```