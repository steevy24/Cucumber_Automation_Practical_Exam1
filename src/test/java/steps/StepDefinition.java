package steps;

import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import page.BasePage;
import page.TestPage;

public class StepDefinition extends BasePage {

	TestPage testpage;

	@Given("^\"([^\"]*)\" button exists$")
	public void button_exists(String arg1) throws Throwable {
		init();
		Thread.sleep(3000);
	}

	@When("^I click on the button$")
	public void i_click_on_the_button() throws Throwable {
		testpage = PageFactory.initElements(driver, TestPage.class);
		testpage.clickOnSkyBlue();
		Thread.sleep(3000);
	}

	@Then("^the background color will change to sky blue$")
	public void the_background_color_will_change_to_sky_blue() throws Throwable {
		testpage.verifyDashboardHeader();
	}
	
	
}
