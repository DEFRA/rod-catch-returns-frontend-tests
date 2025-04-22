Feature: Administrative users can manage paper based returns

  Scenario: setup
    Given I am an administrative user
    And   I am on the admin login page
    And   I submit the username and password for admin user 1
  
  Scenario: Admin clicks the Age weight key page
    When I click on the Age weight key link 
    Then I should see the Age weight key page