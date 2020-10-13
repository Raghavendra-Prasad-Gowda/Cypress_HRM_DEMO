/// <reference types="Cypress" />

import utilMethods from '../../../utilMethods/util'
const utilityMethods = new utilMethods();

const loginPageLocators = require ('../../../pageObjects/loginPageObjects.json');
const dashboardPageLocators = require('../../../pageObjects/dashboardPageObjects.json');
const addEmployeePageLocators= require('../../../pageObjects/addEmployeeObjects.json');
const employeeListPageLocators = require ('../../../pageObjects/employeeListPage.json');


describe("Add Employee Functionality Verification", ()=>{

    beforeEach(()=>{

        let userDetails;

        //Open the Home Page URL of HRM Website
        cy.visit("/");

        cy.fixture('appCredentials').then((userValues)=>{
            userDetails=userValues;
        });

    });


    it("Verify Add Employee Functionality",()=>{

        //Login to the HRM Demo Website with Valid Username and Password
        cy.Login(userDetails.validUsername, userDetails.validPassword,loginPageLocators.usernameTextbox, loginPageLocators.passwordTextbox, loginPageLocators.loginButton);

        //Click on PIM Module
        cy.get(dashboardPageLocators.pimModule).should('be.visible').click();

        //Click on Add Employee Tab
        cy.get(addEmployeePageLocators.addEmployeeTab).click({force: true});

        //Enter FirstName
        var firstName= utilityMethods.randomString(6, "lowerCase");
        cy.get(addEmployeePageLocators.firstNameTextbox).type(firstName);

        //Enter Middle Name
        var middleName=utilityMethods.randomString(6, "lowerCase")
        cy.get(addEmployeePageLocators.middleNameTextbox).type(middleName);

        //Enter Last Name
        cy.get(addEmployeePageLocators.lastNameTextbox).type(utilityMethods.randomString(6, "lowerCase"));

        //Select CreateLogin Check Box
        cy.get(addEmployeePageLocators.createLoginCheckbox).check();

        //Enter Username
        cy.get(addEmployeePageLocators.userNameTextbox).type(utilityMethods.randomString(6, "lowerCase"));

        //Enter Password
        var password=utilityMethods.randomString(9, "alphaNumeric")
        cy.get(addEmployeePageLocators.passwordTextbox).type(password);

        //Retype the Password
        cy.get(addEmployeePageLocators.confirmPasswordTextbox).type(password);

        //Select the Status Value from Dropdown
        cy.get(addEmployeePageLocators.statusDropdown).select("Enabled");

        //Click on Save Button
        cy.get(addEmployeePageLocators.saveButton).should('be.visible').click();
        cy.get(dashboardPageLocators.pimModule).should('be.visible').click();

        //Click on Employee List
        cy.get(employeeListPageLocators.employeeListTab).click({force: true});

        //Enter the First Name in Employee SearchTextBox
        cy.wait(5000)
        cy.get(employeeListPageLocators.employeeNameSearchTextbox).type(firstName);

        //Click on Search Button
        cy.get(employeeListPageLocators.searchButton).should('be.visible').click();

        //Verifying if the Employee is added
        cy.get(employeeListPageLocators.firstNameValueInFirstResult).should('be.visible').should('contain',firstName+" "+middleName);

        //Validate the display of Username 
        cy.get(dashboardPageLocators.welcomeUserNameBanner).should('be.visible').click();
        
        //Click on Logout button
        cy.get(dashboardPageLocators.logoutButton).click();

    });


    

});