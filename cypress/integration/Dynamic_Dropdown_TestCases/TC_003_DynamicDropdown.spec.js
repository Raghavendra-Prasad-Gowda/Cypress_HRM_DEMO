/// <reference types="Cypress" />

describe("Dynamic Dropdown Functionality Verification",()=>{

    it("Booking an car service Appointment using Dynamic Dropdown",()=>{

        cy.visit("https://demo.rsjoomla.com/rsformpro/form-examples/dynamic-drop-down-change-form-example.html");

        
        var carManufacturer="SEAT";
        cy.get("select[id='Car Manufacturer']").select(carManufacturer);


        var carModel="Leon";
        cy.get("select[id='SEAT']").select(carModel);

        

        var serviceType="Repair Damaged Vehicle";
        cy.get("select[id='Requested Service']").select(serviceType);

        cy.get("input[id='Submit']").click();

        cy.get("main[id='content'] > p").should('be.visible').contains("You have requested " + serviceType +" for your "+ carManufacturer+" "+carModel);

        cy.get("button[name='continue']").click();



    });


})