const Page = require('../page-objects/pages/Page')
const MyAccountPage = require('../page-objects/pages/MyAccountPage')
const Generator = require('../page-objects/utils/Generator')
const Check = require('../page-objects/utils/Check')
const User = require('../page-objects/components/User')
const Header = require('../page-objects/components/Header')
const assert = require('assert');



describe('Registration and Login Flow', () => {
    xit('Register with random information and log back in', async () => {
        
        //Load front page
        await Page.loadFrontPage()

        //set random values for user
        User.user.username = (await Generator.generateUsername()).toString()
        User.user.email = (await Generator.generateEmail()).toString()
        User.user.password = (await Generator.generatePassword()).toString()
        
 
        //Remove banner and go to my account page
        await Header.clickDismissButton()
        await Header.clickMyAccountButton()

        //Fill in registration form with random data 
        await MyAccountPage.fillUsernameReg(User.user.username)
        await MyAccountPage.fillEmailReg(User.user.email)
        await MyAccountPage.fillPasswordReg(User.user.password)

        await MyAccountPage.registerClick()
        
        //Check registration/login message
        const loginMsg = await MyAccountPage.getLoginMsgText()
        assert.strictEqual(loginMsg,(await Check.signUpConfirm(User.user.username)).toString(),'Wrong sign up message')

        //Click logout and log back in
        await MyAccountPage.logOutClick()

        await MyAccountPage.fillUsernameLogin(User.user.username)
        await MyAccountPage.fillPasswordLogin(User.user.password)

        await MyAccountPage.loginClick()


        //Check LoginMessage
        assert.strictEqual(loginMsg, (await Check.signUpConfirm(User.user.username)).toString(), 'Wrong login message')


    })
})