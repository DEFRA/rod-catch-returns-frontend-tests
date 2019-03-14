Feature: Login to Rod Catch returns update and return to service, submit

  Background:
    Given I am an external user
    And   I am on the licence entry page
    Then  I submit the licence and postcode for test user 1
    And   If it is the extended submission period I select the previous period on the season page


  Scenario: First login - Save
    Given I did fish during the season
    And  I am on the summary page and select the add river link
    *    I fished the river Frome for 15 days with mandatory release and 1 other days
    And I confirm my activity details and continue

    And  I am on the summary page and select the large catch link
    And  I caught a fish weighing 1 lbs 2 oz
    And  I select a valid catch date
    And  The catch river is Frome
    And  The catch species is Sea Trout
    And  The catch method is Fly
    And  The catch wasn't released
    And  I save the large catch and return to the summary
    And  I am on the summary page and I save and exit the service
    And  I am on the draft saved page

  Scenario: Return login - Submit
    When I am on the summary page and select the large catch link
    And  I select a valid catch date
    And  I caught a fish weighing 3 lbs 5 oz
    And  The catch species is Salmon
    And  The catch method is Fly
    And  The catch wasn't released
    And  I save the large catch and return to the summary
    And  I am on the summary page and I click review catch return

  Scenario: First login - delete
    When I am on the delete river page and I click delete
