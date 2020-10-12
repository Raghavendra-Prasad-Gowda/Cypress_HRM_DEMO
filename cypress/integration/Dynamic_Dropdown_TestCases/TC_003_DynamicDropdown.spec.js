/// <reference types="Cypress" />

const dynamicDropdownObject = require('../../pageObjects/dynamicDropdownPageObjects.json')



describe("Dynamic Dropdown Functionality Verification",()=>{

    before(()=>{
        cy.visit("https://demo.rsjoomla.com/rsformpro/form-examples/dynamic-drop-down-change-form-example.html");
    });

    it("Booking an car service Appointment using Dynamic Dropdown",()=>{
        var carManufacturer="SEAT";
        cy.get(dynamicDropdownObject.carManufacturer).select(carManufacturer);

        var carModel="Leon";
        cy.get(dynamicDropdownObject.carModel).select(carModel);


        var serviceType="Repair Damaged Vehicle";
        cy.get(dynamicDropdownObject.requiredService).select(serviceType);

        cy.get(dynamicDropdownObject.submitButton).click();

        cy.wait(4000);

        cy.get(dynamicDropdownObject.appointmentMessage).should('be.visible').should('contain',"You have requested " + serviceType +" for your "+ carManufacturer+" "+carModel);

        cy.get(dynamicDropdownObject.continueButton).click();

    });


})