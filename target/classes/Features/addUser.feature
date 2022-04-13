@Regression
Feature: Add a user and validate the user has been added to the table

# If you change variable <local> to <saucelab> the test scenario will run in Sauce Lab instead on local machine,
# but you have to provide <Driver Creation> link of your Sauce Lab account


  Scenario Outline: Add a user and validate the user has been added to the table
    Given I open application in local <Browser> Browser
    When I click Add User Button
    And I type First name Arian and Last name Gorani
    And I type User Name arian.gorani and Password arian2022
    And I choose as Customer Company AAA
    And I select role Admin
    And I type E-mail arian.gorani@test.com
    And I type Cell Phone +1999999
    And I click Save Button
    Then I verify User has added on table


    Examples:
      | Browser|
      | Chrome |
      | Firefox|

