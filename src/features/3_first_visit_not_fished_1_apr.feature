Feature: Login to Rod Catch returns update, delete, first time to the service and submit

  Background:
    Given I am on the login page
    And I submit the username and password for test user 1


  Scenario: First login - Save
#    When I am on the which season page
#    And  I select season 2 and I click continue
    And  I am on the did you fish page
    And  I select no and I click continue
    And  I am on the review page


