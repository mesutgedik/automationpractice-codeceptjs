const { I } = inject();

module.exports = {

  loginPaths:{
      email: '//input[@id="email"]',
      cpass: '//input[@id="passwd"]'

  },
  buttons:{
  signin:'//span[contains(.,"Sign in")]'
},
    loginPage(email, cpass) {
      I.fillField(this.loginPaths.email, email);
      I.fillField(this.loginPaths.cpass, cpass);
      I.click(this.buttons.signin);
  },
}
