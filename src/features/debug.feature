Feature: Debugging

   Scenario: Access GOV.UK
    When I go to GOV.UK
    And I am on GOV.UK
    Then It successfully loads GOV.UK

  Scenario: Access prod
    When I go to RCR prod
    And I am on RCR prod
    Then It successfully loads RCR prod

  Scenario: Access dev external
    When I go to RCR dev
    And I am on RCR dev
    Then It successfully loads RCR dev
