
Feature('Deneme test');

Scenario('Login Test', (I,Login,Main) => {
        I.amOnPage('/');
        Main.MainPage();
        I.see('Mesut Gedik');
        I.fillField('//input[@class="search_query form-control ac_input"][contains(@id,"top")]','Printed Chiffon Dress');
        I.click('//button[@type="submit"][contains(.,"Search")]');
        I.click('//img[contains(@alt,"Printed Chiffon Dress")]');
        I.click('//span[contains(.,"Add to cart")]');
        I.wait(2);
        I.click('//span[contains(.,"Proceed to checkout")]');
        I.click('//i[contains(@class,"icon-plus")]');
        I.wait(2);
        I.see('$34.80');
        I.saveScreenshot('automation.png');
        I.click('//i[contains(@class,"icon-trash")]');
        pause();
});