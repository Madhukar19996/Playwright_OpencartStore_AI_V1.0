/**
 * Test Case: End-to-End Shopping Flow
 *
 * Tags: @master @regression @end-to-end @web
 *
 * Steps:
 * 1) Open the application
 * 2) Register a new customer with unique data
 * 3) Verify successful registration
 * 4) Log out
 * 5) Log in again with the new credentials
 * 6) Verify successful authentication
 * 7) Search for a known product
 * 8) Open the product details page
 * 9) Add the product to the cart
 * 10) Open the shopping cart
 * 11) Verify product, quantity, price and cart total
 */

// using custom fixtures
import { test, expect } from '../../fixtures/pageFixtures';
import { RandomDataUtil } from '../../utils/dataGenerator';
import { Helper } from '../../utils/helper';

test('End-to-end shopping flow test @master @regression @end-to-end @web', async ({
    homePage,
    registerPage,
    accountSuccessPage,
    myAccountPage,
    logoutPage,
    loginPage,
    searchResultsPage,
    productPage,
    shoppingCartPage,
}) => {
    const customer = RandomDataUtil.generateCustomerData();
    const { name: productName, quantity: expectedQuantity } = Helper.getProductDetails();
    let productPagePrice = '';

    await test.step('1) Open the application', async () => {
        expect(await homePage.isHomePageExists()).toBeTruthy();
    });

    await test.step('2) Register a new customer using unique data', async () => {
        await homePage.clickMyAccount();
        await homePage.clickRegister();
        expect(await registerPage.isRegisterPageExists()).toBeTruthy();
        await registerPage.completeRegistration(customer);
    });

    await test.step('3) Verify successful registration', async () => {
        expect(await accountSuccessPage.isAccountCreated()).toBeTruthy();
        await accountSuccessPage.clickContinue();
        expect(await myAccountPage.isMyAccountPageExists()).toBeTruthy();
    });

    await test.step('4) Log out', async () => {
        await myAccountPage.clickLogout();
        expect(await logoutPage.isLogoutPageExists()).toBeTruthy();
        await logoutPage.clickContinue();
    });

    await test.step('5) Log in again using the new credentials', async () => {
        await homePage.clickMyAccount();
        await homePage.clickLogin();
        await loginPage.login(customer.email, customer.password);
    });

    await test.step('6) Verify successful authentication', async () => {
        expect(await myAccountPage.isMyAccountPageExists()).toBeTruthy();
    });

    await test.step('7) Search for a known product', async () => {
        await homePage.searchProduct(productName);
        expect(await searchResultsPage.isProductDisplayed(productName)).toBeTruthy();
    });

    await test.step('8) Open the product details page', async () => {
        await searchResultsPage.clickProduct(productName);
        expect(await productPage.getProductName()).toBe(productName);
        productPagePrice = await productPage.getProductPrice();
    });

    await test.step('9) Add the product to the cart', async () => {
        await productPage.clickAddToCart();
        expect(await productPage.isAddedToCartMessageDisplayed()).toBeTruthy();
    });

    await test.step('10) Open the shopping cart', async () => {
        await productPage.clickShoppingCart();
        expect(await shoppingCartPage.isShoppingCartPageExists()).toBeTruthy();
    });

    await test.step('11) Verify product, quantity, price and cart total', async () => {
        expect(await shoppingCartPage.isProductInCart(productName)).toBeTruthy();
        expect(await shoppingCartPage.getQuantity(productName)).toBe(expectedQuantity);

        const unitPrice = await shoppingCartPage.getUnitPrice(productName);
        expect(unitPrice).toBe(productPagePrice);

        const expectedTotal = Helper.parsePrice(unitPrice) * expectedQuantity;
        expect(Helper.parsePrice(await shoppingCartPage.getLineTotal(productName))).toBe(expectedTotal);
        expect(Helper.parsePrice(await shoppingCartPage.getCartTotal())).toBe(expectedTotal);
    });

    console.log('✅ ✔️ End-to-end shopping flow completed successfully!');
});
