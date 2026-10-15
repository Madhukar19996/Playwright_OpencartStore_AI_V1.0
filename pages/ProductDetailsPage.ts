import { Page, Locator } from '@playwright/test';

export class ProductDetailsPage {
    private readonly page: Page;

    // Locators
    private readonly productName: Locator;
    private readonly productPrice: Locator;
    private readonly quantityInput: Locator;
    private readonly addToCartButton: Locator;
    private readonly successAlert: Locator;

    constructor(page: Page) {
        this.page = page;

        // Initialize locators with CSS selectors
        this.productName = page.locator('#content h1:visible');
        this.productPrice = page.locator('#content').getByRole('heading', { level: 2 }).filter({ hasText: /^\$/ });
        this.quantityInput = page.locator('#input-quantity');
        this.addToCartButton = page.locator('#button-cart');
        this.successAlert = page.locator('.alert-success');
    }

    /**
     * Gets the product name text
     * @returns Promise<string> - Product name text
     */
    async getProductName(): Promise<string> {
        return await this.productName.first().textContent() ?? '';
    }

    /**
     * Gets the product price text
     * @returns Promise<string> - Product price text
     */
    async getProductPrice(): Promise<string> {
        return await this.productPrice.first().textContent() ?? '';
    }

    /**
     * Sets product quantity
     * @param quantity - Quantity to set
     */
    async setQuantity(quantity: string): Promise<void> {
        await this.quantityInput.fill(quantity);
    }

    /**
     * Clicks add to cart button
     */
    async clickAddToCart(): Promise<void> {
        await this.addToCartButton.click();
    }

    /**
     * Sets the requested quantity and adds the product to the cart
     * @param quantity - Quantity to add
     */
    async addToCart(quantity: string): Promise<void> {
        await this.setQuantity(quantity);
        await this.clickAddToCart();
    }

    /**
     * Checks if product details page is displayed
     * @returns Promise<boolean> - true if page is displayed
     */
    async isProductDetailsDisplayed(): Promise<boolean> {
        try {
            await this.productName.first().waitFor({ state: 'visible' });
            return await this.productName.first().isVisible();
        } catch (error) {
            return false;
        }
    }

    /**
     * Gets success alert text
     * @returns Promise<string> - Success alert text
     */
    async getSuccessMessage(): Promise<string> {
        try {
            return await this.successAlert.textContent() ?? '';
        } catch (error) {
            return '';
        }
    }
}