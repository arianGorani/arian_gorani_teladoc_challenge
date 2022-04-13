package step_definitions;

import DriverWrapper.Web;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;
import page_objects.homepagePage;


public class homepageSteps {

    homepagePage hp = new homepagePage();
    int tableBeforeAddedUser;
    int tableBeforeDeletedUser;

    @Given("^I open application in (.*) (.*) Browser$")
    public void openApplication(String env, String browser){
        hp.openApp(env, browser);

    }

    @When("^I click Add User Button$")
    public void iClickAddUserButton() {
        tableBeforeAddedUser = hp.allRowsOfTable().size();
        hp.clickAddUser();
    }

    @And("^I type First name (.*) and Last name (.*)$")
    public void iTypeFirstNameAndLastName(String first, String last) {
        hp.typeFirstName(first);
        hp.typeLastName(last);
    }

    @And("^I type User Name (.*) and Password (.*)$")
    public void iTypeUserNameAndPassword(String username, String password) {
        hp.typeUserName(username);
        hp.typePassword(password);
    }


    @And("^I choose as Customer Company AAA$")
    public void iChooseAsCustomerCompanyAAA() {
        hp.clickCompanyAAAButton();
    }

    @And("^I select role (.*)$")
    public void iSelectRoleAdmin(String input) {
        hp.selectAdminFromDropDown(input);
    }

    @And("^I type E-mail (.*)$")
    public void iTypeEMail(String email) {
        hp.typeEmail(email);
    }

    @And("^I type Cell Phone (.*)$")
    public void iTypeCellPhone(String phone) {
        hp.typeCellPhone(phone);
    }

    @And("^I click Save Button$")
    public void iClickSaveButton() {
        hp.clickSaveButton();
    }

    @Then("^I verify User has added on table$")
    public void iVerifyUserHasAddedOnTable() {
        int tableAfterAddedUser = hp.allRowsOfTable().size();

        Assert.assertNotEquals(tableBeforeAddedUser, tableAfterAddedUser, "Table is the same before and after added user");
        Web.closePage();
    }

    @When("^I search for User Name (.*) and delete it$")
    public void deleteUserName(String user) {
        tableBeforeDeletedUser = hp.allRowsOfTable().size();
        hp.deleteUser(user);
        hp.setPressOkButton();
    }

    @Then("^I verify User has been deleted$")
    public void iVerifyUserHasBeenDeleted() {
       int tableAfterDeletedUser = hp.allRowsOfTable().size();

       Assert.assertNotEquals(tableBeforeDeletedUser,tableAfterDeletedUser,"Table is the same before and after deleted user");

       Web.closePage();
    }
}
