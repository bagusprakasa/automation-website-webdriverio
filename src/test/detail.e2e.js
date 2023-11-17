import * as assertion from "../helper/assertion";
import * as element from "../helper/element";
const LoginPage = require("../pages/login.page");
require("dotenv").config();
describe("Test Automation Using WebDriver.io", () => {
  it("Login", async () => {
    browser.url(process.env.APP_URL);
    element.fillFilled(LoginPage.inputUsername, process.env.APP_USERNAME);
    await assertion.shouldHaveValue(
      LoginPage.inputUsername,
      process.env.APP_USERNAME
    );
    element.fillFilled(LoginPage.inputPassword, process.env.APP_PASSWORD);
    await assertion.shouldHaveValue(
      LoginPage.inputPassword,
      process.env.APP_PASSWORD
    );
    element.click(LoginPage.buttonLogin);
    await assertion.shouldHaveText(LoginPage.appLogo, "Swag Labs");
  });
});
