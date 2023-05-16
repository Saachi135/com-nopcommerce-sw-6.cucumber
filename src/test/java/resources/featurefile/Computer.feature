@regression
Feature: Computer Test

  Background:
    Given : I am on NopCommerce Web HomePage
    And    Click on Computer Menu
    And    Click on Desktop

@smoke
  Scenario: Verify Product Arrange In AlphaBatical Order
    Given   Select Sort By position "Name: Z to A"
    Then    Verify the Product will arrange in Descending order.
@sanity
  Scenario: Verify Product Added To Shopping Cart SuccessFully


    And  I Select Sort By position "Name: A to Z"
    And  I Click on "Add To Cart"
    Then I Verify the Text "Build your own computer"
    And  I Select "<Processor>" using Select class
    And  I Select "8GB [+$60.00]" using Select class.
    And  I Select HDD radio "400 GB [+$100.00]"
    And  I Select OS radio "Vista Premium [+$60.00]"
    Then I Check Two Check boxes "Microsoft Office [+$50.00]" and "Total Commander [+$5.00]"
    Then I Verify the price "$1,475.00"
    And  I Click on "ADD TO CARD" Button.
    Then I Verify the Message "The product has been added to your shopping cart" on Top green Bar
    And  I After that close the bar clicking on the cross button.
    Then I MouseHover on "Shopping cart" and Click on "GO TO CART" button.
    Then I Verify the message "Shopping cart"
    And  I Change the Qty to "2" and Click on "Update shopping cart"
    Then I Verify the Total"$2,950.00"
    And  I click on checkbox “I agree with the terms of service”
    And  I Click on “CHECKOUT”
    Then I Verify the Text “Welcome, Please Sign In!”
    And  I Click on “CHECKOUT AS GUEST” Tab
    And  I Fill the all mandatory field
    And  I Click on “CONTINUE”
    And  I Click on Radio Button “Next Day Air($0.00)”
    And  I Click on “CONTINUE”
    And  I Select Radio Button “Credit Card”
    And  I Select “Master card” From Select credit card dropdown
    And  I Fill all the details
    And  I Click on “CONTINUE”
    Then I Verify “Payment Method” is “Credit Card”
    Then I Verify “Shipping Method” is “Next Day Air”
    Then I Verify Total is “$2,950.00”
    And  I Click on “CONFIRM”
    Then I Verify the Text “Thank You”
    Then I Verify the message “Your order has been successfully processed!”
    And  I Click on “CONTINUE”
    Then I Verify the text “Welcome to our store”


