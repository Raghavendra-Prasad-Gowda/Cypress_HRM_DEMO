/// <reference types="Cypress" />

const dashboardPageLocators = require('../../../pageObjects/dashboardPageObjects.json');
const deleteEmployeePageLocators= require('../../../pageObjects/deletePageObjects.json');
const appCredentials = require('../../../fixtures/appCredentials.json');
const employeeListPageLocators = require ('../../../pageObjects/employeeListPage.json');



describe("Delete Employee Functionality of HRM Site", ()=>{

    beforeEach(()=>{

        cy.visit("/");
        cy.Login(appCredentials.validUsername, appCredentials.validPassword);

    });


    it("Verify Delete Employee Functionality",()=>{

        cy.get(dashboardPageLocators.pimModule).click();

        cy.get(dashboardPageLocators.employeeListTab).click({force:true});
        cy.wait(2000);

        cy.get(employeeListPageLocators.employeeNameSearchTextbox).type("John Sam");

        cy.get(employeeListPageLocators.searchButton).click();
        
        cy.get(deleteEmployeePageLocators.selectAllCheckbox).click();

        cy.get(deleteEmployeePageLocators.deleteButton).click();

        cy.get(deleteEmployeePageLocators.dialogOKButton).click();

    });


    

});