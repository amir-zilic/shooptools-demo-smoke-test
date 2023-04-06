class Page {
    
    get firstItem() {
        return $('#noo-site > div.page_fullwidth > div:nth-child(3) > div > div.padding-stylebox.wpb_column.vc_column_container.vc_col-sm-12.vc_col-lg-7.vc_col-md-7.vc_hidden-sm > div > div > div > div.noo-sh-product-grid.woocommerce > div.noo-sh-product-html.columns_3.no_masonry.three.row.is-flex > div.noo-product-item.noo-product-sm-4.not_featured.post-1497.product.type-product.status-publish.has-post-thumbnail.product_cat-t-shirt.product_tag-t-shirt.product_tag-women.has-featured.first.instock.shipping-taxable.purchasable.product-type-variable > div > h3 > a')
    }

    get itemPrice() {
        return $('#noo-site > div.page_fullwidth > div:nth-child(3) > div > div.padding-stylebox.wpb_column.vc_column_container.vc_col-sm-12.vc_col-lg-7.vc_col-md-7.vc_hidden-sm > div > div > div > div.noo-sh-product-grid.woocommerce > div.noo-sh-product-html.columns_3.no_masonry.three.row.is-flex > div.noo-product-item.noo-product-sm-4.not_featured.post-1497.product.type-product.status-publish.has-post-thumbnail.product_cat-t-shirt.product_tag-t-shirt.product_tag-women.has-featured.first.instock.shipping-taxable.purchasable.product-type-variable > div > div.shop-loo-after-item > span > span > bdi')
    }
   
    async openFirstItem() {
        await this.firstItem.click()
    }

    async firstItemName() {
        return await this.firstItem.getText()
    }

    async actualItemPrice() {
        return await this.itemPrice.getText()
    }

    async loadFrontPage() {
        await browser.url('https://shop.demoqa.com/')
    }

}

module.exports = new Page