class HomePage {
    
    navigateToHomePage() {
        cy.visit("https://www.amazon.com/");
    }
    verifyAllProductsTab() {
        cy.get("[id='nav-hamburger-menu']").should("be.visible");
    }
    clickAllProductsTab() {
        cy.get("[id='nav-hamburger-menu']").click();
    }
    selectComputersOption() {
        cy.get("[data-menu-id='6']").click();
    }
    selectMonitorsOption() {
        cy.get("div[id='hmenu-content']").contains("Monitors").click();       
    }
}

export default HomePage;