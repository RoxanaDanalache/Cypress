Feature: Purchasing a product from amazon

  Scenario: Verify if the user is able to search and purchase a product
  Given the user navigates to amazon website
  When the user is able to see all products tab
  Then the user clicks on all products tab 
  When the user selects computers option
  Then the user selects monitors option
  When the user choose one item from the page
  Then the user clicks on buy now button   
    