package page_objects;

import DriverWrapper.Web;
import Framework.WebCommands;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import java.util.List;

public class homepagePage extends WebCommands {

    Web web = new Web();

    //      LOCATORS

    By allRowsElements = By.xpath("//tbody//tr");
    By addUserButton = By.xpath("//button[contains(text(), 'Add User')]");
    By firstNameField = By.xpath("//input[@name='FirstName']");
    By lastNameField = By.xpath("//input[@name='LastName']");
    By userNameField = By.xpath("//input[@name='UserName']");
    By passwordField = By.xpath("//input[@name='Password']");
    By companyAAAButton = By.xpath("//input[starts-with(@type, 'radio') and @value='15']");
    By selectAdminFromDropDown = By.xpath("//select");
    By emailField = By.xpath("//input[@name='Email']");
    By cellPhoneField = By.xpath("//input[@name='Mobilephone']");
    By clickSaveButton = By.xpath("//button[@ng-click='save(user)']");
    String deleteUserFormat = "(//td[contains(text(),'%s')]/following::button)[2]";
    By pressOkButton = By.xpath("//button[contains(text(),'OK')]");



    //      METHODS

    public void openApp(String env,String browser){
        web.openUrl(env, browser);
    }

    public List<WebElement> allRowsOfTable(){
        return getElements(allRowsElements);
    }

    public void clickAddUser(){
        clickThis(addUserButton);
    }

    public void typeFirstName(String name){
        type(firstNameField, name);
    }

    public void typeLastName(String last) {
        type(lastNameField, last);
    }

    public void typeUserName(String username) {
        type(userNameField, username);
    }

    public void typePassword(String password) {
        type(passwordField, password);
    }

    public void clickCompanyAAAButton(){
        clickThis(companyAAAButton);
    }

    public void selectAdminFromDropDown(String input){
        selectFromDropdown(selectAdminFromDropDown, input);
    }

    public void typeEmail(String email){
        type(emailField, email);
    }

    public void typeCellPhone(String phone){
        type(cellPhoneField, phone);
    }

    public void clickSaveButton(){
        clickThis(clickSaveButton);
    }

    public void deleteUser(String user){
        clickThis(By.xpath(String.format(deleteUserFormat, user)));
    }

    public void setPressOkButton(){
        clickThis(pressOkButton);
    }

}
