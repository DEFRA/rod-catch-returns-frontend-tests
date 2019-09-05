Feature: Administrative users can manage paper based returns

  Background:
    Given I am an administrative user
    And   I am on the admin login page
    Then  I submit the username and password for admin user 1
    When  I am on the licence entry page
    Then  I submit the licence and postcode for test user 1
    And   If it is the extended submission period I select the previous period on the season page

  Scenario: Enter a new paper return
    Given I did fish during the season

    And  I am on the summary page and select the add river link
    *    I fished the river Ystrad for 2 days with mandatory release and 0 other days
    And  I confirm my activity details and continue

    And  I am on the summary page and select the add river link
    *    I fished the river Frome for 0 days with mandatory release and 30 other days
    And  I confirm my activity details and continue

    And  I am on the summary page and select the large catch link
    *    I caught a fish weighing 3.5kg
    *    I select a valid catch date
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
    *    In March on the river Frome, I caught 30 by fly, 0 by spinner, 0 by bait and released 0
    And  I save the small catch and return to the summary

    And I expect the summary page to show the following activities
      | River  | DaysFishedWithMandatoryRelease | DaysFishedOther |
      | Frome  | 0                              | 30              |
      | Ystrad | 2                              | 0               |

    And  I am on the summary page and I click review catch return
    And  I am on the review page and I click submit
    And  I am on the confirmation page
    And  I send an API request to check contact status
