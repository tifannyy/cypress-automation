import EditAccount from "../support/pages/editPage";

describe('Magento Edit Account Page Test Case', () => {
    beforeEach(function () {
        cy.fixture('userData').as('user');
        cy.get('@user').then((user) => {
            cy.login(user.validUser.email, user.validUser.password);
            cy.login(user.edit.email, user.validUser.password);
        });
        cy.clickEdit();
    });

    it('Edit Name Success', function () {
        EditAccount.fillFirstName(this.user.edit.firstName);
        EditAccount.fillLastName(this.user.edit.lastName);
        cy.saveChanges();
        cy.verify(EditAccount.editSuccess, this.user.verification.editSuccess);
    });

    it('Edit First Name Success', function () {
        EditAccount.fillFirstName(this.user.edit.firstName2);
        cy.saveChanges();
        cy.verify(EditAccount.editSuccess, this.user.verification.editSuccess); 
    });

    it('Edit Last Name Success', function () {
        EditAccount.fillLastName(this.user.edit.lastName2);
        cy.saveChanges();
        cy.verify(EditAccount.editSuccess, this.user.verification.editSuccess);
    });

    it('Edit Failed - Blank First Name', function () {
        EditAccount.blankFirstName();
        EditAccount.fillLastName(this.user.edit.lastName);
        cy.saveChanges();
        cy.verify(EditAccount.reqFirstName, this.user.errorMessages.required);
    });

    it('Edit Failed - Blank Last Name', function () {
        EditAccount.fillFirstName(this.user.edit.firstName);
        EditAccount.blankLastName();
        cy.saveChanges();
        cy.verify(EditAccount.reqLastName, this.user.errorMessages.required);
    });

    it('Edit Failed - Blank First and Last Name', function () {
        EditAccount.blankFirstName();
        EditAccount.blankLastName();
        cy.saveChanges();
        cy.verify(EditAccount.reqFirstName, this.user.errorMessages.required);
        cy.verify(EditAccount.reqLastName, this.user.errorMessages.required);
    });

    it('Edit Email Success', function () {
        EditAccount.clickChangeEmail();
        EditAccount.fillNewEmail(this.user.edit.email);
        EditAccount.fillCurrentPassword(this.user.validUser.password);
        cy.saveChanges();
        cy.verify(EditAccount.editSuccess, this.user.verification.editSuccess);
    });

    it('Edit Failed - Invalid Email', function () {
        EditAccount.clickChangeEmail();
        EditAccount.fillNewEmail(this.user.edit.email2);
        cy.saveChanges();
        cy.verify(EditAccount.reqEmail, this.user.errorMessages.invalidEmail);
    });

    it('Edit Failed - Blank Email', function () {
        EditAccount.blankNewEmail();
        cy.saveChanges();
        cy.verify(EditAccount.reqEmail, this.user.errorMessages.required);
    });

    it('Edit Password Success', function () {
        EditAccount.clickChangePassword();
        EditAccount.fillNewPassword(this.user.edit.password);
        EditAccount.fillConfirmPassword(this.user.edit.password);
        cy.saveChanges();
        cy.verify(EditAccount.editSuccess, this.user.verification.editSuccess);
    });

    it('Edit Failed - Invalid New Password', function () {
        EditAccount.clickChangePassword();
        EditAccount.fillNewPassword(this.user.edit.password2);
        EditAccount.fillConfirmPassword(this.user.edit.password);
        cy.saveChanges();
        cy.verify(EditAccount.reqNewPass, this.user.errorMessages.invalidNewPass);
    });

    it('Edit Failed - Invalid Confirm Password', function () {
        EditAccount.clickChangePassword();
        EditAccount.fillNewPassword(this.user.edit.password);
        EditAccount.fillConfirmPassword(this.user.edit.password2);
        cy.saveChanges();
        cy.verify(EditAccount.reqConfirmPass, this.user.errorMessages.invalidConfirmPass);
    });

    it('Edit Failed - Blank New Password', function () {
        EditAccount.clickChangePassword();
        EditAccount.fillConfirmPassword();
        cy.saveChanges();
        cy.verify(EditAccount.reqNewPass, this.user.errorMessages.required);
    });

    it('Edit Failed - Blank Confirm Password', function () {
        EditAccount.clickChangePassword();
        EditAccount.fillNewPassword(this.user.edit.password);
        cy.saveChanges();
        cy.verify(EditAccount.reqConfirmPass, this.user.errorMessages.required);
    });

    it('Edit Failed - Blank New and Confirm Password', function () {
        EditAccount.clickChangePassword();
        cy.saveChanges();
        cy.verify(EditAccount.reqNewPass, this.user.errorMessages.required);
        cy.verify(EditAccount.reqConfirmPass, this.user.errorMessages.required);
    });

    it('Edit Email and Password Success', function () {
        EditAccount.clickChangeEmail();
        EditAccount.clickChangePassword();
        EditAccount.fillNewEmail(this.user.validUser.email);
        EditAccount.fillNewPassword(this.user.validUser.password);
        EditAccount.fillConfirmPassword(this.user.validUser.password);
        cy.saveChanges();
        cy.verify(EditAccount.editSuccess, this.user.verification.editSuccess);
    });

    it('Edit Failed - Invalid Email', function () {
        EditAccount.clickChangeEmail();
        EditAccount.clickChangePassword();
        EditAccount.fillNewEmail(this.user.edit.email2);
        EditAccount.fillNewPassword(this.user.edit.password);
        EditAccount.fillConfirmPassword(this.user.edit.password);
        cy.saveChanges();
        cy.verify(EditAccount.reqEmail, this.user.errorMessages.invalidEmail);
    });

    it('Edit Failed - Invalid Current Password', function () {
        EditAccount.clickChangeEmail();
        EditAccount.clickChangePassword();
        EditAccount.fillNewEmail(this.user.edit.email);
        EditAccount.fillCurrentPassword(this.user.edit.password2);
        EditAccount.fillNewPassword(this.user.edit.password);
        EditAccount.fillConfirmPassword(this.user.edit.password);
        cy.saveChanges();
        cy.verify(EditAccount.errorInvalidPass, this.user.errorMessages.invalidPass);
    });

    it('Edit Failed - Invalid New Password', function () {
        EditAccount.clickChangeEmail();
        EditAccount.clickChangePassword();
        EditAccount.fillNewEmail(this.user.edit.email);
        EditAccount.fillNewPassword(this.user.edit.password2);
        EditAccount.fillConfirmPassword(this.user.edit.password);
        cy.saveChanges();
        cy.verify(EditAccount.reqNewPass, this.user.errorMessages.invalidNewPass);
    });

    it('Edit Failed - Invalid Confirm Password', function () {
        EditAccount.clickChangeEmail();
        EditAccount.clickChangePassword();
        EditAccount.fillNewEmail(this.user.edit.email);
        EditAccount.fillNewPassword(this.user.edit.password);
        EditAccount.fillConfirmPassword(this.user.edit.password2);
        cy.saveChanges();
        cy.verify(EditAccount.reqConfirmPass, this.user.errorMessages.invalidConfirmPass);
    });

    it('Edit Failed - Blank Email', function () {
        EditAccount.clickChangeEmail();
        EditAccount.clickChangePassword();
        EditAccount.blankNewEmail();
        EditAccount.fillNewPassword(this.user.edit.password);
        EditAccount.fillConfirmPassword(this.user.edit.password);
        cy.saveChanges();
        cy.verify(EditAccount.reqEmail, this.user.errorMessages.required);
    });

    it('Edit Failed - Blank Current Password', function () {
        EditAccount.clickChangeEmail();
        EditAccount.clickChangePassword();
        EditAccount.fillNewEmail(this.user.edit.email);
        EditAccount.blankPassword();
        EditAccount.fillNewPassword(this.user.edit.password);
        EditAccount.fillConfirmPassword(this.user.edit.password);
        cy.saveChanges();
        cy.verify(EditAccount.reqPass, this.user.errorMessages.required);
    });

    it('Edit Failed - Blank New Password', function () {
        EditAccount.clickChangeEmail();
        EditAccount.clickChangePassword();
        EditAccount.fillNewEmail(this.user.edit.email);
        EditAccount.blankNewPassword();
        EditAccount.fillConfirmPassword(this.user.edit.password);
        cy.saveChanges();
        cy.verify(EditAccount.reqNewPass, this.user.errorMessages.required);
    });

    it('Edit Failed - Blank Confirm Password', function () {
        EditAccount.clickChangeEmail();
        EditAccount.clickChangePassword();
        EditAccount.fillNewEmail(this.user.edit.email);
        EditAccount.fillNewPassword(this.user.edit.password);
        EditAccount.blankConfirmPassword();
        cy.saveChanges();
        cy.verify(EditAccount.reqConfirmPass, this.user.errorMessages.required);
    });

    it('Edit Failed - Blank All', function () {
        EditAccount.clickChangeEmail();
        EditAccount.clickChangePassword();
        EditAccount.blankNewEmail();
        EditAccount.blankPassword();
        EditAccount.blankNewPassword();
        EditAccount.blankConfirmPassword();
        cy.saveChanges();
        cy.verify(EditAccount.reqEmail, this.user.errorMessages.required);
        cy.verify(EditAccount.reqPass, this.user.errorMessages.required);
        cy.verify(EditAccount.reqNewPass, this.user.errorMessages.required);
        cy.verify(EditAccount.reqConfirmPass, this.user.errorMessages.required);
    });
});