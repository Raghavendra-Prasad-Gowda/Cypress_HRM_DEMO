/// <reference types="Cypress" />

describe("Radio Button Actions",()=>{

    it("Clicking on Radio button",()=>{

        cy.visit("https://material.angularjs.org/latest/demo/radioButton");

        cy.get("md-radio-button[aria-label='avatar 3']").click({force:true});

        cy.get("[aria-label='Gabriel García Márquez']").contains("Gabriel García Márquez").click({force:true});

        cy.get("md-radio-button[value='Apple']").click({force:true});

    });


})