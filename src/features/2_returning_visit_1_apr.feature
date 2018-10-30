Feature: Login to Rod Catch returns update and return to service, submit

  Background:
    Given I am on the login page
    And I submit the username and password for test user 1
#    And I am on the which season page
#    And I select season 1 and I click continue


  Scenario: First login - Save
    When I am on the did you fish page
    And  I select yes and I click continue
    And  I am on the summary page and select the add river link

    And I fished the river Frome
    And I fished 15 days with mandatory release and 1 other days
    And I confirm my activity details and continue

    And  I am on the summary page and select the large catch link
    And  I caught a fish weighing 1 lbs 2 oz
    And  The catch date was 1 of December
    And  The catch river is Frome
    And  The catch species is Sea Trout
    And  The catch method is Fly
    And  The catch wasn't released
    And  I am on the summary page
    And  I am on the summary page and I save and exit the service
    And  I am on the draft saved page and I click the return to licence page


  Scenario: Return login - Submit
    When I am on the summary page and select the large catch link
    And  The catch date was 25 of December
    And  I caught a fish weighing 3 lbs 5 oz
    And  The catch species is Salmon
    And  The catch method is Fly
    And  The catch wasn't released
    And  I am on the summary page and I click review catch return


  Scenario: First login - delete
    When I am on the delete river page and I click delete
