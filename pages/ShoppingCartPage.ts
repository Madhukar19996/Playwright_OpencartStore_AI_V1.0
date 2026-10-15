import { Page, Locator } from '@playwright/test';

export class ShoppingCartPage {
    private readonly page: Page;

    // Locators
    private readonly headingCart: Locator;
    private readonly cartRows: Locator;
    private readonly totalsTable: Locator;

    constructor(page: Page) {
        this.page = page;

        // Initialize locators
        this.headingCart = page.getByRole('heading', { name: /Shopping Cart/ });
        this.cartRows = page.locator('#content form table tbody tr');
        this.totalsTable = page.locator('#content table').last();
    }

    /**
     * Verifies the shopping cart page is displayed
     * @returns Promise<boolean> - true if the cart heading is visible
     */
    async isShoppingCartPageExists(): Promise<boolean> {
        try {
            await this.headingCart.waitFor({ state: 'visible' });
            return true;
        } catch (error) {
            console.log(`Error checking shopping cart page: ${error}`);
            return false;
        }
    }

    /**
     * Checks whether a product is listed in the cart
     * @param productName - Product name to look for
     * @returns Promise<boolean> - true if the product link is in the cart
     */
    async isProductInCart(productName: string): Promise<boolean> {
        try {
            return await this.cartRows.getByRole('link', { name: productName, exact: true }).first().isVisible();
        } catch (error) {
            console.log(`Error checking product in cart: ${error}`);
            return false;
        }
    }

    /**
     * Gets the quantity of a product in the cart
     * @param productName - Product name
     * @returns Promise<number> - Quantity
     */
    async getQuantity(productName: string): Promise<number> {
        const row = this.cartRows.filter({ hasText: productName }).first();
        return Number(await row.locator('input[name^="quantity"]').inputValue());
    }

    /**
     * Gets the unit price of a product in the cart
     * @param productName - Product name
     * @returns Promise<string> - Unit price text
     */
    async getUnitPrice(productName: string): Promise<string> {
        const row = this.cartRows.filter({ hasText: productName }).first();
        return (await row.locator('td.text-right').nth(0).innerText()).trim();
    }

    /**
     * Gets the line total of a product in the cart
     * @param productName - Product name
     * @returns Promise<string> - Line total text
     */
    async getLineTotal(productName: string): Promise<string> {
        const row = this.cartRows.filter({ hasText: productName }).first();
        return (await row.locator('td.text-right').nth(1).innerText()).trim();
    }

    /**
     * Gets the cart's final Total value
     * @returns Promise<string> - Total text
     */
    async getCartTotal(): Promise<string> {
        const totalRow = this.totalsTable.getByRole('row', { name: /^Total:/ });
        return (await totalRow.getByRole('cell').last().innerText()).trim();
    }
}
