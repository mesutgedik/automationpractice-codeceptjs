
Feature('Deneme test');

Scenario('Login Test', (I,Login) => {
        I.amOnPage('/');
        Login.loginPage('mesutgedikk@gmail.com','memmed120');
        pause();  
});
