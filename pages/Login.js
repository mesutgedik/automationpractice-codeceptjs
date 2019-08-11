const { I } = inject();

module.exports = {

  Login_pass:{
      email: '//input[@id="email"]',
      password: '//input[@id="passwd"]'

  },
  buttons:{
  login_click:'//span[contains(.,"Sign in")]',
  signinButton:'//a[contains(@class,"login")]'
},
    loginPage(email, password) {
      I.click(this.buttons.signinButton);
      I.fillField(this.Login_pass.email, email);
      I.fillField(this.Login_pass.password, password);
      I.click(this.buttons.login_click);
  },
}
