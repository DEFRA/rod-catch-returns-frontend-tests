Feature: Login to Rod Catch returns update, delete, first time to the service and submit

  Background:
    Given I am on the login page
    And I submit a username and password
    And I am on the which season page
    And I select season 1 and I click continue


  Scenario: First login - Save
    When I am on the did you fish page
    And  I select yes and I click continue
    And  I am on the summary page and select the add river link
    And  I am on the add river page and enter river and days
    And  I am on the summary page and select the large catch link
    And  I select a large river
    And  I enter a date
    And  I select the salmon button
    And  I select the in kilograms radio button
    And  I enter kilos
    And  I select the fly radio button
    And  I select the released yes radio button
    And  I am on the summary page and select the small catch link
    And  I select a small river
    And  I select a month
    And  I enter number of fish caught fly
    And  I enter number of fish caught spinner
    And  I enter number of fish caught bait
    And  I enter number of fish released
    And  I am on the summary page and I save and exit the service
    And  I am on the draft saved page and I click the return to licence page

  Scenario: First login - delete
    When I am on the delete river page and I click delete



