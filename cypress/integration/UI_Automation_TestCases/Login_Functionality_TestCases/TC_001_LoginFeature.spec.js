/// <reference types="Cypress" />

const loginPageLocators = require ('../../../pageObjects/loginPageObjects.json');
const dashboardPageLocators = require('../../../pageObjects/dashboardPageObjects.json');
const appCredentials = require('../../../fixtures/appCredentials.json');

describe("Login Functionality of HRM Site", ()=>{

    beforeEach(()=>{

        cy.visit("/");

    });


    it("Successful Login Functionality Verification",()=>{

        cy.Login(appCredentials.validUsername,  appCredentials.validPassword);

        cy.get(dashboardPageLocators.welcomeUserNameBanner).should("be.visible").should('have.length.greaterThan',0).click();
        
        cy.get(dashboardPageLocators.logoutButton).click();

    });

    it("Verification of error message display upon unsuccessful login",()=>{

        cy.Login(appCredentials.invalidUsername, appCredentials.invalidPassword);

        cy.get(loginPageLocators.invalidCredentialsMessageSpan).should('be.visible').should('contain',"Tester");

    });

});

