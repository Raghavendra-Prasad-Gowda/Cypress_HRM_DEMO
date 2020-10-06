// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


//Login Functionality Command
Cypress.Commands.add("Login",(email, password, emailTextBoxLocator, passwordTextBoxLocator,submitButtonLocator)=>{

    //Entering the Email
    cy.get(emailTextBoxLocator).should('be.visible').type(email);

    //Entering the Password
    cy.get(passwordTextBoxLocator).should('be.visible').type(password);

    //Clicking the Submit Buttom
    cy.get(submitButtonLocator).should('be.visible').click();

})
