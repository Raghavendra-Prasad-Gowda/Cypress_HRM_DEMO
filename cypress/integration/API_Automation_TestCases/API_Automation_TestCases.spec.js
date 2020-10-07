/// <reference types="Cypress" />

describe("API Automation Test Cases",()=>{

    it("GET Request Demo",()=>{

        cy.request('GET',"https://reqres.in/api/users?page=2").then((response)=>{
            expect(response.status).equal(200);
            expect(response.body.data[0].last_name).equal("Lawson")

        })

    });


})