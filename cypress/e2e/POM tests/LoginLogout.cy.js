import LoginPage from "../../pages/LoginPage";
import HomePage from "../../pages/Homepage";

describe("Login and Logout Tests", () => {
    it("log in and log out succesfully", () => {
        cy.viewport(1920, 1080);

     const login = new LoginPage();

     login.navigateToLoginPage();
     login.enterEmail("user888@gmail.com");
     login.enterPassword("1234567890");
     login.verifySubmitButton();

     const homePage = new HomePage();
     homePage.openUserMenu();
     homePage.performLogout();
     homePage.verifyLogoutRedirect(); 
    });
});