class CartPage {

    get proceedToCheckoutButton() {
        return $('#post-6 > div > div > div.cart-collaterals > div.cart_totals > div > a')
    }

    get cartPageItemName() {
        return $('#post-6 > div > div > form > table > tbody > tr.cart_item > td.product-name > a')
        }
    get cartPageItemPrice() {
        return $('#post-6 > div > div > form > table > tbody > tr.cart_item > td.product-subtotal > span > bdi')
    }

    async clickProceedToCheckoutButton() {
        await this.proceedToCheckoutButton.click()
    }

    async checkItemPageName() {
        return await this.cartPageItemName.getText()
    }

    async checkItemPagePrice() {
        return await this.cartPageItemPrice.getText()
    }

}

module.exports = new CartPage