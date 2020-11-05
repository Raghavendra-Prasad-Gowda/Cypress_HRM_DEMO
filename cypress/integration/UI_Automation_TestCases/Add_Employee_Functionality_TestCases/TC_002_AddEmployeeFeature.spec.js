/// <reference types="Cypress" />

import utilMethods from '../../../utilMethods/util'
const utilityMethods = new utilMethods();

const dashboardPageLocators = require('../../../pageObjects/dashboardPageObjects.json');
const addEmployeePageLocators= require('../../../pageObjects/addEmployeeObjects.json');
const employeeListPageLocators = require ('../../../pageObjects/employeeListPage.json');
const appCredentials = require('../../../fixtures/appCredentials.json');


describe("Add Employee Functionality of HRM Site", ()=>{

    beforeEach(()=>{
        
        cy.visit("/");
        cy.Login(appCredentials.validUsername, appCredentials.validPassword);
    });


    it("Verify Add Employee Functionality",()=>{

        cy.get(dashboardPageLocators.pimModule).should('be.visible').click();

        cy.get(addEmployeePageLocators.addEmployeeTab).click({force: true});

        var firstName= "John"
        cy.get(addEmployeePageLocators.firstNameTextbox).type(firstName);

        var middleName="Sam"
        cy.get(addEmployeePageLocators.middleNameTextbox).type(middleName);

        cy.get(addEmployeePageLocators.lastNameTextbox).type(utilityMethods.randomString(6, "lowerCase"));

        cy.get(addEmployeePageLocators.createLoginCheckbox).check();

        cy.get(addEmployeePageLocators.userNameTextbox).type(utilityMethods.randomString(6, "lowerCase"));

        var password=utilityMethods.randomString(9, "alphaNumeric");
        cy.get(addEmployeePageLocators.passwordTextbox).type(password);

        cy.get(addEmployeePageLocators.confirmPasswordTextbox).type(password);
        
        cy.get(addEmployeePageLocators.statusDropdown).select("Enabled");
 
        cy.get(addEmployeePageLocators.saveButton).should('be.visible').click();
        cy.get(dashboardPageLocators.pimModule).should('be.visible').click();

        cy.get(employeeListPageLocators.employeeListTab).click({force: true});

        cy.wait(2000)
        cy.get(employeeListPageLocators.employeeNameSearchTextbox).type(firstName +" "+ middleName);

        cy.get(employeeListPageLocators.searchButton).should('be.visible').click();

        cy.get(employeeListPageLocators.firstNameValueInFirstResult).should('be.visible').should('contain',firstName+" "+middleName);

        cy.get(dashboardPageLocators.welcomeUserNameBanner).should('be.visible').click();
        
        cy.get(dashboardPageLocators.logoutButton).click();

    });


    

});