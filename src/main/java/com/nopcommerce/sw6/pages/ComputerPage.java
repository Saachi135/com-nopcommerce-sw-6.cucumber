package com.nopcommerce.sw6.pages;

import com.nopcommerce.sw6.utility.Utility;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.testng.Reporter;

public class ComputerPage extends Utility {

    @CacheLookup
    @FindBy(xpath = "//div[@class='block block-category-navigation']/descendant::a[2]")
    WebElement desktops;

    public void clickOnDesktop() {
        clickOnElement(desktops);
    }

}
