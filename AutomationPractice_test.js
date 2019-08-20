
Feature('Deneme test');

Scenario('Login Test', (I,Login) => {
        I.amOnPage('/');
        Login.loginPage('deneme193@gmail.com','deneme123');
        pause();
        
});
