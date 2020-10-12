/// <reference types="Cypress" />

describe("API Automation Test Cases",()=>{

    it.only("GET Request Demo",()=>{

        cy.request('GET',"https://reqres.in/api/users?page=2").then((response)=>{
            expect(response.status).equal(200);

            let a=[];

            for(let i=0;i<response.body.data.length;i++){
                // expect(response.body.data[0].last_name).equal("Lawson")

                //cy.log(response.body.data[i].last_name);
                a.push(response.body.data[i].last_name)
            }

            cy.log(a[0])
            

        })

    });


    it("Loop Tester", ()=>{

        cy.visit("https://google.com");


        const words=[{searchword:"Pastman"},{searchword:"raghu"}]

        cy.wrap(words).each(words=>{

            cy.get("input[title='Search']").type(words.searchword);

        });

        



    });


})