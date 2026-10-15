import { Page, Locator } from '@playwright/test';
import { HomePage } from './HomePage';

export class LogoutPage {
    private readonly page: Page;

    // Locators
    private readonly headingLogout: Locator;
    private readonly btnContinue: Locator;

    constructor(page: Page) {
        this.page = page;

        // Initialize locators
        this.headingLogout = page.getByRole('heading', { name: 'Account Logout' });
        this.btnContinue = page.getByRole('link', { name: 'Continue' });
    }

    /**
     * Verifies the logout confirmation page is displayed
     * @returns Promise<boolean> - true if the heading is visible
     */
    async isLogoutPageExists(): Promise<boolean> {
        try {
            await this.headingLogout.waitFor({ state: 'visible' });
            return true;
        } catch (error) {
            console.log(`Error checking logout page: ${error}`);
            return false;
        }
    }

    /**
     * Clicks Continue on the logout page
     * @returns Promise<HomePage> - Instance of the home page
     */
    async clickContinue(): Promise<HomePage> {
        await this.btnContinue.click();
        return new HomePage(this.page);
    }
}
