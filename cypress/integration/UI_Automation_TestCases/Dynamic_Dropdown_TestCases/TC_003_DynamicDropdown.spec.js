/// <reference types="Cypress" />

const dynamicDropdownCLocators = require('../../../pageObjects/dynamicDropdownPageObjects.json')



describe("Dynamic Dropdown Functionality Verification",()=>{

    before(()=>{
        cy.visit("https://demo.rsjoomla.com/rsformpro/form-examples/dynamic-drop-down-change-form-example.html");
    });

    it("Booking an car service Appointment using Dynamic Dropdown",()=>{
        var carManufacturer="SEAT";
        cy.get(dynamicDropdownCLocators.carManufacturer).select(carManufacturer);

        var carModel="Leon";
        cy.get(dynamicDropdownCLocators.carModel).select(carModel);


        var serviceType="Repair Damaged Vehicle";
        cy.get(dynamicDropdownCLocators.requiredService).select(serviceType);

        cy.get(dynamicDropdownCLocators.submitButton).click();

        cy.wait(4000);

        cy.get(dynamicDropdownCLocators.appointmentMessage).should('be.visible').should('contain',"You have requested " + serviceType +" for your "+ carManufacturer+" "+carModel);

        cy.get(dynamicDropdownCLocators.continueButton).click();

    });


})