describe("Login and Logout Tests", () => {
    it("log in and log out succesfully", () => {
        cy.viewport(1920,1080);
        cy.login("testowyqa@qa.team", "QA!automation-1 ")
        cy.get("button[type='submit']").click();
        cy.get('[data-test-id="CircularProgressbarWithChildren"]').click();
        cy.contains("Log out").click();
        cy.url().should("include", "/account/login"); 
    });
});