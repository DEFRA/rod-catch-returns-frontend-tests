Feature: Administrative users can check the license number in the records page

  Background:
    Given I am an administrative user
    And   I am on the admin login page
    Then  I submit the username and password for admin user 1

   Scenario: Admin clicks the records page
    When I click on the records link 
    Then I should see the license number records page

   Scenario: Admin does not see records page when logged out
    When I click on Sign out
    Then I should not see the license number records page

