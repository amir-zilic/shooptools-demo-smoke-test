const Page = require ('../page-objects/pages/Page')
const Header = require ('../page-objects/components/Header')
const MyAccountPage = require ('../page-objects/pages/MyAccountPage')
const ItemPage = require ('../page-objects/pages/ItemPage')
const CartPage = require ('../page-objects/pages/CartPage')
const CheckoutPage = require ('../page-objects/pages/CheckoutPage')
const User = require ('../page-objects/components/User')
const Generator = require('../page-objects/utils/Generator')
const Check = require('../page-objects/utils/Check')
const assert = require('assert');


describe('Add item to cart', () => {
    it('Select first item from front page and add to Cart', async () => {
       
        //Load front page
        await Page.loadFrontPage()

        //Generate random values for shipping info
        User.user.firstName = (await Generator.generateFirstName()).toString()
        User.user.lastName = (await Generator.generateLastName()).toString()
        User.user.streetAdress = (await Generator.generateStreetAdress()).toString()
        User.user.pinCode = (await Generator.generatePinCode()).toString()
        User.user.phoneNumber = (await Generator.generatePhoneNumber()).toString()
        User.user.email = (await Generator.generateEmail()).toString()
        User.user.username = (await Generator.generateUsername()).toString()
        User.user.password = (await Generator.generatePassword()).toString()

        //Remove banner and go to my account page
        await Header.clickDismissButton()
        await Header.clickMyAccountButton()
   
        //Fill in registration form with random data and go back to front page
        await MyAccountPage.fillUsernameReg(User.user.username)
        await MyAccountPage.fillEmailReg(User.user.email)
        await MyAccountPage.fillPasswordReg(User.user.password)
   
        await MyAccountPage.registerClick()

        await Header.clickBackToFrontPageButton()

       
       //Click on first featured item on Front Page
       const expectedItemName = await Page.firstItemName()
       const expectedItemPrice = await Page.actualItemPrice()
       await Page.openFirstItem()
      
       //Check if correct item is loaded
       assert.strictEqual((await ItemPage.actualItemName()).toString(), expectedItemName, 'Wrong Item Loaded')
       assert.strictEqual((await ItemPage.actualItemPrice()).toString(), expectedItemPrice, 'Wrong item price')

        //Choose color and size, click AddToCart
        await ItemPage.clickColorDropdown()
        await ItemPage.selectDefaultColor()
        await ItemPage.clickSizeDropdown()
        await ItemPage.selectDefaultSize()
        await ItemPage.clickAddToCart()
        
        //Go to Cart, check added to cart message 
        await ItemPage.clickViewCart()

        //Check if correct item is in cart
        const cartItemName = await CartPage.checkItemPageName()
        let newStr = cartItemName.slice(0, -7); 
        assert.strictEqual(newStr, expectedItemName, 'Wrong item added to cart')
        assert.strictEqual((await CartPage.checkItemPagePrice()).toString(), expectedItemPrice, 'Wrong item price in cart')

        // Go to checkout page
        await CartPage.clickProceedToCheckoutButton()

        ///input Shipping info     
        await CheckoutPage.fillFirstName(User.user.firstName)
        await CheckoutPage.fillLastName(User.user.lastName)
        await CheckoutPage.fillStreetAdress(User.user.streetAdress)
        await CheckoutPage.fillCityName(User.user.cityName)
        await CheckoutPage.fillPinCode(User.user.pinCode)
        await CheckoutPage.fillPhoneNumber(User.user.phoneNumber)
        await CheckoutPage.fillBillingEmail(User.user.email)

        //Agree to Terms and Conditions, Place Order
        await CheckoutPage.clickAgreeToTermsButton()
        await CheckoutPage.clickPlaceOrderButton()

        //Check Shipping Info
        assert.strictEqual((await CheckoutPage.getCheckoutItemName()).toString(), (await Check.checkoutItemName(newStr.toLowerCase())).toString() , 'Wrong checkout in checkout page')
        assert.strictEqual((await CheckoutPage.getCheckoutItemPrice()).toString(), expectedItemPrice, 'Wrong price in checkout')
        assert.strictEqual((await CheckoutPage.getCheckoutShippingInfo()).toString(), 
        (await Check.checkoutShippingInfo(User.user.firstName, User.user.lastName, User.user.streetAdress, User.user.cityName, User.user.pinCode, User.user.phoneNumber, User.user.email)).toString(), 'Wrong adress info')

        User.user.orderId = '#' + (await CheckoutPage.getOrderId()).toString()

        //Navigate to orders on My Account page
        await Header.clickBackToFrontPageButton()
        await Header.clickMyAccountButton()
        await MyAccountPage.clickOrdersButton()

        assert.strictEqual((await MyAccountPage.checkOrderId()).toString(), User.user.orderId.toString(), 'Wrong order ID'  )
    })
})
