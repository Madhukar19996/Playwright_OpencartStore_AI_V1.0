# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: web\end-to-end-shopping-flow.spec.ts >> End-to-End customer shopping journey @master @end-to-end @web
- Location: tests\web\end-to-end-shopping-flow.spec.ts:4:5

# Error details

```
Error: expect(locator).toHaveValue(expected) failed

Locator: locator('tbody tr').filter({ hasText: 'MacBook' }).first().locator('input[type="text"]')
Expected: "1"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toHaveValue" locator('tbody tr').filter({ hasText: 'MacBook' }).first().locator('input[type="text"]') with timeout 5000ms
  - waiting for locator('tbody tr').filter({ hasText: 'MacBook' }).first().locator('input[type="text"]')

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
  - button " 1 item(s) - $602.00"
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
    - link "Shopping Cart":
      - /url: https://awesomeqa.com/ui/index.php?route=checkout/cart
- text:  Products marked with *** are not available in the desired quantity or not in stock!
- button "×"
- heading "Shopping Cart (0.00kg)" [level=1]
- table:
  - rowgroup:
    - row "Image Product Name Model Quantity Unit Price Total":
      - cell "Image"
      - cell "Product Name"
      - cell "Model"
      - cell "Quantity"
      - cell "Unit Price"
      - cell "Total"
  - rowgroup:
    - 'row "MacBook MacBook *** Reward Points: 600 Product 16 1   $602.00 $602.00"':
      - cell "MacBook":
        - link "MacBook":
          - /url: https://awesomeqa.com/ui/index.php?route=product/product&product_id=43
          - img "MacBook"
      - 'cell "MacBook *** Reward Points: 600"':
        - link "MacBook":
          - /url: https://awesomeqa.com/ui/index.php?route=product/product&product_id=43
        - text: "*** Reward Points: 600"
      - cell "Product 16"
      - cell "1  ":
        - textbox: "1"
        - button ""
        - button ""
      - cell "$602.00"
      - cell "$602.00"
- heading "What would you like to do next?" [level=2]
- paragraph: Choose if you have a discount code or reward points you want to use or would like to estimate your delivery cost.
- heading "Use Coupon Code " [level=4]:
  - link "Use Coupon Code ":
    - /url: "#collapse-coupon"
- heading "Use Gift Certificate " [level=4]:
  - link "Use Gift Certificate ":
    - /url: "#collapse-voucher"
- table:
  - rowgroup:
    - 'row "Sub-Total: $500.00"':
      - cell "Sub-Total:":
        - strong: "Sub-Total:"
      - cell "$500.00"
    - 'row "Eco Tax (-2.00): $2.00"':
      - cell "Eco Tax (-2.00):":
        - strong: "Eco Tax (-2.00):"
      - cell "$2.00"
    - 'row "VAT (20%): $100.00"':
      - cell "VAT (20%):":
        - strong: "VAT (20%):"
      - cell "$100.00"
    - 'row "Total: $602.00"':
      - cell "Total:":
        - strong: "Total:"
      - cell "$602.00"
- link "Continue Shopping":
  - /url: https://awesomeqa.com/ui/index.php?route=common/home
- link "Checkout":
  - /url: https://awesomeqa.com/ui/index.php?route=checkout/checkout
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
  38 |         await expect(page.locator('#content').getByRole('heading', { name: 'My Account' })).toBeVisible();
  39 |     });
  40 | 
  41 |     await test.step('3) Search for a known product and open the product details page', async () => {
  42 |         await page.locator('#search input[name="search"]').fill(productName);
  43 |         await page.locator('#search button').click();
  44 | 
  45 |         await expect(page).toHaveURL(/route=product\/search/);
  46 | 
  47 |         const productCard = page.locator('.product-thumb').filter({ hasText: productName }).first();
  48 |         await expect(productCard).toBeVisible();
  49 |         await productCard.locator('a').first().click();
  50 | 
  51 |         await expect(page.locator('h1')).toContainText(productName);
  52 |     });
  53 | 
  54 |     await test.step('4) Add the product to the cart and validate product details in cart', async () => {
  55 |         await page.locator('#input-quantity').fill(quantity);
  56 |         await page.locator('#button-cart').click();
  57 | 
  58 |         await expect(page.locator('.alert-success')).toContainText('Success');
  59 |         await page.goto('https://awesomeqa.com/ui/index.php?route=checkout/cart');
  60 | 
  61 |         const cartItem = page.locator('tbody tr').filter({ hasText: productName }).first();
  62 | 
  63 |         await expect(cartItem).toContainText(productName);
> 64 |         await expect(cartItem.locator('input[type="text"]')).toHaveValue(quantity);
     |                                                              ^ Error: expect(locator).toHaveValue(expected) failed
  65 |         await expect(cartItem).toContainText('$602.00');
  66 |         await expect(page.locator('tfoot')).toContainText('$602.00');
  67 |     });
  68 | 
  69 |     console.log('✅ End-to-end shopping flow completed successfully.');
  70 | });
  71 | 
```