import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from "../../pages/Goit/LoginPage";
import HomePage from "../../pages/Goit/HomePage";

const loginPage = new LoginPage();
const homePage = new HomePage();

Given("the user opens the goit website", () => {
  loginPage.navigateToLoginPage();
});

When("the user performs the login with valid credentials", () => {
  loginPage.enterEmail("user888@gmail.com");
  loginPage.enterPassword("1234567890");
  loginPage.clickOnLoginButton();
});

Then("the user is able to see goit courses", () => {
  homePage.accessCourses();
});