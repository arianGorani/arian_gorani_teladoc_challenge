package DriverWrapper;

import org.junit.After;
import org.junit.Before;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import java.net.MalformedURLException;
import java.net.URL;


public class Web {
    private static WebDriver driver = null;


    //@Before
    public void openUrl(String env,String browser) {

        String url = "https://www.way2automation.com/angularjs-protractor/webtables/";
        if(env.equalsIgnoreCase("local")){
            switch (browser.toLowerCase()) {
                case "chrome":
                    System.setProperty("webdriver.chrome.driver", "./drivers/chromedriver.exe");
                    driver = new ChromeDriver();
                    driver.get(url);
                    driver.manage().window().maximize();
                    break;
                case "firefox":
                    System.setProperty("webdriver.gecko.driver", "./drivers/GeckoDriver.exe");
                    driver = new FirefoxDriver();
                    driver.get(url);
                    driver.manage().window().maximize();
                    break;
                default:
                    System.out.println("Invalid Browser");
            }
        }else if (env.equalsIgnoreCase("saucelab")){
            // Driver Creation
            String sauceUrl = "enter your Driver Creation of your Sauce Lab account";
            switch (browser.toLowerCase()) {
                case "chrome":
                    DesiredCapabilities capsChrome = DesiredCapabilities.chrome();
                    capsChrome.setCapability("platform","windows 10");
                    capsChrome.setCapability("version", "latest");

                    try {
                        driver = new RemoteWebDriver(new URL(sauceUrl), capsChrome);
                    } catch (MalformedURLException e) {
                        e.printStackTrace();
                    }

                    driver.get(url);
                    break;
                case "firefox":
                    DesiredCapabilities capsFirefox = DesiredCapabilities.firefox();
                    capsFirefox.setCapability("platform","windows 10");
                    capsFirefox.setCapability("version", "latest");

                    try {
                        driver = new RemoteWebDriver(new URL(sauceUrl), capsFirefox);
                    } catch (MalformedURLException e) {
                        e.printStackTrace();
                    }

                    driver.get(url);
                    break;

                default:
                    System.out.println("Invalid Browser");

            }
        }

    }

    public static WebDriver getDriver() {
        return driver;
    }

    //@After
    public static void closePage() {
        driver.close();
    }


}
