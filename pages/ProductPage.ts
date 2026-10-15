import { Page, Locator } from '@playwright/test';
import { ShoppingCartPage } from './ShoppingCartPage';

export class ProductPage {
    private readonly page: Page;

    // Locators
    private readonly headingProductName: Locator;
    private readonly lblPrice: Locator;
    private readonly btnAddToCart: Locator;
    private readonly alertSuccess: Locator;
    private readonly lnkShoppingCart: Locator;

    constructor(page: Page) {
        this.page = page;

        // Initialize locators
        this.headingProductName = page.getByRole('heading', { level: 1 });
        this.lblPrice = page.locator('#content ul.list-unstyled h2').first();
        this.btnAddToCart = page.locator('#button-cart');
        this.alertSuccess = page.locator('.alert-success');
        this.lnkShoppingCart = page.getByTitle('Shopping Cart');
    }

    /**
     * Gets the product name shown on the details page
     * @returns Promise<string> - Product name
     */
    async getProductName(): Promise<string> {
        return (await this.headingProductName.innerText()).trim();
    }

    /**
     * Gets the price shown on the details page
     * @returns Promise<string> - Price text, e.g. "$602.00"
     */
    async getProductPrice(): Promise<string> {
        return (await this.lblPrice.innerText()).trim();
    }

    /**
     * Clicks Add to Cart
     */
    async clickAddToCart(): Promise<void> {
        await this.btnAddToCart.click();
    }

    /**
     * Verifies the add-to-cart success alert is displayed
     * @returns Promise<boolean> - true if the alert is visible
     */
    async isAddedToCartMessageDisplayed(): Promise<boolean> {
        try {
            await this.alertSuccess.waitFor({ state: 'visible' });
            return true;
        } catch (error) {
            console.log(`Error checking add-to-cart message: ${error}`);
            return false;
        }
    }

    /**
     * Opens the shopping cart from the header
     * @returns Promise<ShoppingCartPage> - Instance of the shopping cart page
     */
    async clickShoppingCart(): Promise<ShoppingCartPage> {
        await this.lnkShoppingCart.click();
        return new ShoppingCartPage(this.page);
    }
}
