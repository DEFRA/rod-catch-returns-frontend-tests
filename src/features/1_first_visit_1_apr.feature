Feature: Login to Rod Catch returns update, delete, first time to the service and submit

  Background:
    Given I am on the login page
    And I submit the username and password for test user 1
#    And I am on the which season page
#    And I select season 1 and I click continue

  Scenario: First login - Save
    When I am on the did you fish page
    And  I select yes and I click continue

    And  I am on the summary page and select the add river link
    And I fished the river Ystrad
    And I fished 5 days with mandatory release and 10 other days
    And I confirm my activity details and continue

    And  I am on the summary page and select the large catch link
    And  I caught a fish weighing 3.5 kilos
    And  The catch date was 5 of January
    And  The catch river is Ystrad
    And  The catch species is Salmon
    And  The catch method is Fly
    And  The catch was released


    And  I am on the summary page and select the small catch link
    And  I select a small river
    And  I select a month
    And  I enter number of fish caught fly
    And  I enter number of fish caught spinner
    And  I enter number of fish caught bait
    And  I enter number of fish released
    And  I am on the summary page and I save and exit the service
    And  I am on the draft saved page and I click the return to licence page

#  Scenario: First login - delete
#    When I am on the delete river page and I click delete
