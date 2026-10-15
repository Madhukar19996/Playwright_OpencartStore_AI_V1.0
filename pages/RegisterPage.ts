import { Page, Locator } from '@playwright/test';
import { AccountSuccessPage } from './AccountSuccessPage';
import { CustomerData } from '../utils/dataGenerator';

export class RegisterPage {
    private readonly page: Page;

    // Locators
    private readonly headingRegister: Locator;
    private readonly txtFirstName: Locator;
    private readonly txtLastName: Locator;
    private readonly txtEmail: Locator;
    private readonly txtTelephone: Locator;
    private readonly txtPassword: Locator;
    private readonly txtConfirmPassword: Locator;
    private readonly chkPrivacyPolicy: Locator;
    private readonly btnContinue: Locator;

    constructor(page: Page) {
        this.page = page;

        // Initialize locators
        this.headingRegister = page.getByRole('heading', { name: 'Register Account' });
        this.txtFirstName = page.getByLabel('First Name');
        this.txtLastName = page.getByLabel('Last Name');
        this.txtEmail = page.getByLabel('E-Mail');
        this.txtTelephone = page.getByLabel('Telephone');
        this.txtPassword = page.getByLabel('Password', { exact: true });
        this.txtConfirmPassword = page.getByLabel('Password Confirm');
        this.chkPrivacyPolicy = page.locator('input[name="agree"]');
        this.btnContinue = page.getByRole('button', { name: 'Continue' });
    }

    /**
     * Verifies the register page is displayed
     * @returns Promise<boolean> - true if the heading is visible
     */
    async isRegisterPageExists(): Promise<boolean> {
        try {
            await this.headingRegister.waitFor({ state: 'visible' });
            return true;
        } catch (error) {
            console.log(`Error checking register page: ${error}`);
            return false;
        }
    }

    /**
     * Fills the registration form, accepts the privacy policy and submits it
     * @param customer - Customer details to register with
     * @returns Promise<AccountSuccessPage> - Instance of the account success page
     */
    async completeRegistration(customer: CustomerData): Promise<AccountSuccessPage> {
        try {
            await this.txtFirstName.fill(customer.firstName);
            await this.txtLastName.fill(customer.lastName);
            await this.txtEmail.fill(customer.email);
            await this.txtTelephone.fill(customer.telephone);
            await this.txtPassword.fill(customer.password);
            await this.txtConfirmPassword.fill(customer.password);
            await this.chkPrivacyPolicy.check();
            await this.btnContinue.click();
            return new AccountSuccessPage(this.page);
        } catch (error) {
            console.log(`Error completing registration: ${error}`);
            throw error;
        }
    }
}
