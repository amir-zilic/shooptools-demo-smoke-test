const Page = require('../page-objects/pages/Page')
const MyAccountPage = require('../page-objects/pages/MyAccountPage')
const User = require('../page-objects/components/User')
const Header = require('../page-objects/components/Header')
const Check = require('../page-objects/Utils/Check')
const assert = require('assert');


describe('Login with valid info', () => {
    xit('Enter valid info and log in', async () => {
        
        await Page.loadFrontPage()
 
        //Remove banner and go to my account page
        await Header.clickDismissButton()
        await Header.clickMyAccountButton()
       
        //Fill login form with predefined data
        await MyAccountPage.fillUsernameLogin(User.defaultUser.username)
        await MyAccountPage.fillPasswordLogin(User.defaultUser.password)
        await MyAccountPage.loginClick()

        //Check login message
        const loginMsg = await MyAccountPage.getLoginMsgText()
        //assert.strictEqual(loginMsg, Utils.loginSuccess, 'Wrong login message')
        assert.strictEqual(loginMsg, (await Check.signUpConfirm(User.defaultUser.username)).toString(), 'Wrong login message')
    })
})

