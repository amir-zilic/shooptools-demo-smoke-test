const Page = require ('../page-objects/pages/Page')
const Header = require ('../page-objects/components/Header')
const ItemPage = require ('../page-objects/pages/ItemPage')
const assert = require('assert');
const CartPage = require('../page-objects/pages/CartPage');

describe('Add item to cart', () => {
     it('Select first item from front page and add to Cart', async () => {
       
        //Load front page
        await Page.loadFrontPage()

        //Dismis notice
        await Header.clickDismissButton()

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

    })
})
