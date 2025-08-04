// import LoginPage from "./pages/loginPage";

// Cypress.Commands.add('login', (email, password) => {
//     cy.visit();
//     cy.get(LoginPage.emailField).type(email);
//     cy.get(LoginPage.passwordField).type(password);
//     cy.get(LoginPage.clickLogin).click();
// });

import LoginPage from "./pages/loginPage";
import EditAccount from "./pages/editPage";

Cypress.Commands.add('login', (email, password) => {
    LoginPage.visit();
    LoginPage.fillEmail(email);
    LoginPage.fillPassword(password);
    LoginPage.clickLogin();
});

Cypress.Commands.add('clickEdit', () => {
    EditAccount.clickEditAccount();
});

Cypress.Commands.add('saveChanges', () => {
    EditAccount.saveChanges();
});

Cypress.Commands.add('verify', (selector, message) => {
    cy.get(selector).should('contain.text', message);
});