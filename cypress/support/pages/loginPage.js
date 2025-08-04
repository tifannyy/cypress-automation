class LoginPage {
    //selector
    emailField = '#email';
    passwordField = '#pass';
    signInButton = '#send2';
    loginError = '.message-error';
    emailError = '#email-error';
    passwordError = '#pass-error';
    
    visit () {
        cy.visit('/customer/account/login/');
    }

    fillEmail (email) {
        cy.get(this.emailField).clear().type(email);
    }

    fillPassword (password) {
        cy.get(this.passwordField).clear().type(password);
    }

    clickLogin () {
        cy.get(this.signInButton).click();
    }

    verifyError (selector, message) {
        cy.get(selector).should('contain', message);
    }

    blankEmail () {
        cy.get(this.emailField).clear();
    }

    blankPassword () {
        cy.get(this.passwordField).clear();
    }
}

export default new LoginPage();