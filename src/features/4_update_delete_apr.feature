Feature: Login to Rod Catch Returns update and delete
  Scenario: setup
    Given I am an external user
    And   I am on the licence entry page
    Then  I submit the licence and postcode for test user 1
    And   If it is the extended submission period I select the previous period on the season page
  
  Scenario: Update activity
    Given I did fish during the season
    And  I am on the summary page and select the add river link
    And  I fished the river Frome for 15 days with mandatory release and 1 other days    
    And  I confirm my activity details and continue
    And  I am on the summary page and select the add river link
    And  I fished the river Banwy for 10 days with mandatory release and 2 other days    
    And  I confirm my activity details and continue
    And  I expect the summary page to show the following activities
      | River    | DaysFishedWithMandatoryRelease | DaysFishedOther |
      | Frome    | 15                             | 1               |
      | Banwy    | 10                             | 2               |
    When I click change on the activity for the river Banwy
    And  I fished the river Banwy for 4 days with mandatory release and 3 other days
    And  I confirm my activity details and continue
    And  I expect the summary page to show the following activities
      | River    | DaysFishedWithMandatoryRelease | DaysFishedOther |
      | Frome    | 15                             | 1               |
      | Banwy    | 4                              | 3               |

  Scenario: Delete activity
    When I click delete on the activity for the river Banwy
    And  I am on the delete activities page and I click delete
    Then I expect the summary page to show the following activities
      | River    | DaysFishedWithMandatoryRelease | DaysFishedOther |
      | Frome    | 15                             | 1               |
  
  Scenario: Update small catch
    And  I am on the summary page and select the small catch link
    And  In January on the river Frome, I caught 5 by fly, 4 by spinner, 2 by bait and released 11
    And  I save the small catch and add another
    And  In February on the river Frome, I caught 1 by fly, 1 by spinner, 0 by bait and released 1
    And  I save the small catch and return to the summary
    Then I expect the summary page to show the following small catches
      | Month    | River | Fly | Spinner | Bait | Released |
      | January  | Frome | 5   | 4       | 2    | 11       |
      | February | Frome | 1   | 1       | 0    | 1        |
    When I click change on the small catch with the month as February and the river as Frome
    And  In February on the river Frome, I caught 3 by fly, 2 by spinner, 1 by bait and released 2
    And  I save the small catch and return to the summary
    Then I expect the summary page to show the following small catches
      | Month    | River | Fly | Spinner | Bait | Released |
      | January  | Frome | 5   | 4       | 2    | 11       |
      | February | Frome | 3   | 2       | 1    | 2        |
  
  Scenario: Delete elete small catch
    When I click delete on the small catch with the month as February and the river as Frome
    And  I am on the delete small catches page and I click delete
    Then I expect the summary page to show the following small catches
      | Month   | River | Fly | Spinner | Bait | Released |
      | January | Frome | 5   | 4       | 2    | 11       |