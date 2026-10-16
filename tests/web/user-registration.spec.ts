/**
 * Test Case: User Registration Flow
 *
 * Tags: @master @sanity @regression @web
 *
 * Steps:
 * 1) Open the application
 * 2) Navigate to My Account → Register
 * 3) Submit valid unique customer details and accept the Privacy Policy
 * 4) Verify account creation
 * 5) Continue to My Account and verify authenticated account navigation
 */

import { test, expect } from '../../fixtures/pageFixtures';
import { RandomDataUtil } from '../../utils/dataGenerator';

test('User registration flow @master @sanity @regression @web', async ({
    page,
    homePage,
    registerPage,
    accountSuccessPage,
    myAccountPage
}) => {
    const customer = RandomDataUtil.generateCustomerData();

    await test.step('1) Open the application', async () => {
        expect(await homePage.isHomePageExists()).toBeTruthy();
    });

    await test.step('2) Navigate to My Account → Register', async () => {
        await homePage.clickMyAccount();
        await homePage.clickRegister();
        expect(await registerPage.isRegisterPageExists()).toBeTruthy();
        await expect(page).toHaveURL(/route=account\/register/);
    });

    await test.step('3) Submit unique customer details and accept the Privacy Policy', async () => {
        await registerPage.completeRegistration(customer);
    });

    await test.step('4) Verify account creation', async () => {
        expect(await accountSuccessPage.isAccountCreated()).toBeTruthy();
    });

    await test.step('5) Verify authenticated account navigation', async () => {
        await accountSuccessPage.clickContinue();
        expect(await myAccountPage.isMyAccountPageExists()).toBeTruthy();
        await expect(page).toHaveURL(/route=account\/account/);
    });

    console.log('✅ ✔️ User registration flow completed successfully!');
});
