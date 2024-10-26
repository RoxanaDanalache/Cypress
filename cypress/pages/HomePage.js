class HomePage {
    openUserMenu() {
        cy.get('[data-test-id="CircularProgressbarWithChildren"]').click();
    }

    performLogout() {
        cy.contains("Log out").click();
    }

    verifyLogoutRedirect() {
        cy.url().should("include", "/account/login");
    }
}
    
export default HomePage;






