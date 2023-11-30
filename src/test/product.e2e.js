import * as assertion from "../helper/assertion";
import * as element from "../helper/element";
const LoginPage = require("../pages/login.page");
const ProductPage = require("../pages/product.page");
require("dotenv").config();
describe("Automation test for product", () => {
  it("Login With Valid Data", async () => {
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
  it("Filter data", async () => {
    element.fillSelect(ProductPage.selectFilter, "value", "lohi");
    await assertion.shouldHaveText(ProductPage.tittle, "Sauce Labs Onesie");
  });
  it("Get Detail Data", async () => {
    element.click(ProductPage.tittle);
    await assertion.shouldHaveText(
      ProductPage.titleDetail,
      "Sauce Labs Onesie"
    );
  });
});
