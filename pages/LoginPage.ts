import { Page, Locator } from '@playwright/test';
import { MyAccountPage } from './MyAccountPage';

export class LoginPage {
    private readonly page: Page;

    // Locators
    private readonly txtEmail: Locator;
    private readonly txtPassword: Locator;
    private readonly btnLogin: Locator;
    private readonly headingLogin: Locator;
    private readonly alertDanger: Locator;

    constructor(page: Page) {
        this.page = page;

        // Initialize locators
        this.txtEmail = page.getByLabel('E-Mail Address');
        this.txtPassword = page.getByLabel('Password', { exact: true });
        this.btnLogin = page.getByRole('button', { name: 'Login' });
        this.headingLogin = page.getByText('Account Login', { exact: true }).first();
        this.alertDanger = page.locator('.alert-danger');
    }

    async setEmail(email: string): Promise<void> {
        await this.txtEmail.fill(email);
    }

    async setPassword(password: string): Promise<void> {
        await this.txtPassword.fill(password);
    }

    async clickLogin(): Promise<void> {
        await this.btnLogin.click();
    }

    async openLoginPage(baseUrl: string): Promise<void> {
        const loginUrl = new URL('index.php?route=account/login', baseUrl).toString();
        await this.page.goto(loginUrl);
    }

    async isLoginPageDisplayed(): Promise<boolean> {
        try {
            await this.headingLogin.waitFor({ state: 'visible' });
            return true;
        } catch (error) {
            console.log(`Error checking login page: ${error}`);
            return false;
        }
    }

    async isErrorMessageDisplayed(): Promise<boolean> {
        try {
            await this.alertDanger.waitFor({ state: 'visible' });
            return true;
        } catch (error) {
            console.log(`Error checking login error: ${error}`);
            return false;
        }
    }

    async getErrorMessage(): Promise<string> {
        try {
            return (await this.alertDanger.textContent())?.trim() ?? '';
        } catch (error) {
            console.log(`Error reading login error message: ${error}`);
            return '';
        }
    }

    async isWarningMessageVisible(): Promise<boolean> {
        return this.isErrorMessageDisplayed();
    }

    async getWarningMessage(): Promise<string> {
        return this.getErrorMessage();
    }

    /**
     * Logs in with the given credentials
     * @param email - Registered email
     * @param password - Account password
     * @returns Promise<MyAccountPage> - Instance of the My Account page
     */
    async login(email: string, password: string): Promise<MyAccountPage> {
        try {
            await this.txtEmail.fill(email);
            await this.txtPassword.fill(password);
            await this.btnLogin.click();
            return new MyAccountPage(this.page);
        } catch (error) {
            console.log(`Error during login: ${error}`);
            throw error;
        }
    }
}
