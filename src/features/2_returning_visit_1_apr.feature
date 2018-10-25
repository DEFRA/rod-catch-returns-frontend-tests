Feature: Login to Rod Catch returns update and return to service, submit

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
    And  I enter a date
    And  I select the salmon button
    And  I select the in kilograms radio button
    And  I enter kilos
    And  I select the fly radio button
    And  I select the released yes radio button
    And  I am on the summary page
    And  I am on the summary page and I save and exit the service
    And  I am on the draft saved page and I click the return to licence page


  Scenario: Return login - Submit
    When I am on the summary page and select the large catch link
    And  I enter a date
    And  I select the salmon button
    And  I select the in kilograms radio button
    And  I enter kilos
    And  I select the fly radio button
    And  I select the released yes radio button
    And  I am on the summary page and I click review catch return


  Scenario: First login - delete
    When I am on the delete river page and I click delete
