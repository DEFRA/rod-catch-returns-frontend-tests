Feature: Login to Rod Catch returns Using licence number and

  Background:
    Given I am on the login page

  Scenario: Search for something
    When I submit a username and password
    And  I enter river and days
    And  I am on the summary page and select the large catch link
    And  I select a river
    And  I enter a date
    And  I select the salmon button
    And  I select the in kilograms radio button
    And  I enter kilos
    And  I select the fly radio button
    And  I select the released yes radio button
    And  I am on the summary page and I click review catch return
    And  I am on the review page and I click submit
