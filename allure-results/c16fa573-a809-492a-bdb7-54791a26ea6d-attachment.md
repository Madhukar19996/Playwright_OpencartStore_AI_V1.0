# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: web\end-to-end-shopping-flow.spec.ts >> End-to-End customer shopping journey @master @end-to-end @web
- Location: tests\web\end-to-end-shopping-flow.spec.ts:5:5

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

# Page snapshot

```yaml
- generic [active] [ref=f3e1]:
  - navigation [ref=f3e2]:
    - generic [ref=f3e3]:
      - button "$ Currency " [ref=f3e7] [cursor=pointer]:
        - strong [ref=f3e8]: $
        - text: Currency
        - generic [ref=f3e9]: 
      - list [ref=f3e11]:
        - listitem [ref=f3e12]:
          - link "" [ref=f3e13] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=information/contact
          - text: "123456789"
        - listitem [ref=f3e15]:
          - link " My Account" [ref=f3e16] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=account/account
            - generic [ref=f3e17]: 
            - text: My Account
        - listitem [ref=f3e19]:
          - link " Wish List (0)" [ref=f3e20] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=account/wishlist
            - generic [ref=f3e21]: 
            - text: Wish List (0)
        - listitem [ref=f3e22]:
          - link " Shopping Cart" [ref=f3e23] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=checkout/cart
            - generic [ref=f3e24]: 
            - text: Shopping Cart
        - listitem [ref=f3e25]:
          - link " Checkout" [ref=f3e26] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=checkout/checkout
            - generic [ref=f3e27]: 
            - text: Checkout
  - banner [ref=f3e28]:
    - generic [ref=f3e30]:
      - link [ref=f3e33] [cursor=pointer]:
        - /url: https://awesomeqa.com/ui/index.php?route=common/home
        - img "TheTestingAcademy eCommerce" [ref=f3e34]
      - generic [ref=f3e36]:
        - textbox "Search" [ref=f3e37]
        - button "" [ref=f3e39] [cursor=pointer]
      - button " 0 item(s) - $0.00" [ref=f3e43] [cursor=pointer]:
        - generic [ref=f3e44]: 
        - text: 0 item(s) - $0.00
  - navigation [ref=f3e46]:
    - generic: 
    - list [ref=f3e48]:
      - listitem [ref=f3e49]:
        - link "Desktops" [ref=f3e50] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=20
      - listitem [ref=f3e51]:
        - link "Laptops & Notebooks" [ref=f3e52] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=18
      - listitem [ref=f3e53]:
        - link "Components" [ref=f3e54] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=25
      - listitem [ref=f3e55]:
        - link "Tablets" [ref=f3e56] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=57
      - listitem [ref=f3e57]:
        - link "Software" [ref=f3e58] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=17
      - listitem [ref=f3e59]:
        - link "Phones & PDAs" [ref=f3e60] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=24
      - listitem [ref=f3e61]:
        - link "Cameras" [ref=f3e62] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=33
      - listitem [ref=f3e63]:
        - link "MP3 Players" [ref=f3e64] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=34
  - generic [ref=f3e65]:
    - list [ref=f3e66]:
      - listitem [ref=f3e67]:
        - link "" [ref=f3e68] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=common/home
      - listitem [ref=f3e70]:
        - link "Account" [ref=f3e71] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=account/account
    - generic [ref=f3e72]:
      - generic [ref=f3e73]:
        - heading "My Account" [level=2] [ref=f3e74]
        - list [ref=f3e75]:
          - listitem [ref=f3e76]:
            - link "Edit your account information" [ref=f3e77] [cursor=pointer]:
              - /url: https://awesomeqa.com/ui/index.php?route=account/edit
          - listitem [ref=f3e78]:
            - link "Change your password" [ref=f3e79] [cursor=pointer]:
              - /url: https://awesomeqa.com/ui/index.php?route=account/password
          - listitem [ref=f3e80]:
            - link "Modify your address book entries" [ref=f3e81] [cursor=pointer]:
              - /url: https://awesomeqa.com/ui/index.php?route=account/address
          - listitem [ref=f3e82]:
            - link "Modify your wish list" [ref=f3e83] [cursor=pointer]:
              - /url: https://awesomeqa.com/ui/index.php?route=account/wishlist
        - heading "My Orders" [level=2] [ref=f3e84]
        - list [ref=f3e85]:
          - listitem [ref=f3e86]:
            - link "View your order history" [ref=f3e87] [cursor=pointer]:
              - /url: https://awesomeqa.com/ui/index.php?route=account/order
          - listitem [ref=f3e88]:
            - link "Downloads" [ref=f3e89] [cursor=pointer]:
              - /url: https://awesomeqa.com/ui/index.php?route=account/download
          - listitem [ref=f3e90]:
            - link "Your Reward Points" [ref=f3e91] [cursor=pointer]:
              - /url: https://awesomeqa.com/ui/index.php?route=account/reward
          - listitem [ref=f3e92]:
            - link "View your return requests" [ref=f3e93] [cursor=pointer]:
              - /url: https://awesomeqa.com/ui/index.php?route=account/return
          - listitem [ref=f3e94]:
            - link "Your Transactions" [ref=f3e95] [cursor=pointer]:
              - /url: https://awesomeqa.com/ui/index.php?route=account/transaction
          - listitem [ref=f3e96]:
            - link "Recurring payments" [ref=f3e97] [cursor=pointer]:
              - /url: https://awesomeqa.com/ui/index.php?route=account/recurring
        - heading "My Affiliate Account" [level=2] [ref=f3e98]
        - list [ref=f3e99]:
          - listitem [ref=f3e100]:
            - link "Register for an affiliate account" [ref=f3e101] [cursor=pointer]:
              - /url: https://awesomeqa.com/ui/index.php?route=account/affiliate/add
        - heading "Newsletter" [level=2] [ref=f3e102]
        - list [ref=f3e103]:
          - listitem [ref=f3e104]:
            - link "Subscribe / unsubscribe to newsletter" [ref=f3e105] [cursor=pointer]:
              - /url: https://awesomeqa.com/ui/index.php?route=account/newsletter
      - complementary [ref=f3e106]:
        - generic [ref=f3e107]:
          - link "My Account" [ref=f3e108] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=account/account
          - link "Edit Account" [ref=f3e109] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=account/edit
          - link "Password" [ref=f3e110] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=account/password
          - link "Address Book" [ref=f3e111] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=account/address
          - link "Wish List" [ref=f3e112] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=account/wishlist
          - link "Order History" [ref=f3e113] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=account/order
          - link "Downloads" [ref=f3e114] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=account/download
          - link "Recurring payments" [ref=f3e115] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=account/recurring
          - link "Reward Points" [ref=f3e116] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=account/reward
          - link "Returns" [ref=f3e117] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=account/return
          - link "Transactions" [ref=f3e118] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=account/transaction
          - link "Newsletter" [ref=f3e119] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=account/newsletter
          - link "Logout" [ref=f3e120] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=account/logout
  - contentinfo [ref=f3e121]:
    - generic [ref=f3e122]:
      - generic [ref=f3e123]:
        - generic [ref=f3e124]:
          - heading "Information" [level=5] [ref=f3e125]
          - list [ref=f3e126]:
            - listitem [ref=f3e127]:
              - link "About Us" [ref=f3e128] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=information/information&information_id=4
            - listitem [ref=f3e129]:
              - link "Delivery Information" [ref=f3e130] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=information/information&information_id=6
            - listitem [ref=f3e131]:
              - link "Privacy Policy" [ref=f3e132] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=information/information&information_id=3
            - listitem [ref=f3e133]:
              - link "Terms & Conditions" [ref=f3e134] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=information/information&information_id=5
        - generic [ref=f3e135]:
          - heading "Customer Service" [level=5] [ref=f3e136]
          - list [ref=f3e137]:
            - listitem [ref=f3e138]:
              - link "Contact Us" [ref=f3e139] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=information/contact
            - listitem [ref=f3e140]:
              - link "Returns" [ref=f3e141] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=account/return/add
            - listitem [ref=f3e142]:
              - link "Site Map" [ref=f3e143] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=information/sitemap
        - generic [ref=f3e144]:
          - heading "Extras" [level=5] [ref=f3e145]
          - list [ref=f3e146]:
            - listitem [ref=f3e147]:
              - link "Brands" [ref=f3e148] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=product/manufacturer
            - listitem [ref=f3e149]:
              - link "Gift Certificates" [ref=f3e150] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=account/voucher
            - listitem [ref=f3e151]:
              - link "Affiliate" [ref=f3e152] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=affiliate/login
            - listitem [ref=f3e153]:
              - link "Specials" [ref=f3e154] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=product/special
        - generic [ref=f3e155]:
          - heading "My Account" [level=5] [ref=f3e156]
          - list [ref=f3e157]:
            - listitem [ref=f3e158]:
              - link "My Account" [ref=f3e159] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=account/account
            - listitem [ref=f3e160]:
              - link "Order History" [ref=f3e161] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=account/order
            - listitem [ref=f3e162]:
              - link "Wish List" [ref=f3e163] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=account/wishlist
            - listitem [ref=f3e164]:
              - link "Newsletter" [ref=f3e165] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=account/newsletter
      - separator [ref=f3e166]
      - paragraph [ref=f3e167]:
        - text: Powered By
        - link "OpenCart" [ref=f3e168] [cursor=pointer]:
          - /url: http://www.opencart.com
        - text: TheTestingAcademy eCommerce © 2026
```

# Test source

```ts
  1  | import { test, expect } from '../../fixtures/pageFixtures';
  2  | import { RandomDataUtil } from '../../utils/dataGenerator';
  3  | import { Helper } from '../../utils/helper';
  4  | 
  5  | test('End-to-End customer shopping journey @master @end-to-end @web', async ({
  6  |     page,
  7  |     homePage,
  8  |     registerPage,
  9  |     accountSuccessPage,
  10 |     myAccountPage,
  11 |     loginPage,
  12 |     searchResultsPage,
  13 |     productDetailsPage,
  14 |     shoppingCartPage
  15 | }) => {
  16 |     const firstName = RandomDataUtil.getFirstName();
  17 |     const lastName = RandomDataUtil.getLastName();
  18 |     const email = `customer-${Date.now()}-${RandomDataUtil.getNumber()}@example.com`;
  19 |     const password = 'Test@123';
  20 |     const telephone = RandomDataUtil.getPhoneNumber();
  21 |     const { productName, productQuantity } = Helper.getProductDetails();
  22 | 
  23 |     await test.step('1) Register a new customer with unique data', async () => {
  24 |         await homePage.clickMyAccount();
  25 |         await homePage.clickRegister();
  26 |         await registerPage.completeRegistration({
  27 |             firstName,
  28 |             lastName,
  29 |             email,
  30 |             telephone,
  31 |             password
  32 |         });
  33 | 
  34 |         expect(await accountSuccessPage.isSuccessMessageDisplayed()).toBeTruthy();
  35 |         await expect(page).toHaveURL(/route=account\/success/);
  36 |     });
  37 | 
  38 |     await test.step('2) Log out and authenticate with the new credentials', async () => {
  39 |         await accountSuccessPage.clickContinue();
> 40 |         expect(await myAccountPage.isMyAccountPageDisplayed()).toBeTruthy();
     |                                                                ^ Error: expect(received).toBeTruthy()
  41 | 
  42 |         await myAccountPage.clickLogout();
  43 |         await expect(page).toHaveURL(/route=account\/logout/);
  44 |         await homePage.openHomePage();
  45 |         await homePage.clickMyAccount();
  46 |         await homePage.clickLogin();
  47 |         await loginPage.login(email, password);
  48 | 
  49 |         await expect(page).toHaveURL(/route=account\/account/);
  50 |         expect(await myAccountPage.isMyAccountPageDisplayed()).toBeTruthy();
  51 |     });
  52 | 
  53 |     await test.step('3) Search for the known product and open its details', async () => {
  54 |         await homePage.searchForProduct(productName);
  55 |         expect(await searchResultsPage.isResultsPageDisplayed()).toBeTruthy();
  56 | 
  57 |         await searchResultsPage.clickProduct(productName);
  58 |         expect(await productDetailsPage.isProductDetailsDisplayed()).toBeTruthy();
  59 |         expect((await productDetailsPage.getProductName()).trim()).toBe(productName);
  60 |     });
  61 | 
  62 |     await test.step('4) Add the product and validate cart contents and total', async () => {
  63 |         const productPrice = await productDetailsPage.getProductPrice();
  64 |         const expectedTotal = Helper.convertPriceToNumber(productPrice) * Number(productQuantity);
  65 | 
  66 |         await productDetailsPage.addToCart(productQuantity);
  67 |         expect(await productDetailsPage.getSuccessMessage()).toContain('Success');
  68 |         await homePage.clickCart();
  69 | 
  70 |         expect(await shoppingCartPage.isCartPageDisplayed()).toBeTruthy();
  71 |         expect((await shoppingCartPage.getProductName()).trim()).toContain(productName);
  72 |         expect(await shoppingCartPage.getQuantity()).toBe(productQuantity);
  73 |         expect(Helper.convertPriceToNumber(await shoppingCartPage.getProductPrice()))
  74 |             .toBe(Helper.convertPriceToNumber(productPrice));
  75 |         expect(Helper.convertPriceToNumber(await shoppingCartPage.getCartTotal())).toBe(expectedTotal);
  76 |     });
  77 | 
  78 |     console.log('✅ End-to-end shopping flow completed successfully.');
  79 | });
  80 | 
```