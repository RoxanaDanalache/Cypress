class ProductPage {

    chooseOneItem() {
        cy.get("[data-index='10']").click();
    }
    clickOnBuyNowButton() {
        cy.get("input[id='buy-now-button']").click();
    }
}

export default ProductPage