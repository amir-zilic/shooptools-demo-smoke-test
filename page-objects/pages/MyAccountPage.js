const Utils = require('../utils/Generator')
import * as dataHelper from '../utils/Generator'

class MyAccountPage {
    

    get usernameInputLogin() {
        return $('#username')
    }

    get passwordInputLogin() {
        return $('#password')
    }

    get usernameInputReg() {
        return $('#reg_username')
    }

    get emailInputReg() { 
        return $('#reg_email')
    }

    get passwordInputReg() { 
        return $('#reg_password')
    }

    get loginButton() {
        return $('#customer_login > div.u-column1.col-1 > form > p:nth-child(3) > button')
    }

    get registerButton() { 
        return $('#customer_login > div.u-column2.col-2 > form > p:nth-child(5) > button')
    }

    get logOutButton() { 
        return $('#post-8 > div > div > div > p:nth-child(2) > a')
    }

     get loginConfirmationMsg() {
         return $('#post-8 > div > div > div > p:nth-child(2)')
     }

     get ordersButton() {
        return $('#post-8 > div > div > nav > ul > li.woocommerce-MyAccount-navigation-link.woocommerce-MyAccount-navigation-link--orders > a')
     }

     get orderId() {
        return $('#post-8 > div > div > div > table > tbody > tr > td.woocommerce-orders-table__cell.woocommerce-orders-table__cell-order-number > a')
    }


    async fillUsernameLogin(username) {
        await this.usernameInputLogin.setValue(username)
    }

    async fillPasswordLogin(password) {
        await this.passwordInputLogin.setValue(password)
    }

    async fillUsernameReg(username) {
        await this.usernameInputReg.setValue(username)
    }

    async fillEmailReg(email) {
        await this.emailInputReg.setValue(email)
    }

    async fillPasswordReg(password) {
        await this.passwordInputReg.setValue(password)
    }

    async loginClick() {
        await this.loginButton.click()
    }

    async registerClick() { 
        await this.registerButton.click()
    }

    async logOutClick() {
        await this.logOutButton.click()
    }

    async getLoginMsgText() {
        return await this.loginConfirmationMsg.getText()
    }

    async clickOrdersButton() {
        return await this.ordersButton.click()
    }

    async checkOrderId() {
        return await this.orderId.getText()
    }

}

module.exports = new MyAccountPage