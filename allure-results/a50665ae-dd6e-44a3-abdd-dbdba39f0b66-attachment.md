# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: web\end-to-end-shopping-flow.spec.ts >> End-to-End customer shopping journey @master @end-to-end @web
- Location: tests\web\end-to-end-shopping-flow.spec.ts:4:5

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('h2')
Expected substring: "My Account"
Error: strict mode violation: locator('h2') resolved to 4 elements:
    1) <h2>My Account</h2> aka locator('#content').getByRole('heading', { name: 'My Account' })
    2) <h2>My Orders</h2> aka getByRole('heading', { name: 'My Orders' })
    3) <h2>My Affiliate Account</h2> aka getByRole('heading', { name: 'My Affiliate Account' })
    4) <h2>Newsletter</h2> aka getByRole('heading', { name: 'Newsletter' })

Call log:
  - Expect "toContainText" locator('h2') with timeout 5000ms
  - waiting for locator('h2')

```

# Page snapshot

```yaml
- generic [active] [ref=f4e1]:
  - navigation [ref=f4e2]:
    - generic [ref=f4e3]:
      - button "$ Currency " [ref=f4e7] [cursor=pointer]:
        - strong [ref=f4e8]: $
        - text: Currency
        - generic [ref=f4e9]: 
      - list [ref=f4e11]:
        - listitem [ref=f4e12]:
          - link "" [ref=f4e13] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=information/contact
          - text: "123456789"
        - listitem [ref=f4e15]:
          - link " My Account" [ref=f4e16] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=account/account
            - generic [ref=f4e17]: 
            - text: My Account
        - listitem [ref=f4e19]:
          - link " Wish List (0)" [ref=f4e20] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=account/wishlist
            - generic [ref=f4e21]: 
            - text: Wish List (0)
        - listitem [ref=f4e22]:
          - link " Shopping Cart" [ref=f4e23] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=checkout/cart
            - generic [ref=f4e24]: 
            - text: Shopping Cart
        - listitem [ref=f4e25]:
          - link " Checkout" [ref=f4e26] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=checkout/checkout
            - generic [ref=f4e27]: 
            - text: Checkout
  - banner [ref=f4e28]:
    - generic [ref=f4e30]:
      - link [ref=f4e33] [cursor=pointer]:
        - /url: https://awesomeqa.com/ui/index.php?route=common/home
        - img "TheTestingAcademy eCommerce" [ref=f4e34]
      - generic [ref=f4e36]:
        - textbox "Search" [ref=f4e37]
        - button "" [ref=f4e39] [cursor=pointer]
      - button " 0 item(s) - $0.00" [ref=f4e43] [cursor=pointer]:
        - generic [ref=f4e44]: 
        - text: 0 item(s) - $0.00
  - navigation [ref=f4e46]:
    - generic: 
    - list [ref=f4e48]:
      - listitem [ref=f4e49]:
        - link "Desktops" [ref=f4e50] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=20
      - listitem [ref=f4e51]:
        - link "Laptops & Notebooks" [ref=f4e52] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=18
      - listitem [ref=f4e53]:
        - link "Components" [ref=f4e54] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=25
      - listitem [ref=f4e55]:
        - link "Tablets" [ref=f4e56] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=57
      - listitem [ref=f4e57]:
        - link "Software" [ref=f4e58] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=17
      - listitem [ref=f4e59]:
        - link "Phones & PDAs" [ref=f4e60] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=24
      - listitem [ref=f4e61]:
        - link "Cameras" [ref=f4e62] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=33
      - listitem [ref=f4e63]:
        - link "MP3 Players" [ref=f4e64] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=34
  - generic [ref=f4e65]:
    - list [ref=f4e66]:
      - listitem [ref=f4e67]:
        - link "" [ref=f4e68] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=common/home
      - listitem [ref=f4e70]:
        - link "Account" [ref=f4e71] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=account/account
    - generic [ref=f4e72]:
      - generic [ref=f4e73]:
        - heading "My Account" [level=2] [ref=f4e74]
        - list [ref=f4e75]:
          - listitem [ref=f4e76]:
            - link "Edit your account information" [ref=f4e77] [cursor=pointer]:
              - /url: https://awesomeqa.com/ui/index.php?route=account/edit
          - listitem [ref=f4e78]:
            - link "Change your password" [ref=f4e79] [cursor=pointer]:
              - /url: https://awesomeqa.com/ui/index.php?route=account/password
          - listitem [ref=f4e80]:
            - link "Modify your address book entries" [ref=f4e81] [cursor=pointer]:
              - /url: https://awesomeqa.com/ui/index.php?route=account/address
          - listitem [ref=f4e82]:
            - link "Modify your wish list" [ref=f4e83] [cursor=pointer]:
              - /url: https://awesomeqa.com/ui/index.php?route=account/wishlist
        - heading "My Orders" [level=2] [ref=f4e84]
        - list [ref=f4e85]:
          - listitem [ref=f4e86]:
            - link "View your order history" [ref=f4e87] [cursor=pointer]:
              - /url: https://awesomeqa.com/ui/index.php?route=account/order
          - listitem [ref=f4e88]:
            - link "Downloads" [ref=f4e89] [cursor=pointer]:
              - /url: https://awesomeqa.com/ui/index.php?route=account/download
          - listitem [ref=f4e90]:
            - link "Your Reward Points" [ref=f4e91] [cursor=pointer]:
              - /url: https://awesomeqa.com/ui/index.php?route=account/reward
          - listitem [ref=f4e92]:
            - link "View your return requests" [ref=f4e93] [cursor=pointer]:
              - /url: https://awesomeqa.com/ui/index.php?route=account/return
          - listitem [ref=f4e94]:
            - link "Your Transactions" [ref=f4e95] [cursor=pointer]:
              - /url: https://awesomeqa.com/ui/index.php?route=account/transaction
          - listitem [ref=f4e96]:
            - link "Recurring payments" [ref=f4e97] [cursor=pointer]:
              - /url: https://awesomeqa.com/ui/index.php?route=account/recurring
        - heading "My Affiliate Account" [level=2] [ref=f4e98]
        - list [ref=f4e99]:
          - listitem [ref=f4e100]:
            - link "Register for an affiliate account" [ref=f4e101] [cursor=pointer]:
              - /url: https://awesomeqa.com/ui/index.php?route=account/affiliate/add
        - heading "Newsletter" [level=2] [ref=f4e102]
        - list [ref=f4e103]:
          - listitem [ref=f4e104]:
            - link "Subscribe / unsubscribe to newsletter" [ref=f4e105] [cursor=pointer]:
              - /url: https://awesomeqa.com/ui/index.php?route=account/newsletter
      - complementary [ref=f4e106]:
        - generic [ref=f4e107]:
          - link "My Account" [ref=f4e108] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=account/account
          - link "Edit Account" [ref=f4e109] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=account/edit
          - link "Password" [ref=f4e110] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=account/password
          - link "Address Book" [ref=f4e111] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=account/address
          - link "Wish List" [ref=f4e112] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=account/wishlist
          - link "Order History" [ref=f4e113] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=account/order
          - link "Downloads" [ref=f4e114] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=account/download
          - link "Recurring payments" [ref=f4e115] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=account/recurring
          - link "Reward Points" [ref=f4e116] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=account/reward
          - link "Returns" [ref=f4e117] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=account/return
          - link "Transactions" [ref=f4e118] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=account/transaction
          - link "Newsletter" [ref=f4e119] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=account/newsletter
          - link "Logout" [ref=f4e120] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=account/logout
  - contentinfo [ref=f4e121]:
    - generic [ref=f4e122]:
      - generic [ref=f4e123]:
        - generic [ref=f4e124]:
          - heading "Information" [level=5] [ref=f4e125]
          - list [ref=f4e126]:
            - listitem [ref=f4e127]:
              - link "About Us" [ref=f4e128] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=information/information&information_id=4
            - listitem [ref=f4e129]:
              - link "Delivery Information" [ref=f4e130] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=information/information&information_id=6
            - listitem [ref=f4e131]:
              - link "Privacy Policy" [ref=f4e132] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=information/information&information_id=3
            - listitem [ref=f4e133]:
              - link "Terms & Conditions" [ref=f4e134] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=information/information&information_id=5
        - generic [ref=f4e135]:
          - heading "Customer Service" [level=5] [ref=f4e136]
          - list [ref=f4e137]:
            - listitem [ref=f4e138]:
              - link "Contact Us" [ref=f4e139] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=information/contact
            - listitem [ref=f4e140]:
              - link "Returns" [ref=f4e141] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=account/return/add
            - listitem [ref=f4e142]:
              - link "Site Map" [ref=f4e143] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=information/sitemap
        - generic [ref=f4e144]:
          - heading "Extras" [level=5] [ref=f4e145]
          - list [ref=f4e146]:
            - listitem [ref=f4e147]:
              - link "Brands" [ref=f4e148] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=product/manufacturer
            - listitem [ref=f4e149]:
              - link "Gift Certificates" [ref=f4e150] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=account/voucher
            - listitem [ref=f4e151]:
              - link "Affiliate" [ref=f4e152] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=affiliate/login
            - listitem [ref=f4e153]:
              - link "Specials" [ref=f4e154] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=product/special
        - generic [ref=f4e155]:
          - heading "My Account" [level=5] [ref=f4e156]
          - list [ref=f4e157]:
            - listitem [ref=f4e158]:
              - link "My Account" [ref=f4e159] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=account/account
            - listitem [ref=f4e160]:
              - link "Order History" [ref=f4e161] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=account/order
            - listitem [ref=f4e162]:
              - link "Wish List" [ref=f4e163] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=account/wishlist
            - listitem [ref=f4e164]:
              - link "Newsletter" [ref=f4e165] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=account/newsletter
      - separator [ref=f4e166]
      - paragraph [ref=f4e167]:
        - text: Powered By
        - link "OpenCart" [ref=f4e168] [cursor=pointer]:
          - /url: http://www.opencart.com
        - text: TheTestingAcademy eCommerce © 2026
```

# Test source

```ts
  1  | import { test, expect } from '../../fixtures/pageFixtures';
  2  | import { RandomDataUtil } from '../../utils/dataGenerator';
  3  | 
  4  | test('End-to-End customer shopping journey @master @end-to-end @web', async ({ page }) => {
  5  |     const firstName = RandomDataUtil.getFirstName();
  6  |     const lastName = RandomDataUtil.getLastName();
  7  |     const email = `${firstName.toLowerCase()}.${Date.now()}@example.com`;
  8  |     const password = 'Test@123';
  9  |     const productName = 'MacBook';
  10 |     const quantity = '1';
  11 | 
  12 |     await test.step('1) Register a new customer account', async () => {
  13 |         await page.goto('https://awesomeqa.com/ui/index.php?route=account/register');
  14 | 
  15 |         await page.locator('#input-firstname').fill(firstName);
  16 |         await page.locator('#input-lastname').fill(lastName);
  17 |         await page.locator('#input-email').fill(email);
  18 |         await page.locator('#input-telephone').fill('1234567890');
  19 |         await page.locator('#input-password').fill(password);
  20 |         await page.locator('#input-confirm').fill(password);
  21 |         await page.locator('input[name="agree"]').check();
  22 |         await page.locator('input[value="Continue"]').click();
  23 | 
  24 |         await expect(page.locator('h1')).toContainText('Your Account Has Been Created!');
  25 |         await expect(page).toHaveURL(/route=account\/success/);
  26 |     });
  27 | 
  28 |     await test.step('2) Log out and log in again with the newly created customer', async () => {
  29 |         await page.goto('https://awesomeqa.com/ui/index.php?route=account/logout');
  30 |         await page.waitForLoadState('networkidle');
  31 | 
  32 |         await page.goto('https://awesomeqa.com/ui/index.php?route=account/login');
  33 |         await page.locator('#input-email').fill(email);
  34 |         await page.locator('#input-password').fill(password);
  35 |         await page.locator('input[value="Login"]').click();
  36 | 
  37 |         await expect(page).toHaveURL(/route=account\/account/);
> 38 |         await expect(page.locator('h2')).toContainText('My Account');
     |                                          ^ Error: expect(locator).toContainText(expected) failed
  39 |     });
  40 | 
  41 |     await test.step('3) Search for a known product and open the product details page', async () => {
  42 |         await page.locator('#search input[name="search"]').fill(productName);
  43 |         await page.locator('#search button').click();
  44 | 
  45 |         await expect(page).toHaveURL(/route=product\/search/);
  46 |         await expect(page.locator('.product-thumb')).toContainText(productName);
  47 | 
  48 |         await page.locator('.product-thumb a:has-text("MacBook")').first().click();
  49 |         await expect(page.locator('h1')).toContainText(productName);
  50 |     });
  51 | 
  52 |     await test.step('4) Add the product to the cart and validate product details in cart', async () => {
  53 |         await page.locator('#input-quantity').fill(quantity);
  54 |         await page.locator('#button-cart').click();
  55 | 
  56 |         await expect(page.locator('.alert-success')).toContainText('Success');
  57 |         await page.goto('https://awesomeqa.com/ui/index.php?route=checkout/cart');
  58 | 
  59 |         const cartItem = page.locator('tbody tr').filter({ hasText: productName }).first();
  60 | 
  61 |         await expect(cartItem).toContainText(productName);
  62 |         await expect(cartItem.locator('input[type="text"]')).toHaveValue(quantity);
  63 |         await expect(cartItem).toContainText('$602.00');
  64 |         await expect(page.locator('tfoot')).toContainText('$602.00');
  65 |     });
  66 | 
  67 |     console.log('✅ End-to-end shopping flow completed successfully.');
  68 | });
  69 | 
```