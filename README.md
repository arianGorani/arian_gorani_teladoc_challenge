# arian_gorani_teladoc_challenge

Overview of Framework
* QA Framework is a Maven Project designed pattern using Page Object Model.
* I use open-source framework for automation Selenium.
* I write testcases using Cucumber framework BDD, cucumber framework is designed with this approach, we have several packages such as our page classes, Step Definitions     and Feature file.
* For assert validation I am using TestNG framework TDD.
* In Feature Files, I write the steps such as given, when, then.
* I am using Gherkin language which makes it easier for non-tech people to read it.
* I implement code with java programming language, which is object-oriented programming language.
* And I use Pretty report which is generic cucumber report.

<br>
To run testcases, first need to clone on local machine, then from command line from the same directory when project is we can use command MVN CLEAN TEST to start running all test scenarios, another way to run test scenarios is from IDE (I am using IntelliJ Idea) we can go to TestRunner class and we can run all test scenarios, or the last way we can go direct to features from IDE and with right click we can press run.

This project has feature.
* Cross Browsers
* Report (Cucumber Generic)
* Sauce Lab Platform
    (If you change variable <local> to <saucelab> the test scenario will run in Sauce Lab instead on local machine,
     but you have to provide <Driver Creation> link of your Sauce Lab account)
