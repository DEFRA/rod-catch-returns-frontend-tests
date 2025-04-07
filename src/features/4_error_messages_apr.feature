Feature: Error messages for anglers

  Background:
    Given I am an external user

  Scenario: Scenario 1 - An error message is shown if an invalid licence and postcode is entered
    Given I am on the licence entry page
    When  I submit the licence ABC123 and postcode AA11 1AA
    Then  I expect the error summary to show the following errors
      | There is a problem                                          |
      | You have not entered a correct licence number and postcode  |
    And   I am redirected to /licence-auth-fail

  Scenario: Scenario 2 - An error message is shown on the activities page
    And   I am on the licence entry page
    And   I submit the licence and postcode for test user 1
    And   If it is the extended submission period I select the previous period on the season page
    And   I did fish during the season
    And   I am on the summary page and select the add river link

    # Scenario 2.1 - days fished with mandatory release too big
    And   I fished the river Ystrad for 900 days with mandatory release and 2 other days
    And   I confirm my activity details and continue
    Then  I expect the error summary to show the following errors
      | There is a problem                                                                |
      | You have not entered a valid number of days fished between 1 January and 16 June  |
    
    # Scenario 2.3 - days fished with mandatory release and days other are 0
    And   I fished the river Ystrad for 0 days with mandatory release and 0 other days
    And   I confirm my activity details and continue
    Then  I expect the error summary to show the following errors
      | There is a problem                                                                |
      | The number of days fished must be greater than 0                                 |
    
    # Scenario 2.4 - days fished other too big
    And   I fished the river Ystrad for 10 days with mandatory release and 900 other days
    And   I confirm my activity details and continue
    Then  I expect the error summary to show the following errors
      | There is a problem                                                                |
      | You have not entered a valid number of days fished between 17 June and 31 Dec     |
