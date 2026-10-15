export class Helper {
    static convertPriceToNumber(price: string): number {
        // Remove all characters except digits and decimal point
        const cleanedPrice = price.replace(/[^\d.]/g, '');
        // Convert to number
        return parseFloat(cleanedPrice);
    }

    static parsePrice(price: string): number {
        return this.convertPriceToNumber(price);
    }

    static getProductDetails() {
        return {
            name: 'MacBook',
            quantity: 1,
            totalPrice: '$602.00',
            productName: 'MacBook',
            productQuantity: 1,
        };
    }

    static getLoginDetails() {
        return {
            email: 'pavanol@xyz.com',
            password: 'test@123'
        };
    }
}