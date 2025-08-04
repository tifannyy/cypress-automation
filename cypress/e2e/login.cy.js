import LoginPage from "../support/pages/loginPage";

// describe('Magento Login Page Test Case', () => {
//     beforeEach(function () {
//         cy.fixture('userData').as('user');
//         LoginPage.visit();
//     });

//     it('Valid Login Success', function () {
//         LoginPage.fillEmail(this.user.validUser.email);
//         LoginPage.fillPassword(this.user.validUser.password);
//         LoginPage.clickLogin();

//         cy.url().should('contain', '/customer/account');
//     })
// })

describe('Magento Login Page Test Case', () => {
    beforeEach(function () {
        cy.fixture('userData').as('user');
    });

    it('Login Success', function () {
        cy.login(this.user.validUser.email, this.user.validUser.password);
        cy.url().should('contain', '/customer/account');
    });

    it('Login Failed - Invalid Email & Password', function () {
        cy.login(this.user.invalidUser.email, this.user.invalidUser.password);
        cy.verify(LoginPage.emailError, this.user.errorMessages.invalidEmail)
    });

    it('Login Failed - Invalid Email & Valid Password', function () {
        cy.login(this.user.invalidUser.email, this.user.validUser.password);
        cy.verify(LoginPage.emailError, this.user.errorMessages.invalidEmail);
    });

    it('Login Failed - Valid Email & Invalid Password', function () {
        cy.login(this.user.validUser.email, this.user.invalidUser.password);
        cy.verify(LoginPage.loginError, this.user.errorMessages.invalidLogin);
    });

    it('Login Failed - Blank Email & Password', function () {
        LoginPage.visit();
        LoginPage.blankEmail();
        LoginPage.blankPassword();
        LoginPage.clickLogin();
        cy.verify(LoginPage.emailError, this.user.errorMessages.required);
        cy.verify(LoginPage.passwordError, this.user.errorMessages.required);
    });

    it('Login Failed - Login Without Input', function () {
        LoginPage.visit();
        LoginPage.clickLogin();
        cy.verify(LoginPage.loginError, this.user.errorMessages.loginReq);
    });

    it('Login Failed - Blank Email', function () {
        LoginPage.visit();
        LoginPage.fillPassword(this.user.validUser.password);
        LoginPage.clickLogin();
        cy.verify(LoginPage.emailError, this.user.errorMessages.required);
    });

    it('Login Failed - Blank Password', function () {
        LoginPage.visit();
        LoginPage.fillEmail(this.user.validUser.email);
        LoginPage.clickLogin();
        cy.verify(LoginPage.passwordError, this.user.errorMessages.required);
    });

    it('Login Failed - Input Space in Email & Password', function () {
        cy.login(' ', ' ');
        cy.verify(LoginPage.emailError, this.user.errorMessages.required);
        cy.verify(LoginPage.passwordError, this.user.errorMessages.required);
    });

    it('Login Failed - Input Space in Email', function () {
        cy.login(' ', this.user.validUser.password);
        cy.verify(LoginPage.emailError, this.user.errorMessages.required);
    });

    it('Login Failed - Input Space in Password', function () {
        cy.login(this.user.validUser.email, ' ');
        cy.verify(LoginPage.passwordError, this.user.errorMessages.required);
    });
})