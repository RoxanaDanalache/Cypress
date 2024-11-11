describe("Feature: Purchasing a product from Amazon", () => {
    it("Verify if the user is able to search and purchase a product", () => {

        cy.visit("https://www.amazon.com/");
        homePage.verifyAllProductsTab();
        homePage.clickAllProductsTab();
        homePage.selectComputersOption();
        homePage.selectMonitorsOption();
        productPage.chooseOneItem();
        productPage.clickOnBuyNowButton();
    });
});