/// <reference types="Cypress" />

const radiobuttonLocators = require('../../pageObjects/radiobuttonPageObjects.json')

describe("Radio Button Actions",()=>{

    it("Clicking on Radio button",()=>{

        cy.visit("https://www.demoqa.com/automation-practice-form");

        cy.get("input[id='firstName']").type('Amar');

        cy.get("#lastName").type('Nanjangud');


        cy.get("#userEmail").type('Amar@gmail.com');


        cy.get("label[for='gender-radio-1']").click();


        cy.get("#userNumber").type('8095149954');

        cy.get("#dateOfBirthInput").click();

        cy.get(".react-datepicker__month-select").select('February');
        

        cy.get(".react-datepicker__year-select").select('1994');

        cy.get("div[aria-label='Choose Sunday, February 20th, 1994']").click();


        let subjects=["Maths","Physics"]

        for(let i=0;i<subjects.length;i++){

            cy.get('.subjects-auto-complete__value-container.subjects-auto-complete__value-container--is-multi.css-1hwfws3').type(subjects[i]+"{enter}");

        }

        cy.get("label[for='hobbies-checkbox-1']").click();
        
        cy.get("#currentAddress").type("Tester Tester Tester");

        cy.get('#state > .css-yk16xz-control > .css-1hwfws3').type('Rajas{enter}')

        cy.get('#stateCity-wrapper > :nth-child(3)').type('Jai{enter}')

        cy.get('#submit').click()
        
        cy.get('.modal-header').should('contain','Thanks for submitting the form');





    });


})