import { Page, Locator } from '@playwright/test';
import { ProductPage } from './ProductPage';

export class SearchResultsPage {
    private readonly page: Page;

    // Locators
    private readonly productTitles: Locator;

    constructor(page: Page) {
        this.page = page;

        // Initialize locators
        this.productTitles = page.locator('.product-thumb h4');
    }

    /**
     * Checks whether a product with the exact name is listed
     * @param productName - Product name to look for
     * @returns Promise<boolean> - true if the product link is visible
     */
    async isProductDisplayed(productName: string): Promise<boolean> {
        try {
            const product = this.productTitles.getByRole('link', { name: productName, exact: true });
            await product.waitFor({ state: 'visible' });
            return true;
        } catch (error) {
            console.log(`Error checking product in results: ${error}`);
            return false;
        }
    }

    /**
     * Opens the product details page
     * @param productName - Product name to open
     * @returns Promise<ProductPage> - Instance of the product page
     */
    async clickProduct(productName: string): Promise<ProductPage> {
        await this.productTitles.getByRole('link', { name: productName, exact: true }).click();
        return new ProductPage(this.page);
    }
}
