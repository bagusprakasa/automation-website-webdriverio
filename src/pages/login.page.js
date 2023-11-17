const { $ } = require("@wdio/globals");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage {
  get inputUsername() {
    return $("#user-name");
  }
  get inputPassword() {
    return $("#password");
  }
  get buttonLogin() {
    return $("#login-button");
  }
  get appLogo() {
    return $(".app_logo");
  }
}

module.exports = new LoginPage();
