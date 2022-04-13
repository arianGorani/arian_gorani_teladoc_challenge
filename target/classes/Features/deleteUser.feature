@Regression
Feature: Delete user User Name: novak and validate user has been deleted

# If you change variable <local> to <saucelab> the test scenario will run in Sauce Lab instead on local machine,
# but you have to provide <Driver Creation> link of your Sauce Lab account


  Scenario Outline: Delete user User Name: novak and validate user has been deleted
    Given I open application in local <Browser> Browser
    When I search for User Name novak and delete it
    Then I verify User has been deleted



    Examples:
      | Browser|
      | Chrome |
      | Firefox|

