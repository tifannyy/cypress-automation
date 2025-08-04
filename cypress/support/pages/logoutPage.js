class LogoutPage {
    //selector
    accountMenu = ':nth-child(2) > .customer-welcome > .customer-name > .action';
    signOut = 'body > div.page-wrapper > header > div.panel.wrapper > div > ul > li.customer-welcome.active > div > ul > li.authorization-link';
    verifySignOut = '.base';
    verifySignIn = '.base';

    logout () {
        cy.get(this.accountMenu).click();
        cy.get(this.signOut).click();
    }

    visit () {
        cy.visit('/customer/account/logoutSuccess/')
    }
}

export default new LogoutPage();