exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://www.automationpractice.com',
      show: true,
      waitForNavigation: ['domcontentloaded','networkidle0']
    }
  },
  include: {
    I: './steps_file.js',
    Login: './pages/Login.js',
    Main: './pages/Main.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'AutomationPractice'
}