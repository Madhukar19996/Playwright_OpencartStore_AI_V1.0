import { Page, Locator } from '@playwright/test';
import { RegisterPage } from './RegisterPage';
import { LoginPage } from './LoginPage';
import { SearchResultsPage } from './SearchResultsPage';

export class HomePage {
    private readonly page: Page;

    // Locators
    private readonly lnkMyAccount: Locator;
    private readonly lnkRegister: Locator;
    private readonly lnkLogin: Locator;
    private readonly txtSearch: Locator;
    private readonly btnSearch: Locator;
    private readonly imgLogo: Locator;

    constructor(page: Page) {
        this.page = page;

        // Initialize locators
        this.lnkMyAccount = page.getByTitle('My Account');
        this.lnkRegister = page.locator('#top-links').getByRole('link', { name: 'Register', exact: true });
        this.lnkLogin = page.locator('#top-links').getByRole('link', { name: 'Login', exact: true });
        this.txtSearch = page.getByPlaceholder('Search');
        this.btnSearch = page.locator('#search button');
        this.imgLogo = page.getByRole('link', { name: 'TheTestingAcademy eCommerce' });
    }

    /**
     * Verifies the home page is displayed
     * @returns Promise<boolean> - true if the store logo is visible
     */
    async isHomePageExists(): Promise<boolean> {
        try {
            return await this.imgLogo.isVisible();
        } catch (error) {
            console.log(`Error checking home page: ${error}`);
            return false;
        }
    }

    async navigateTo(url: string): Promise<void> {
        await this.page.goto(url);
    }

    /**
     * Opens the My Account dropdown in the header
     */
    async clickMyAccount(): Promise<void> {
        await this.lnkMyAccount.click();
    }

    /**
     * Clicks the Register link in the My Account dropdown
     * @returns Promise<RegisterPage> - Instance of the register page
     */
    async clickRegister(): Promise<RegisterPage> {
        await this.lnkRegister.click();
        return new RegisterPage(this.page);
    }

    /**
     * Clicks the Login link in the My Account dropdown
     * @returns Promise<LoginPage> - Instance of the login page
     */
    async clickLogin(): Promise<LoginPage> {
        await this.lnkLogin.click();
        return new LoginPage(this.page);
    }

    /**
     * Searches for a product from the header search box
     * @param productName - Text to search for
     * @returns Promise<SearchResultsPage> - Instance of the search results page
     */
    async searchProduct(productName: string): Promise<SearchResultsPage> {
        await this.txtSearch.fill(productName);
        await this.btnSearch.click();
        return new SearchResultsPage(this.page);
    }
}
