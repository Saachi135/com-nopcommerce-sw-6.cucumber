package com.nopcommerce.sw6.steps;

import com.nopcommerce.sw6.pages.*;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ComputerStep {


    @Given("^: I am on NopCommerce Web HomePage$")
    public void iAmOnNopCommerceWebHomePage() {

    }

    @Given("^Click on Computer Menu$")
    public void clickOnComputerMenu() {
        new HomePage().selectMenu("Computers ");
    }

    @And("^Click on Desktop$")
    public void clickOnDesktop() {
        new ComputerPage().clickOnDesktop();
    }

    @When("^Select Sort By position \"([^\"]*)\"$")
    public void selectSortByPosition(String arg0) {
        new DesktopPage().selectZToAFromSortByDropdown("Name: Z to A");

    }

    @Then("^Verify the Product will arrange in Descending order\\.$")
    public void verifyTheProductWillArrangeInDescendingOrder() {
        new DesktopPage().verifyProductAreInDescendingOrder();
    }

    @And("^I Select Sort By position \"([^\"]*)\"$")
    public void iSelectSortByPosition(String arg0)  {
        new DesktopPage().selectZToAFromSortByDropdown("Name: A to Z");

    }

    @And("^I Click on \"([^\"]*)\"$")
    public void iClickOn(String arg0) throws InterruptedException {
        new DesktopPage().clickOnAddToCart();

    }

    @Then("^I Verify the Text \"([^\"]*)\"$")
    public void iVerifyTheText(String arg0)  {
        new BuildYourOwnComputerPage().verifyBuildYourOwnComputerText("Build your own computer");
    }

    @And("^I Select \"([^\"]*)\" using Select class$")
    public void iSelectUsingSelectClass()  {
        new BuildYourOwnComputerPage().selectProcessor("2.2 GHz Intel Pentium Dual-Core E2200");


    }

    @And("^I Select \"([^\"]*)\" using Select class\\.$")
    public void iSelectUsingSelectClass(String arg0)  {
        new BuildYourOwnComputerPage().selectRAM("8GB [+$60.00]");

    }

    @And("^I Select HDD radio \"([^\"]*)\"$")
    public void iSelectHDDRadio(String arg0)  {
        new BuildYourOwnComputerPage().selectHDD("400 GB [+$100.00]");

    }

    @And("^I Select OS radio \"([^\"]*)\"$")
    public void iSelectOSRadio(String arg0)  {
        new BuildYourOwnComputerPage().selectOS("Vista Premium [+$60.00]");

    }

    @Then("^I Check Two Check boxes \"([^\"]*)\" and \"([^\"]*)\"$")
    public void iCheckTwoCheckBoxesAnd(String arg0, String arg1)  {
        new BuildYourOwnComputerPage().selectSoftware("Total Commander [+$5.00]");

    }

    @Then("^I Verify the price \"([^\"]*)\"$")
    public void iVerifyThePrice(String arg0)  {
        new BuildYourOwnComputerPage().verifyPrice("$1,475.00");
    }

    @And("^I Click on \"([^\"]*)\" Button\\.$")
    public void iClickOnButton(String arg0)  {
        new BuildYourOwnComputerPage().clickOnAddToCart();

    }

    @Then("^I Verify the Message \"([^\"]*)\" on Top green Bar$")
    public void iVerifyTheMessageOnTopGreenBar(String arg0)  {
        new BuildYourOwnComputerPage().verifyAddToCartMessage("The product has been added to your shopping cart");
    }

    @And("^I After that close the bar clicking on the cross button\\.$")
    public void iAfterThatCloseTheBarClickingOnTheCrossButton() {
        new BuildYourOwnComputerPage().clickOnCrossButton();
    }

    @Then("^I MouseHover on \"([^\"]*)\" and Click on \"([^\"]*)\" button\\.$")
    public void iMouseHoverOnAndClickOnButton(String arg0, String arg1)  {
        new BuildYourOwnComputerPage().mouseHoverOnShoppingCart();
    }

    @Then("^I Verify the message \"([^\"]*)\"$")
    public void iVerifyTheMessage(String arg0)  {
        new ShoppingCartPage().verifyShoppingCartTitle("Shopping cart");

    }

    @And("^I Change the Qty to \"([^\"]*)\" and Click on \"([^\"]*)\"$")
    public void iChangeTheQtyToAndClickOn()  {
        new ShoppingCartPage().changeQuantityAndUpdateCart(String.valueOf(2));
    }

    @Then("^I Verify the Total\"([^\"]*)\"$")
    public void iVerifyTheTotal(String arg0)  {
        new ShoppingCartPage().verifyTotal("$2,950.00");
    }

    @And("^I click on checkbox “I agree with the terms of service”$")
    public void iClickOnCheckboxIAgreeWithTheTermsOfService() {
        new ShoppingCartPage().clickOnTermsOfServiceCheckbox();
    }

    @And("^I Click on “CHECKOUT”$")
    public void iClickOnCHECKOUT() {
        new ShoppingCartPage().clickOnCheckOutBtn();
    }

    @Then("^I Verify the Text “Welcome, Please Sign In!”$")
    public void iVerifyTheTextWelcomePleaseSignIn() {
        new SignInPage().verifyWelcomeText("Welcome, Please Sign In!");
    }

    @And("^I Click on “CHECKOUT AS GUEST” Tab$")
    public void iClickOnCHECKOUTASGUESTTab() {
        new SignInPage().clickOnCheckoutAsGuestBtn();
    }

    @And("^I Fill the all mandatory field$")
    public void iFillTheAllMandatoryField() {
        new SignInPage().clickOnCheckoutAsGuestBtn();
    }



    @Then("^I Verify “Payment Method” is “Credit Card”$")
    public void iVerifyPaymentMethodIsCreditCard() {
    new CheckOurPage().verifyPaymentMethod("Credit Card");
    }

    @Then("^I Verify “Shipping Method” is “Next Day Air”$")
    public void iVerifyShippingMethodIsNextDayAir() {
    new CheckOurPage().verifyShippingMethod("Next Day Air");
    }

    @Then("^I Verify Total is “\\$(\\d+),(\\d+)\\.(\\d+)”$")
    public void iVerifyTotalIs$(int arg0) {
        new CheckOurPage().verifyTotal("$2,950.00");
    }

    @And("^I Click on “CONFIRM”$")
    public void iClickOnCONFIRM() {
    new CheckOurPage().verifyThankYou("Thank you");
    }

    @Then("^I Verify the Text “Thank You”$")
    public void iVerifyTheTextThankYou() {
    new CheckOurPage().verifyOrderConfirmation("Your order has been successfully processed!");
    }


    @Then("^I Verify the message “Your order has been successfully processed!”$")
    public void iVerifyTheMessageYourOrderHasBeenSuccessfullyProcessed() {
        new CheckOurPage().clickOnContinue();
    }

    @Then("^I Verify the text “Welcome to our store”$")
    public void iVerifyTheTextWelcomeToOurStore() {
        new HomePage().verifyTheTextWelcomeToOurStore("Welcome to our store");
    }
}
