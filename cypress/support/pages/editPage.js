class EditAccount {
    //selector
    editAccount = '.block-dashboard-info > .block-content > .box > .box-actions > .edit > span'
    firstName = '#firstname'
    lastName = '#lastname'
    changeEmail = '#change-email'
    changePassword = '#change-password'
    saveButton = '#form-validate > .actions-toolbar > div.primary > .action'
    newEmail = '#email'
    currentPass = '#current-password'
    newPass = '#password'
    confirmNewPass = '#password-confirmation'
    // editPassword = '.change-password'
    editSuccess = '#maincontent > div.page.messages > div:nth-child(2) > div > div'
    reqFirstName = '#firstname-error'
    reqLastName = '#lastname-error'
    reqEmail = '#email-error'
    reqPass = '#current-password-error'
    reqNewPass = '#password-error'
    reqConfirmPass = '#password-confirmation-error'
    errorInvalidPass = '.message-error'
    
    //edit name
    visit () {
        cy.visit('/customer/account/')
    }

    visit2 () {
        cy.visit('/customer/account/index/')
    }

    clickEditAccount () {
        cy.get(this.editAccount).click();
    }

    fillFirstName (name) {
        cy.get(this.firstName).clear().type(name);
    }

    fillLastName (name) {
        cy.get(this.lastName).clear().type(name);
    }

    saveChanges () {
        cy.get(this.saveButton).click();
    }

    clickChangeEmail () {
        cy.get(this.changeEmail).click()
    }    

    clickChangePassword () {
        cy.get(this.changePassword).click()
    }

    fillNewEmail (email) {
        cy.get(this.newEmail).clear().type(email);
    }

    fillCurrentPassword (password) {
        cy.get(this.currentPass).clear().type(password);
    }
    
    fillNewPassword (password) {
        cy.get(this.newPass).type(password);
    }

    fillConfirmPassword (password) {
        cy.get(this.confirmNewPass).type(password);
    }

    verifyError (message, selector) {
        cy.get(selector).should('contain', message);
    }

    blankFirstName () {
        cy.get(this.firstName).clear()
    }

    blankLastName () {
        cy.get(this.lastName).clear()
    }

    blankNewEmail () {
        cy.get(this.newEmail).clear()
    }

    blankPassword () {
        cy.get(this.currentPassword).clear()
    }

    blankNewPassword () {
        cy.get(this.newPass).clear()
    }

    blankConfirmPassword () {
        cy.get(this.confirmNewPass).clear()
    }
}

export default new EditAccount();