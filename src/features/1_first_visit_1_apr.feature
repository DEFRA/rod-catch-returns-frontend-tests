Feature: Login to Rod Catch returns update, delete, first time to the service and submit

  Background:
    Given I am on the login page
    And   I submit the username and password for test user 1
#    And I am on the which season page
#    And I select season 1 and I click continue

  Scenario: First login - Save
    When I am on the did you fish page
    And  I select yes and I click continue

    And  I am on the summary page and select the add river link
    *    I fished the river Ystrad for 2 days with mandatory release and 0 other days
    And  I confirm my activity details and continue

    And  I am on the summary page and select the add river link
    *    I fished the river Frome for 0 days with mandatory release and 30 other days
    And  I confirm my activity details and continue

    And  I am on the summary page and select the large catch link
    *    I caught a fish weighing 3.5kg
    *    The catch date was 5 of January
    *    The catch river is Ystrad
    *    The catch species is Salmon
    *    The catch method is Fly
    *    The catch was released
    And  I save the large catch and return to the summary

    And  I am on the summary page and select the small catch link
    *    In January on the river Ystrad, I caught 5 by fly, 4 by spinner, 2 by bait and released 11
    And  I save the small catch and add another
    *    In February on the river Ystrad, I caught 8 by fly, 0 by spinner, 0 by bait and released 8
    And  I save the small catch and return to the summary
    And  I am on the summary page and select the small catch link
    *    In December on the river Frome, I caught 30 by fly, 0 by spinner, 0 by bait and released 0
    And  I save the small catch and return to the summary

    And I expect the summary page to show the following activities
      | River  | DaysFishedWithMandatoryRelease | DaysFishedOther | FishCaught |
      | Frome  | 0                              | 30              | 30         |
      | Ystrad | 2                              | 0               | 20         |

    And  I am on the summary page and I save and exit the service
    And  I am on the draft saved page

#  Scenario: First login - delete
#    When I am on the delete river page and I click delete
