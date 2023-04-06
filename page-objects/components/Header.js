class Header {

get dismissButton() {
    return $('body > p > a')
}

get myAccountButton() {
    return $('#noo-site > header > div.noo-topbar > div > ul.pull-right.noo-topbar-right > li:nth-child(2) > a')
}

get backToFrontPageButton() {
    return $('#noo-site > section > div > div > div > span:nth-child(1) > a > span')
}

async clickDismissButton() { 
        await this.dismissButton.click()
    }

    async clickMyAccountButton() {
        await this.myAccountButton.click()
    }   

    async clickBackToFrontPageButton() {
        await this.backToFrontPageButton.click()
    }

}

module.exports = new Header 
