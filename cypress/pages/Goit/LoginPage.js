class LoginPage {

    navigateToLoginPage() {
        cy.visit("https://www.edu.goit.global/account/login");
    }

    enterEmail(email) {
        cy.get("#user_email").type(email);
    }

    enterPassword(password) {
        cy.get("#user_password").type(password);
    }
    
    verifyLoginButton() {
        cy.get("button[type='submit']").should("be.visible");
    } 
    
    clickOnLoginButton() {
        cy.get("button[type='submit']").click();
    }
}

export default LoginPage;