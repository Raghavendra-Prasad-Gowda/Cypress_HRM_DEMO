/// <reference types="Cypress" />

import utilMethods from '../../../utilMethods/util'
const utilityMethods = new utilMethods();

const dashboardPageLocators = require('../../../pageObjects/dashboardPageObjects.json');
const applyLeavePageLocators = require('../../../pageObjects/applyLeavePageObjects.json');
const appCredentials=require('../../../fixtures/appCredentials.json');


describe("Apply Leave Functionality of HRM Site", ()=>{

    beforeEach(()=>{
        
        cy.visit("/");
        cy.Login(appCredentials.validUsername, appCredentials.validPassword);

    });


    it("Verify Apply Leave Functionality",()=>{

        cy.get(dashboardPageLocators.leaveModule).should('be.visible').click();

        cy.get(applyLeavePageLocators.applyTab).click({force:true});

        cy.get(applyLeavePageLocators.leaveType).select('US - Personal');

        let leaveDate='2020-10-26'
        cy.get(applyLeavePageLocators.fromDate).clear().type(leaveDate);

        cy.get(applyLeavePageLocators.toDate).clear({force:true}).type(leaveDate);

        cy.get(applyLeavePageLocators.commentsTextBox).click({force:true}).type('Leave Apply Testing');

        cy.get(applyLeavePageLocators.applyButton).click();

    });


    

});