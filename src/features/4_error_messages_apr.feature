Feature: Error messages for anglers

  Background:
    Given I am an external user

  Scenario: An error message is shown if an invalid licence and postcode is entered
    Given I am on the licence entry page
    When  I submit the licence ABC123 and postcode AA11 1AA
    Then  You have not entered a correct licence number and postcode is shown in the error summary
    And   I am redirected to /licence-auth-fail
