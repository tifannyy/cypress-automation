import LogoutPage from "../support/pages/logoutPage";

describe('Magento Logout Page Test Case', () => {
    beforeEach(function () {
        cy.fixture('userData').as('user');
    });

    it('Logout Success', function () {
        cy.login(this.user.validUser.email, this.user.validUser.password);
        LogoutPage.logout();
        cy.get(LogoutPage.verifySignOut).should('contain', this.user.verification.logoutSuccess);
    });

    it('Access Account After Logout', function () {
        cy.login(this.user.validUser.email, this.user.validUser.password);
        LogoutPage.logout();
        cy.visit('/customer/account/index');
        cy.url().should('contain', '/customer/account/login');
    });

    it('Logout without Login', function () {
        LogoutPage.visit();
        cy.wait(5000);
        cy.get(LogoutPage.verifySignIn).should('contain', 'Home Page')
    })
})