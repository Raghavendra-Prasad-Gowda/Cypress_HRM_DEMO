/// <reference types="Cypress" />

const radiobuttonLocators = require('../../pageObjects/radiobuttonPageObjects.json')

describe("Radio Button Actions",()=>{

    it("Clicking on Radio button",()=>{

        cy.visit("https://material.angularjs.org/latest/demo/radioButton");

        cy.get(radiobuttonLocators.avatarRadioButton).click({force:true});

        cy.get(radiobuttonLocators.ceoRadioButton).should("contain","Gabriel García Márquez").click({force:true});

        cy.get(radiobuttonLocators.fruitRadioButton).click({force:true});

    });


})

