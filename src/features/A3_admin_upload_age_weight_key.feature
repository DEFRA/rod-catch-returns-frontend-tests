Feature: Administrative users can manage paper based returns

  Scenario: setup
    Given I am an administrative user
    And   I am on the admin login page
    And   I submit the username and password for admin user 1
  
  Scenario: Admin clicks the Age weight key page
    When  I click on the Age weight key link 
    Then  I should see the Age weight key page
  
  Scenario: Successful Upload
    When  I click on the Age weight key link 
    And   I select Dee as the gate for the age weight key
    And   I enter the year as the current year for the age weight key
    And   I upload the file age-weight-key (valid).csv to the age weight key    
    And   I click upload
    And   If I am asked to replace the current age weight key I click yes
    Then  I am on the age weight key ok page
  
  Scenario: Upload file with duplicate headers
    When  I click on the Age weight key link 
    And   I select Dee as the gate for the age weight key
    And   I enter the year as the current year for the age weight key
    And   I upload the file age-weight-key (duplicate header).csv to the age weight key
    And   I click upload
    Then  I expect the error summary to show the following errors
      | There is a problem                                 |
      | The selected file must match the required template |
  
  Scenario: Upload empty file
    When  I click on the Age weight key link 
    And   I select Tamar as the gate for the age weight key
    And   I enter the year as the current year for the age weight key
    And   I upload the file age-weight-key (empty).csv to the age weight key
    And   I click upload
    Then  I expect the error summary to show the following errors
      | There is a problem         |
      | The selected file is empty |
  
  Scenario: Upload infected file
    When  I click on the Age weight key link 
    And   I select Dee as the gate for the age weight key
    And   I enter the year as the current year for the age weight key
    And   I upload the file eicar.com.csv to the age weight key
    And   I click upload
    # If the antivirus is not running a generic error message is shown
    Then  I expect the error summary to show the following errors
      | There is a problem                                      |
      | The selected file contains a virus, upload another file |
