class CheckoutPage {

    get firstNameInput() {
        return $('#billing_first_name')
    }

    get lastNameInput() { 
        return $('#billing_last_name')
    }

    get streetAdressInput() {
        return $('#billing_address_1')
    }

    get cityNameInput() {
        return $('#billing_city')
    }

    get pinCodeInput() {
        return  $('#billing_postcode')
    }

    get phoneNumberInput() {
        return $('#billing_phone')
    }

    get billingEmailInput() {
        return $('#billing_email')
    }

 
    get agreeToTermsButton() {
        return $('#terms')
    }

    get placeOrderButton() {
        return $('#place_order')
    }

    get orderId() {
        return $('#post-7 > div > div > div > ul > li.order > strong')
    }

    get checkoutItemName() {
        return $('#post-7 > div > div > div > section.woocommerce-order-details > table > tbody > tr > td.woocommerce-table__product-name.product-name > a')
    }

    get checkoutItemPrice() {
        return $('#post-7 > div > div > div > section.woocommerce-order-details > table > tfoot > tr:nth-child(3) > td > span')
    }

    get checkoutShippingInfo() {
        return $('//*[@id="post-7"]/div/div/div/section[2]/address')
    }

    async fillFirstName(firstName) {
        await this.firstNameInput.setValue(firstName)
    }

    async fillLastName(lastName) {
        await this.lastNameInput.setValue(lastName)
    }

    async fillStreetAdress(streetAdress) {
        await this.streetAdressInput.setValue(streetAdress)
    }

    async fillCityName(cityName){
        await this.cityNameInput.setValue(cityName)
    }

    async fillPinCode(pinCode){
        await this.pinCodeInput.setValue(pinCode)
    }

    async fillPhoneNumber(phoneNumber){
        await this.phoneNumberInput.setValue(phoneNumber)
    }

    async fillBillingEmail(email) { 
        await this.billingEmailInput.setValue(email)
    }

    async clickAgreeToTermsButton() {
        await this.agreeToTermsButton.click()
    }

    async clickPlaceOrderButton() {
        await this.placeOrderButton.click()
    }

    async getOrderId() {
        return await this.orderId.getText()
    }

    async getCheckoutItemName() {
        return await this.checkoutItemName.getText()
    }

    async getCheckoutItemPrice() {
        return await this.checkoutItemPrice.getText()
    }

    async getCheckoutShippingInfo() {
        return await this.checkoutShippingInfo.getText()
    }

}

module.exports = new CheckoutPage