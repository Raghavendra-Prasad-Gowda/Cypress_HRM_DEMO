/// <reference types="Cypress" />

import utilMethods from '../../../utilMethods/util'
const utilityMethods = new utilMethods();
const emailTriggerPageLocators= require('../../../pageObjects/emailTriggerPageObjects.json')

describe("Email Trigger Functionality Verification", ()=>{

    //Setting up Base URL for the test Suite
    Cypress.config('baseUrl','http://localhost:8081/employee-client/')

    let firstName=utilityMethods.randomString(5,"lowerCase");

    beforeEach(()=>{
        //Opening the home page
        cy.visit("/");
    });


    it("Add Employee functionality verification",()=>{

        //Adding the user by filling the form
        cy.contains(emailTriggerPageLocators.addEmployeeTab).should('be.visible').click();
        cy.get(emailTriggerPageLocators.firstNameTextbox).type(firstName);
        cy.get(emailTriggerPageLocators.lastNameTextbox).type(utilityMethods.randomString(4,"lowerCase"));
        cy.get(emailTriggerPageLocators.emailTextbox).type("rraghavendraprasadgowda@gmail.com");
        cy.contains(emailTriggerPageLocators.submitButton).should('be.visible').click();
        cy.wait(2000);
        cy.reload();

    });

    it("Email trigger Functionality Verification",()=>{

        //Triggering the Email from Feedback Tab
        cy.contains(emailTriggerPageLocators.feedbackTab).should('be.visible').click();
        cy.get(emailTriggerPageLocators.feedbackTextbox).should('be.visible').type('@'+firstName +'{enter} {enter} Hi This is test email generated from the user - '+firstName);
        cy.contains(emailTriggerPageLocators.submitButton).click();

    });

    it("Delete Employee Functionality Verification", ()=>{

        //Deleting Employee Functionality
        cy.contains('Employee List').click();
        cy.get('.btn.btn-danger').click();

    });

});

