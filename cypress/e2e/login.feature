Feature: Login to goit website

  Scenario: Verify if the user is able to login with valid credentials

    Given the user opens the goit website
    When the user performs the login with valid credentials
    Then the user is able to see goit courses

    