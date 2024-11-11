import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import HomePage from "../../pages/Amazon_tests/HomePage";
import ProductPage from "../../pages/Amazon_tests/ProductPage";

const homePage = new HomePage();
const productPage = new ProductPage();

Given ("the user navigates to amazon website", () => {
  homePage.navigateToHomePage();
});
When ("the user is able to see all products tab", () => {
  homePage.verifyAllProductsTab();
})
Then ("the user clicks on all products tab", () => {
  homePage.clickAllProductsTab();
});
When ("the user selects computers option", () => {
  homePage.selectComputersOption();
})
Then ("the user selects monitors option", () => {
  homePage.selectMonitorsOption();
})
When ("the user choose one item from the page", () => {
  productPage.chooseOneItem();
})
Then ("the user clicks on buy now button", () => {
  productPage.clickOnBuyNowButton();
})


