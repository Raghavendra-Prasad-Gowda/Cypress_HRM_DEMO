/// <reference types="Cypress" />

const radiobuttonLocators = require('../../../pageObjects/radiobuttonPageObjects.json')

import utilMethods from '../../../utilMethods/util'
const utilityMethods = new utilMethods();

describe("Radio Button Actions",()=>{

    before(()=>{
        //Open the form page URL
        cy.visit("https://www.demoqa.com/automation-practice-form");
    });

    it("Clicking on Radio button",()=>{

        //Filling the form with all the feilds
        cy.get(radiobuttonLocators.firstNameTextbox).type(utilityMethods.randomString("5","lowerCase"));

        cy.get(radiobuttonLocators.lastNameTextbox).type(utilityMethods.randomString("8","upperCase"));

        cy.get(radiobuttonLocators.userEmailTextbox).type(utilityMethods.randomString("4","lowerCase")+'@gmail.com');

        cy.get(radiobuttonLocators.maleRadiobutton).click();

        cy.get(radiobuttonLocators.userNumberTextbox).type(utilityMethods.randomString("10","numeric"));

        cy.get(radiobuttonLocators.dateOfBirthTextbox).click();

        cy.get(radiobuttonLocators.monthSelectorDropdown).select('February');
        
        cy.get(radiobuttonLocators.yearSelectorDropdown).select('1994');

        cy.get(radiobuttonLocators.dateValue).click();

        let subjects=["Maths","Physics"]

        for(let i=0;i<subjects.length;i++){

            cy.get(radiobuttonLocators.subjectTextbox).type(subjects[i]+"{enter}");

        }

        cy.get(radiobuttonLocators.hobbiesCheckbox).click();
        
        cy.get(radiobuttonLocators.addressTextbox).type(utilityMethods.randomString("8","lowerCase"));

        cy.get(radiobuttonLocators.stateDropdown).type('Rajas{enter}')

        cy.get(radiobuttonLocators.cityDropdown).type('Jai{enter}')

        //Submitting the Filled form
        cy.get(radiobuttonLocators.submitButton).click()
        
        //Validating the Success Message of the form
        cy.get(radiobuttonLocators.successMessageHeader).should('contain','Successful');

        //Closing the Popup Window
        cy.get(radiobuttonLocators.closeButton).click();

    });


})