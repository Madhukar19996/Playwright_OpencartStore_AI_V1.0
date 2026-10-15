import { Page, Locator } from '@playwright/test';
import { MyAccountPage } from './MyAccountPage';

export class AccountSuccessPage {
    private readonly page: Page;

    // Locators
    private readonly headingSuccess: Locator;
    private readonly btnContinue: Locator;

    constructor(page: Page) {
        this.page = page;

        // Initialize locators
        this.headingSuccess = page.getByRole('heading', { name: 'Your Account Has Been Created!' });
        this.btnContinue = page.getByRole('link', { name: 'Continue' });
    }

    /**
     * Verifies the registration success message is displayed
     * @returns Promise<boolean> - true if the success heading is visible
     */
    async isAccountCreated(): Promise<boolean> {
        try {
            await this.headingSuccess.waitFor({ state: 'visible' });
            return true;
        } catch (error) {
            console.log(`Error checking account success page: ${error}`);
            return false;
        }
    }

    /**
     * Clicks Continue on the success page
     * @returns Promise<MyAccountPage> - Instance of the My Account page
     */
    async clickContinue(): Promise<MyAccountPage> {
        await this.btnContinue.click();
        return new MyAccountPage(this.page);
    }
}
