import EditAccount from "../support/pages/editPage";

describe('Magento Edit Account Page Test Case', () => {
    beforeEach(function () {
        cy.fixture('userData').as('user');
        cy.get('@user').then((user) => {
            cy.login(user.validUser.email, user.validUser.password);
        });
        cy.clickEdit();
    });

    it('Edit Name Success', function () {
        EditAccount.fillFirstName(this.user.edit.firstName);
        EditAccount.fillLastName(this.user.edit.lastName);
        cy.saveChanges();
        cy.verify(EditAccount.editSuccess, this.user.verification.editSuccess);
    });

    // it('Edit First Name Success', function () {
    //     EditAccount.fillFirstName(this.user.edit.firstName2);
    //     cy.saveChanges();
    // });

    // it('Edit Last Name Success', function () {
    //     EditAccount.fillLastName(this.user.edit.lastName2);
    //     cy.saveChanges();
    // });

    // it('Edit Failed - Blank First Name', function () {
    //     EditAccount.blankFirstName();
    //     EditAccount.fillLastName(this.user.edit.lastName);
    //     cy.saveChanges();
    // });

    // it('Edit Failed - Blank Last Name', function () {
    //     EditAccount.fillFirstName(this.user.edit.firstName);
    //     EditAccount.blankLastName();
    //     cy.saveChanges();
    // });

    // it('Edit Failed - Blank First and Last Name', function () {
    //     EditAccount.blankFirstName();
    //     EditAccount.blankLastName();
    //     cy.saveChanges();
    // });

    // it('Edit Email Success', function () {
    //     EditAccount.clickChangeEmail();
    //     EditAccount.fillNewEmail(this.user.edit.email);
    //     cy.saveChanges();
    // });

    // it('Edit Failed - Invalid Email', function () {
    //     EditAccount.clickChangeEmail();
    //     EditAccount.fillNewEmail(this.user.edit.email2);
    //     cy.saveChanges();
    // });

    // it('Edit Failed - Blank Email', function () {
    //     EditAccount.blankNewEmail();
    //     cy.saveChanges();
    // });

    // it('Edit Password Success', function () {
    //     EditAccount.clickChangePassword();
    //     EditAccount.fillNewPassword(this.user.edit.password);
    //     EditAccount.fillConfirmPassword(this.user.edit.password);
    //     cy.saveChanges();
    // });

    // it('Edit Failed - Invalid New Password', function () {
    //     EditAccount.clickChangePassword();
    //     EditAccount.fillNewPassword(this.user.edit.password2);
    //     EditAccount.fillConfirmPassword(this.user.edit.password);
    //     cy.saveChanges();
    // });

    // it('Edit Failed - Invalid Confirm Password', function () {
    //     EditAccount.clickChangePassword();
    //     EditAccount.fillNewPassword(this.user.edit.password);
    //     EditAccount.fillConfirmPassword(this.user.edit.password2);
    //     cy.saveChanges();
    // });

    // it('Edit Failed - Blank New Password', function () {
    //     EditAccount.clickChangePassword();
    //     EditAccount.fillConfirmPassword();
    //     cy.saveChanges();
    // });

    // it('Edit Failed - Blank Confirm Password', function () {
    //     EditAccount.clickChangePassword();
    //     EditAccount.fillNewPassword(this.user.edit.password);
    //     cy.saveChanges();
    // });

    // it('Edit Failed - Blank New and Confirm Password', function () {
    //     EditAccount.clickChangePassword();
    //     cy.saveChanges();
    // });

    // it('Edit Email and Password Success', function () {
    //     EditAccount.clickChangeEmail();
    //     EditAccount.clickChangePassword();
    //     EditAccount.fillNewEmail(this.user.validUser.email);
    //     EditAccount.fillNewPassword(this.user.validUser.password);
    //     EditAccount.fillConfirmPassword(this.user.validUser.password);
    //     cy.saveChanges();
    // });

    // it('Edit Failed - Invalid Email', function () {
    //     EditAccount.clickChangeEmail();
    //     EditAccount.clickChangePassword();
    //     EditAccount.fillNewEmail(this.user.edit.email2);
    //     EditAccount.fillNewPassword(this.user.edit.password);
    //     EditAccount.fillConfirmPassword(this.user.edit.password);
    //     cy.saveChanges();
    // });

    // it('Edit Failed - Invalid Current Password', function () {
    //     EditAccount.clickChangeEmail();
    //     EditAccount.clickChangePassword();
    //     EditAccount.fillNewEmail(this.user.edit.email);
    //     EditAccount.fillCurrentPassword(this.user.edit.password2);
    //     EditAccount.fillNewPassword(this.user.edit.password);
    //     EditAccount.fillConfirmPassword(this.user.edit.password);
    //     cy.saveChanges();
    // });

    // it('Edit Failed - Invalid New Password', function () {
    //     EditAccount.clickChangeEmail();
    //     EditAccount.clickChangePassword();
    //     EditAccount.fillNewEmail(this.user.edit.email);
    //     EditAccount.fillNewPassword(this.user.edit.password2);
    //     EditAccount.fillConfirmPassword(this.user.edit.password);
    //     cy.saveChanges();
    // });

    // it('Edit Failed - Invalid Confirm Password', function () {
    //     EditAccount.clickChangeEmail();
    //     EditAccount.clickChangePassword();
    //     EditAccount.fillNewEmail(this.user.edit.email);
    //     EditAccount.fillNewPassword(this.user.edit.password);
    //     EditAccount.fillConfirmPassword(this.user.edit.password2);
    //     cy.saveChanges();
    // });

    // it('Edit Failed - Blank Email', function () {
    //     EditAccount.clickChangeEmail();
    //     EditAccount.clickChangePassword();
    //     EditAccount.blankNewEmail();
    //     EditAccount.fillNewPassword(this.user.edit.password);
    //     EditAccount.fillConfirmPassword(this.user.edit.password);
    //     cy.saveChanges();
    // });

    // it('Edit Failed - Blank Current Password', function () {
    //     EditAccount.clickChangeEmail();
    //     EditAccount.clickChangePassword();
    //     EditAccount.fillNewEmail(this.user.edit.email);
    //     EditAccount.blankPassword();
    //     EditAccount.fillNewPassword(this.user.edit.password);
    //     EditAccount.fillConfirmPassword(this.user.edit.password);
    //     cy.saveChanges();
    // });

    // it('Edit Failed - Blank New Password', function () {
    //     EditAccount.clickChangeEmail();
    //     EditAccount.clickChangePassword();
    //     EditAccount.fillNewEmail(this.user.edit.email);
    //     EditAccount.blankNewPassword();
    //     EditAccount.fillConfirmPassword(this.user.edit.password);
    //     cy.saveChanges();
    // });

    // it('Edit Failed - Blank Confirm Password', function () {
    //     EditAccount.clickChangeEmail();
    //     EditAccount.clickChangePassword();
    //     EditAccount.fillNewEmail(this.user.edit.email);
    //     EditAccount.fillNewPassword(this.user.edit.password);
    //     EditAccount.blankConfirmPassword();
    //     cy.saveChanges();
    // });

    // it('Edit Failed - Blank All', function () {
    //     EditAccount.clickChangeEmail();
    //     EditAccount.clickChangePassword();
    //     EditAccount.blankNewEmail();
    //     EditAccount.blankPassword();
    //     EditAccount.blankNewPassword();
    //     EditAccount.blankConfirmPassword();
    //     cy.saveChanges();
    // });
});