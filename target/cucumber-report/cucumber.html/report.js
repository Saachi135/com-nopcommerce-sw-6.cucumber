$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Computer.feature");
formatter.feature({
  "line": 2,
  "name": "Computer Test",
  "description": "",
  "id": "computer-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 16286036599,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: Could not start a new session. Response code 500. Message: session not created\nfrom no such execution context: loader has changed while resolving nodes\n  (Session info: chrome\u003d113.0.5672.94) \nHost info: host: \u0027LENEVO-PC\u0027, ip: \u0027192.168.0.207\u0027\nBuild info: version: \u00274.9.0\u0027, revision: \u0027d7057100a6\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [null, newSession {capabilities\u003d[Capabilities {browserName: chrome, goog:chromeOptions: {args: [--remote-allow-origins\u003d*], extensions: []}}]}]\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:136)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:94)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:68)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:165)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:229)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:157)\r\n\tat org.openqa.selenium.chromium.ChromiumDriver.\u003cinit\u003e(ChromiumDriver.java:101)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:88)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:84)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:52)\r\n\tat com.nopcommerce.sw6.browserfactory.ManageBrowser.selectBrowser(ManageBrowser.java:24)\r\n\tat com.nopcommerce.sw6.Hooks.steUp(Hooks.java:15)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": ": I am on NopCommerce Web HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Click on Computer Menu",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on Desktop",
  "keyword": "And "
});
formatter.match({
  "location": "ComputerStep.iAmOnNopCommerceWebHomePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerStep.clickOnComputerMenu()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerStep.clickOnDesktop()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 10,
  "name": "Verify Product Arrange In AlphaBatical Order",
  "description": "",
  "id": "computer-test;verify-product-arrange-in-alphabatical-order",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Select Sort By position \"Name: Z to A\"",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "Verify the Product will arrange in Descending order.",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Name: Z to A",
      "offset": 25
    }
  ],
  "location": "ComputerStep.selectSortByPosition(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerStep.verifyTheProductWillArrangeInDescendingOrder()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 46326100,
  "error_message": "java.lang.NullPointerException\r\n\tat com.nopcommerce.sw6.utility.Utility.getScreenshot(Utility.java:346)\r\n\tat com.nopcommerce.sw6.Hooks.tearDown(Hooks.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 10289097500,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": ": I am on NopCommerce Web HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Click on Computer Menu",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on Desktop",
  "keyword": "And "
});
formatter.match({
  "location": "ComputerStep.iAmOnNopCommerceWebHomePage()"
});
formatter.result({
  "duration": 354937000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerStep.clickOnComputerMenu()"
});
formatter.result({
  "duration": 594235200,
  "status": "passed"
});
formatter.match({
  "location": "ComputerStep.clickOnDesktop()"
});
formatter.result({
  "duration": 20695187100,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Verify Product Added To Shopping Cart SuccessFully",
  "description": "",
  "id": "computer-test;verify-product-added-to-shopping-cart-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I Select Sort By position \"Name: A to Z\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I Click on \"Add To Cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I Verify the Text \"Build your own computer\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I Select \"\u003cProcessor\u003e\" using Select class",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I Select \"8GB [+$60.00]\" using Select class.",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I Select HDD radio \"400 GB [+$100.00]\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I Select OS radio \"Vista Premium [+$60.00]\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I Check Two Check boxes \"Microsoft Office [+$50.00]\" and \"Total Commander [+$5.00]\"",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I Verify the price \"$1,475.00\"",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I Click on \"ADD TO CARD\" Button.",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I Verify the Message \"The product has been added to your shopping cart\" on Top green Bar",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "I After that close the bar clicking on the cross button.",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I MouseHover on \"Shopping cart\" and Click on \"GO TO CART\" button.",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I Verify the message \"Shopping cart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I Change the Qty to \"2\" and Click on \"Update shopping cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I Verify the Total\"$2,950.00\"",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I click on checkbox “I agree with the terms of service”",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I Click on “CHECKOUT”",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I Verify the Text “Welcome, Please Sign In!”",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "I Click on “CHECKOUT AS GUEST” Tab",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I Fill the all mandatory field",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I Click on “CONTINUE”",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I Click on Radio Button “Next Day Air($0.00)”",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I Click on “CONTINUE”",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I Select Radio Button “Credit Card”",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I Select “Master card” From Select credit card dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I Fill all the details",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I Click on “CONTINUE”",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I Verify “Payment Method” is “Credit Card”",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "I Verify “Shipping Method” is “Next Day Air”",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "I Verify Total is “$2,950.00”",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "I Click on “CONFIRM”",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I Verify the Text “Thank You”",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "I Verify the message “Your order has been successfully processed!”",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "I Click on “CONTINUE”",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I Verify the text “Welcome to our store”",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Name: A to Z",
      "offset": 27
    }
  ],
  "location": "ComputerStep.iSelectSortByPosition(String)"
});
formatter.result({
  "duration": 304064200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Add To Cart",
      "offset": 12
    }
  ],
  "location": "ComputerStep.iClickOn(String)"
});
formatter.result({
  "duration": 1128998100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 19
    }
  ],
  "location": "ComputerStep.iVerifyTheText(String)"
});
formatter.result({
  "duration": 1997850601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cProcessor\u003e",
      "offset": 10
    }
  ],
  "location": "ComputerStep.iSelectUsingSelectClass()"
});
formatter.result({
  "duration": 381500,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027com.nopcommerce.sw6.steps.ComputerStep.iSelectUsingSelectClass() in file:/C:/Users/gp_14/IdeaProjects/com-nopcommerce-sw-6/target/test-classes/\u0027 with pattern [^I Select \"([^\"]*)\" using Select class$] is declared with 0 parameters. However, the gherkin step has 1 arguments [\u003cProcessor\u003e]. \nStep: And I Select \"\u003cProcessor\u003e\" using Select class\r\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "8GB [+$60.00]",
      "offset": 10
    }
  ],
  "location": "ComputerStep.iSelectUsingSelectClass(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "400 GB [+$100.00]",
      "offset": 20
    }
  ],
  "location": "ComputerStep.iSelectHDDRadio(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Premium [+$60.00]",
      "offset": 19
    }
  ],
  "location": "ComputerStep.iSelectOSRadio(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Microsoft Office [+$50.00]",
      "offset": 25
    },
    {
      "val": "Total Commander [+$5.00]",
      "offset": 58
    }
  ],
  "location": "ComputerStep.iCheckTwoCheckBoxesAnd(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "$1,475.00",
      "offset": 20
    }
  ],
  "location": "ComputerStep.iVerifyThePrice(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ADD TO CARD",
      "offset": 12
    }
  ],
  "location": "ComputerStep.iClickOnButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 22
    }
  ],
  "location": "ComputerStep.iVerifyTheMessageOnTopGreenBar(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerStep.iAfterThatCloseTheBarClickingOnTheCrossButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping cart",
      "offset": 17
    },
    {
      "val": "GO TO CART",
      "offset": 46
    }
  ],
  "location": "ComputerStep.iMouseHoverOnAndClickOnButton(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping cart",
      "offset": 22
    }
  ],
  "location": "ComputerStep.iVerifyTheMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 21
    },
    {
      "val": "Update shopping cart",
      "offset": 38
    }
  ],
  "location": "ComputerStep.iChangeTheQtyToAndClickOn()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "$2,950.00",
      "offset": 19
    }
  ],
  "location": "ComputerStep.iVerifyTheTotal(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerStep.iClickOnCheckboxIAgreeWithTheTermsOfService()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerStep.iClickOnCHECKOUT()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerStep.iVerifyTheTextWelcomePleaseSignIn()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerStep.iClickOnCHECKOUTASGUESTTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerStep.iFillTheAllMandatoryField()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "ComputerStep.iVerifyPaymentMethodIsCreditCard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerStep.iVerifyShippingMethodIsNextDayAir()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 20
    },
    {
      "val": "950",
      "offset": 22
    },
    {
      "val": "00",
      "offset": 26
    }
  ],
  "location": "ComputerStep.iVerifyTotalIs$(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerStep.iClickOnCONFIRM()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerStep.iVerifyTheTextThankYou()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerStep.iVerifyTheMessageYourOrderHasBeenSuccessfullyProcessed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "ComputerStep.iVerifyTheTextWelcomeToOurStore()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2850919201,
  "status": "passed"
});
formatter.uri("Electronics.feature");
formatter.feature({
  "line": 2,
  "name": "Electronics Test",
  "description": "\r\nAs a user I should able to navigate to Cell Phone page successfully\r\nand can verify that product added successfully and place the order successfully",
  "id": "electronics-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 8183451499,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 9,
  "name": "Verify navigate to Cell Phone successfully",
  "description": "",
  "id": "electronics-test;verify-navigate-to-cell-phone-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I mouse hover on \"Electronics \"",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I mouse hover on \"Cell phone\" phone and click",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I verify the text \"Cell phones\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Electronics ",
      "offset": 18
    }
  ],
  "location": "ElectronicsStep.iMouseHoverOn(String)"
});
formatter.result({
  "duration": 258000600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cell phone",
      "offset": 18
    }
  ],
  "location": "ElectronicsStep.iMouseHoverOnPhoneAndClick(String)"
});
formatter.result({
  "duration": 1422524101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cell phones",
      "offset": 19
    }
  ],
  "location": "ElectronicsStep.iVerifyTheText(String)"
});
formatter.result({
  "duration": 146745399,
  "status": "passed"
});
formatter.after({
  "duration": 1643179400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": ": Verify product added successfully and place order successfully",
  "description": "",
  "id": "electronics-test;:-verify-product-added-successfully-and-place-order-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I mouse hover on \"Electronics\"",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I mouse hover on \"Cell phone\" and click",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I verify the text \"Cell phones\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on list tab",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on Nokia Lumia",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I verify text nokia lumia \"Nokia Lumia 1020\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I verify  price \"$349.00\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I change quantity \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on add to cart tab",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I verify shopping cart message \"The product has been added to your shopping cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on green button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I mouse hover on shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on go to cart",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I verify shopping cart title \"Shopping cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I verify the quantity",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I verify the total \"$698.00\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on terms of service checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on checkout button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I verify text \"Register\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I input first name \"\u003cFirstname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I input last name \"\u003cLastname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I input email address",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I input Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I input confirm password \"\u003cConfirm Password\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I click on register",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I verify register text message \"Your registration completed\"",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I verify Shopping Cart title \"Shopping cart\"",
  "keyword": "And "
});
formatter.examples({
  "line": 46,
  "name": "",
  "description": "",
  "id": "electronics-test;:-verify-product-added-successfully-and-place-order-successfully;",
  "rows": [
    {
      "cells": [
        "Firstname",
        "Lastname",
        "Password",
        "Confirm Password"
      ],
      "line": 47,
      "id": "electronics-test;:-verify-product-added-successfully-and-place-order-successfully;;1"
    },
    {
      "cells": [
        "James",
        "Simon",
        "password123",
        "password123"
      ],
      "line": 48,
      "id": "electronics-test;:-verify-product-added-successfully-and-place-order-successfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7951437301,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 48,
  "name": ": Verify product added successfully and place order successfully",
  "description": "",
  "id": "electronics-test;:-verify-product-added-successfully-and-place-order-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I mouse hover on \"Electronics\"",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I mouse hover on \"Cell phone\" and click",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I verify the text \"Cell phones\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on list tab",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on Nokia Lumia",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I verify text nokia lumia \"Nokia Lumia 1020\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I verify  price \"$349.00\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I change quantity \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on add to cart tab",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I verify shopping cart message \"The product has been added to your shopping cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on green button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I mouse hover on shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on go to cart",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I verify shopping cart title \"Shopping cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I verify the quantity",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I verify the total \"$698.00\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on terms of service checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on checkout button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I verify text \"Register\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I input first name \"James\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I input last name \"Simon\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I input email address",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I input Password \"password123\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I input confirm password \"password123\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I click on register",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I verify register text message \"Your registration completed\"",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I verify Shopping Cart title \"Shopping cart\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Electronics",
      "offset": 18
    }
  ],
  "location": "ElectronicsStep.iMouseHoverOn(String)"
});
formatter.result({
  "duration": 212203401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cell phone",
      "offset": 18
    }
  ],
  "location": "ElectronicsStep.iMouseHoverOnAndClick(String)"
});
formatter.result({
  "duration": 20088198099,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[contains(text(),\u0027List\u0027)]\"}\n  (Session info: chrome\u003d113.0.5672.94)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.9.0\u0027, revision: \u0027d7057100a6\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [f8d37ddb68d6ccac4b312e45795c0381, findElement {using\u003dxpath, value\u003d//a[contains(text(),\u0027List\u0027)]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 113.0.5672.94, chrome: {chromedriverVersion: 113.0.5672.63 (0e1a4471d5ae..., userDataDir: C:\\Users\\gp_14\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:54744}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:54744/devtoo..., se:cdpVersion: 113.0.5672.94, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: f8d37ddb68d6ccac4b312e45795c0381\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:193)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat com.nopcommerce.sw6.utility.Utility.clickOnElement(Utility.java:62)\r\n\tat com.nopcommerce.sw6.pages.CellPhonesPage.clickOnListTab(CellPhonesPage.java:27)\r\n\tat com.nopcommerce.sw6.steps.ElectronicsStep.iMouseHoverOnAndClick(ElectronicsStep.java:27)\r\n\tat ✽.When I mouse hover on \"Cell phone\" and click(Electronics.feature:18)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cell phones",
      "offset": 19
    }
  ],
  "location": "ElectronicsStep.iVerifyTheText(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ElectronicsStep.iClickOnListTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ElectronicsStep.iClickOnNokiaLumia()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Nokia Lumia 1020",
      "offset": 27
    }
  ],
  "location": "ElectronicsStep.iVerifyTextNokiaLumia(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "$349.00",
      "offset": 17
    }
  ],
  "location": "ElectronicsStep.iVerifyPrice(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 19
    }
  ],
  "location": "ElectronicsStep.iChangeQuantity(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ElectronicsStep.iClickOnAddToCartTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 32
    }
  ],
  "location": "ElectronicsStep.iVerifyShoppingCartMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ElectronicsStep.iClickOnGreenButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ElectronicsStep.iMouseHoverOnShoppingCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ElectronicsStep.iClickOnGoToCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "ElectronicsStep.iVerifyTheQuantity()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "$698.00",
      "offset": 20
    }
  ],
  "location": "ElectronicsStep.iVerifyTheTotal(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ElectronicsStep.iClickOnTermsOfServiceCheckbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ElectronicsStep.iClickOnCheckoutButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ElectronicsStep.iClickOnRegisterButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Register",
      "offset": 15
    }
  ],
  "location": "ElectronicsStep.iVerifyText(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "James",
      "offset": 20
    }
  ],
  "location": "ElectronicsStep.iInputFirstName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Simon",
      "offset": 19
    }
  ],
  "location": "ElectronicsStep.iInputLastName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ElectronicsStep.iInputEmailAddress()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "password123",
      "offset": 18
    }
  ],
  "location": "ElectronicsStep.iInputPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "password123",
      "offset": 26
    }
  ],
  "location": "ElectronicsStep.iInputConfirmPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ElectronicsStep.iClickOnRegister()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Your registration completed",
      "offset": 32
    }
  ],
  "location": "ElectronicsStep.iVerifyRegisterTextMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ElectronicsStep.iClickOnContinueButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping cart",
      "offset": 30
    }
  ],
  "location": "ElectronicsStep.iVerifyShoppingCartTitle(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 3302449800,
  "status": "passed"
});
formatter.uri("TopMenu.feature");
formatter.feature({
  "line": 2,
  "name": "Top Menu Test",
  "description": "As a user I want to navigate to all top menu pages",
  "id": "top-menu-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": "User should navigate to all top menu page",
  "description": "",
  "id": "top-menu-test;user-should-navigate-to-all-top-menu-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on \"\u003cTop Menu Option\u003e\" from Top Menu",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I navigate to relevant page successfully",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I verify \"\u003cTitle\u003e\" of the page",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "top-menu-test;user-should-navigate-to-all-top-menu-page;",
  "rows": [
    {
      "cells": [
        "Top Menu Option",
        "Title"
      ],
      "line": 12,
      "id": "top-menu-test;user-should-navigate-to-all-top-menu-page;;1"
    },
    {
      "cells": [
        "Computers",
        "Computers"
      ],
      "line": 13,
      "id": "top-menu-test;user-should-navigate-to-all-top-menu-page;;2"
    },
    {
      "cells": [
        "Electronics",
        "Electronics"
      ],
      "line": 14,
      "id": "top-menu-test;user-should-navigate-to-all-top-menu-page;;3"
    },
    {
      "cells": [
        "Apparel",
        "Apparel"
      ],
      "line": 15,
      "id": "top-menu-test;user-should-navigate-to-all-top-menu-page;;4"
    },
    {
      "cells": [
        "Digital Downloads",
        "Digital downloads"
      ],
      "line": 16,
      "id": "top-menu-test;user-should-navigate-to-all-top-menu-page;;5"
    },
    {
      "cells": [
        "Books",
        "Books"
      ],
      "line": 17,
      "id": "top-menu-test;user-should-navigate-to-all-top-menu-page;;6"
    },
    {
      "cells": [
        "Jewelry",
        "Jewelry"
      ],
      "line": 18,
      "id": "top-menu-test;user-should-navigate-to-all-top-menu-page;;7"
    },
    {
      "cells": [
        "Gift Cards",
        "Gift Cards"
      ],
      "line": 19,
      "id": "top-menu-test;user-should-navigate-to-all-top-menu-page;;8"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8809995100,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "User should navigate to all top menu page",
  "description": "",
  "id": "top-menu-test;user-should-navigate-to-all-top-menu-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 5,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on \"Computers\" from Top Menu",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I navigate to relevant page successfully",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I verify \"Computers\" of the page",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 122700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 12
    }
  ],
  "location": "TopMenuStep.iClickOnFromTopMenu(String)"
});
formatter.result({
  "duration": 1546477500,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuStep.iNavigateToRelevantPageSuccessfully()"
});
formatter.result({
  "duration": 32100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 10
    }
  ],
  "location": "TopMenuStep.iVerifyOfThePage(String)"
});
formatter.result({
  "duration": 133177899,
  "status": "passed"
});
formatter.after({
  "duration": 1589992900,
  "status": "passed"
});
formatter.before({
  "duration": 8424759800,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "User should navigate to all top menu page",
  "description": "",
  "id": "top-menu-test;user-should-navigate-to-all-top-menu-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 5,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on \"Electronics\" from Top Menu",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I navigate to relevant page successfully",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I verify \"Electronics\" of the page",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 34700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Electronics",
      "offset": 12
    }
  ],
  "location": "TopMenuStep.iClickOnFromTopMenu(String)"
});
formatter.result({
  "duration": 1632545601,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuStep.iNavigateToRelevantPageSuccessfully()"
});
formatter.result({
  "duration": 28900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Electronics",
      "offset": 10
    }
  ],
  "location": "TopMenuStep.iVerifyOfThePage(String)"
});
formatter.result({
  "duration": 170095100,
  "status": "passed"
});
formatter.after({
  "duration": 1650572200,
  "status": "passed"
});
formatter.before({
  "duration": 9104099800,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "User should navigate to all top menu page",
  "description": "",
  "id": "top-menu-test;user-should-navigate-to-all-top-menu-page;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 5,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on \"Apparel\" from Top Menu",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I navigate to relevant page successfully",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I verify \"Apparel\" of the page",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 76400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apparel",
      "offset": 12
    }
  ],
  "location": "TopMenuStep.iClickOnFromTopMenu(String)"
});
formatter.result({
  "duration": 1658425200,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuStep.iNavigateToRelevantPageSuccessfully()"
});
formatter.result({
  "duration": 21800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apparel",
      "offset": 10
    }
  ],
  "location": "TopMenuStep.iVerifyOfThePage(String)"
});
formatter.result({
  "duration": 49755800,
  "status": "passed"
});
formatter.after({
  "duration": 1361775000,
  "status": "passed"
});
formatter.before({
  "duration": 7807759500,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "User should navigate to all top menu page",
  "description": "",
  "id": "top-menu-test;user-should-navigate-to-all-top-menu-page;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 5,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on \"Digital Downloads\" from Top Menu",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I navigate to relevant page successfully",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I verify \"Digital downloads\" of the page",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 89600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Digital Downloads",
      "offset": 12
    }
  ],
  "location": "TopMenuStep.iClickOnFromTopMenu(String)"
});
formatter.result({
  "duration": 1757317601,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuStep.iNavigateToRelevantPageSuccessfully()"
});
formatter.result({
  "duration": 119700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Digital downloads",
      "offset": 10
    }
  ],
  "location": "TopMenuStep.iVerifyOfThePage(String)"
});
formatter.result({
  "duration": 51462200,
  "status": "passed"
});
formatter.after({
  "duration": 1277877900,
  "status": "passed"
});
formatter.before({
  "duration": 7286921700,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "User should navigate to all top menu page",
  "description": "",
  "id": "top-menu-test;user-should-navigate-to-all-top-menu-page;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 5,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on \"Books\" from Top Menu",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I navigate to relevant page successfully",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I verify \"Books\" of the page",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 31200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Books",
      "offset": 12
    }
  ],
  "location": "TopMenuStep.iClickOnFromTopMenu(String)"
});
formatter.result({
  "duration": 1328275600,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuStep.iNavigateToRelevantPageSuccessfully()"
});
formatter.result({
  "duration": 20900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Books",
      "offset": 10
    }
  ],
  "location": "TopMenuStep.iVerifyOfThePage(String)"
});
formatter.result({
  "duration": 54564200,
  "status": "passed"
});
formatter.after({
  "duration": 1306240700,
  "status": "passed"
});
formatter.before({
  "duration": 7996920501,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "User should navigate to all top menu page",
  "description": "",
  "id": "top-menu-test;user-should-navigate-to-all-top-menu-page;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 5,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on \"Jewelry\" from Top Menu",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I navigate to relevant page successfully",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I verify \"Jewelry\" of the page",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 29499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jewelry",
      "offset": 12
    }
  ],
  "location": "TopMenuStep.iClickOnFromTopMenu(String)"
});
formatter.result({
  "duration": 1498428200,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuStep.iNavigateToRelevantPageSuccessfully()"
});
formatter.result({
  "duration": 21100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jewelry",
      "offset": 10
    }
  ],
  "location": "TopMenuStep.iVerifyOfThePage(String)"
});
formatter.result({
  "duration": 87516800,
  "status": "passed"
});
formatter.after({
  "duration": 1373221301,
  "status": "passed"
});
formatter.before({
  "duration": 7303405400,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "User should navigate to all top menu page",
  "description": "",
  "id": "top-menu-test;user-should-navigate-to-all-top-menu-page;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 5,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on \"Gift Cards\" from Top Menu",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I navigate to relevant page successfully",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I verify \"Gift Cards\" of the page",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 29600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gift Cards",
      "offset": 12
    }
  ],
  "location": "TopMenuStep.iClickOnFromTopMenu(String)"
});
formatter.result({
  "duration": 1436177199,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuStep.iNavigateToRelevantPageSuccessfully()"
});
formatter.result({
  "duration": 158601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gift Cards",
      "offset": 10
    }
  ],
  "location": "TopMenuStep.iVerifyOfThePage(String)"
});
formatter.result({
  "duration": 66526601,
  "status": "passed"
});
formatter.after({
  "duration": 1488426800,
  "status": "passed"
});
});