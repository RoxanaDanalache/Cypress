describe("Login and Logout Tests", () => {
    it("log in and log out succesfully", () => {
        cy.viewport(1920,1080);
        cy.login("user888@gmail.com", "1234567890")
        cy.get("button[type='submit']").click();
        cy.get('[data-test-id="CircularProgressbarWithChildren"]').click();
        cy.contains("Logout").click();
        cy.url().should("include", "/account/login"); 
    });
});