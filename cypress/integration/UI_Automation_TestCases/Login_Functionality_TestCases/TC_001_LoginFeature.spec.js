/// <reference types="Cypress" />

const loginPageLocators = require ('../../../pageObjects/loginPageObjects.json');
const dashboardPageLocators = require('../../../pageObjects/dashboardPageObjects.json');
//const appCredentials = require('../../../fixtures/appCredentials.json');

describe("Login Functionality Verification", ()=>{

    let userDetails;

    beforeEach(()=>{

        //Open the Home Page URL of HRM Website
        cy.visit("/");

        cy.fixture('appCredentials').then((userValues)=>{
            userDetails=userValues;
        });

    });


    it("Successful Login Functionality Verification",()=>{

        //Login to the HRM Demo Website with Valid Username and Password
        cy.Login(userDetails.validUsername,  userDetails.validPassword,  loginPageLocators.usernameTextbox, loginPageLocators.passwordTextbox, loginPageLocators.loginButton);

        //Validate the display of Username 
        cy.get(dashboardPageLocators.welcomeUserNameBanner).should("be.visible").should('have.length.greaterThan',0).click();
        
        //Click on Logout button
        cy.get(dashboardPageLocators.logoutButton).click();

    });

    it("Verification of error message display upon unsuccessful login",()=>{

        //Login to the HRM Demo Website with Valid Username and Password
        cy.Login(userDetails.invalidUsername, userDetails.invalidPassword, loginPageLocators.usernameTextbox, loginPageLocators.passwordTextbox, loginPageLocators.loginButton);

        //Verifying the error message display 
        cy.get(loginPageLocators.invalidCredentialsMessageSpan).should('be.visible').should('contain',"Tester");

    });

});

