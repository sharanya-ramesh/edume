/// <reference types="Cypress" />

describe('My first test suite',function()
{

    before(function(){
        //runs once before all tests in the block
        cy.fixture('login').then(function(data)
        {
            this.data=data     //making the data variable globally accessible 

        })
    })

it('My FirstTestCase',function() {
    cy.visit('https://deathstar-qa-candidate-test.herokuapp.com/')
    cy.get('.styles_input__xphjl').type(this.data.Email)
    cy.get('.styles_primary__hk7t8').click() 
    cy.wait(2000)
    cy.get('.styles_input__xphjl').type(this.data.Password)
    cy.wait(2000)
    cy.get('.styles_primary__hk7t8').click()
})
})


    
