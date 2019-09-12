Feature: Login to Rod Catch returns update, delete, first time to the service and submit

  Background:
    Given I am an external user
    And   I am on the licence entry page
    Then  I submit the licence and postcode for test user 1
    And   If it is the extended submission period I select the previous period on the season page


  Scenario: Test Errors
    Given I did fish during the season
#  Scenario 1: Test Errors on Rivers page -  Error messages relate to the error id on page
    And  I am on the summary page and select the add river link
    And  I confirm my activity details and continue; url should not change
    Then I expect the activities page to show the following errors
      | ErrorId              | ErrorMessage                                      |
      | #river               | You have not selected a river                     |
      | #daysFishedOther     | The number of days fished must be greater than 0  |
    *    I fished the river Ystrad for 2 days with mandatory release and 0 other days
    And  I confirm my activity details and continue

    And  I am on the summary page and select the add river link
    *    I fished the river Frome for 0 days with mandatory release and 30 other days
    And  I confirm my activity details and continue

#  Scenario 2: Test Errors on Large Catch page -  Error messages relate to the error id on page
    And  I am on the summary page and select the large catch link
    And  I save the large catch and return to the summary; url should not change
    Then I expect the large catch page to show the following errors
      | ErrorId    | ErrorMessage                                          |
      | #river     | You have not selected a river                         |
      | #day       | You have not entered a valid date                     |
      | #type-1    | You have not selected the type of fish                |
      | #system-1  | You have not selected pounds and ounces or kilograms  |
      | #method-1  | You have not selected a method                        |
      | #released-1| You have not told us whether you released this fish   |
    And I am on the large catch page and I click cancel

#  Scenario 3: Test Errors on Large Catch page - Error messages relate to the error id on page
    And  I am on the summary page and select the small catch link
    And  I save the small catch and return to the summary; url should not change
    Then I expect the small catch page to show the following errors
    | ErrorId  | ErrorMessage                                   |
    | #river   | You have not selected a river                  |
    | #month   | You have not entered a valid month             |
    | #fly     | You have not entered the number of fish caught |
    And I am on the small catch page and I click cancel

  # Exit the service
    And  I am on the summary page and I save and exit the service
    And  I am on the draft saved page
