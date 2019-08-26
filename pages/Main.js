const { I , Login } = inject();

module.exports = {

  email: "deneme193@gmail.com",
  passs: "deneme123",

  signinPage:'//a[contains(@class,"login")]',

MainPage() {
      I.click(this.signinPage);
      Login.loginPage(this.email,this.passs)
       },

}
