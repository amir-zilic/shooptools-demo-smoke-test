class ItemPage {
    
    get colorDropdown() { 
        return $('#pa_color')     
    }

    get defaultColorOption() { 
        return $('#pa_color > option.attached.enabled')
    }
    
    get sizeDropdown() { 
        return $('#pa_size')
    }

    get sizeDropdownSelect() {
        return $('#product-1497 > div.single-product-content > div.summary.entry-summary > form > table > tbody > tr:nth-child(2) > td')
    }

    get addToCartButton() {
        return $('#product-1497 > div.single-product-content > div.summary.entry-summary > form > div > div.woocommerce-variation-add-to-cart.variations_button.woocommerce-variation-add-to-cart-enabled > button')
    }

    get viewCartButton() {
        return $('#noo-site > div.noo-container-shop.noo-shop-wrap.noo-shop-single-fullwidth > div > div > div.woocommerce-notices-wrapper > div > a')
    }

    get itemPageName() {
        return $('#product-1497 > div.single-product-content > div.summary.entry-summary > h1')
    }

    get itemPagePrice() {
        return $('#product-1497 > div.single-product-content > div.summary.entry-summary > p > span > bdi')
    }

    async clickColorDropdown() {
        await this.colorDropdown.click()
    }

    async selectDefaultColor() {
        await this.defaultColorOption.click()
    }

     async clickSizeDropdown() {
        await this.sizeDropdown.click()
     }

    async selectDefaultSize() {
        await this.sizeDropdown.selectByIndex(1)
    }

    async clickAddToCart() {
        await this.addToCartButton.click()
    }

    async clickViewCart() {
        await this.viewCartButton.click()
    }

    async actualItemName() {
        return await this.itemPageName.getText()
    }

    async actualItemPrice() {
        return await this.itemPagePrice.getText()
    }
    
}

module.exports = new ItemPage