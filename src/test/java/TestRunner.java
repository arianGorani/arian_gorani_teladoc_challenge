import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(

        //This creates cucumber reports
        plugin = {"pretty", "html:Reports/Default/"},

        // Path to the feature files
        features = {"src/main/resources/Features"},

        // Specify the step definition package name
        glue = {"step_definitions","DriverWrapper"},

        // Specify what tags should run
        tags = {"@Regression"}


)
public class TestRunner {
}
