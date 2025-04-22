Feature: Administrative users can manage paper based returns

  Scenario: setup
    Given I am an administrative user
    And   I am on the admin login page
    And   I submit the username and password for admin user 1
  
  Scenario: Admin clicks the Age weight key page
    When  I click on the Age weight key link 
    Then  I should see the Age weight key page
  
  Scenario: Upload file with duplicate headers
    When  I select Dee as the gate for the age weight key
    And   I enter the year as the current year for the age weight key
    #And   I upload the file age-weight-key (duplicate header).csv to the age weight key