/// <reference types="Cypress" />
import * as selectors from "./createUserTestSelectors";
describe('My first test suite',function()
{

    before(function(){
        //runs once before all tests in the block
        cy.fixture('login').then(function(data)
        {
            this.data=data     //making the data variable globally accessible 

        })
    })
it('Login the app and create a new user by adding a valid phone number',function() 
{  
    cy.visit(selectors.loginPage)
    cy.get(selectors.userEmail).type(this.data.Email)
    cy.get(selectors.continueButton).click() 
    cy.wait(2000)
    cy.get(selectors.userPassword).type(this.data.Password)
    cy.wait(2000)
    cy.get(selectors.continueButton).click()
    cy.wait(10000)
    cy.get(selectors.headerItemPeople).click()
    cy.wait(2000)
    cy.get('.react-tabs__tab.last').click()
    cy.get('.src-components-peopleAndTeams-ControlBar-SearchInput-styles__input__aXHOM').click()
    cy.get('#react-tabs-3 > div > div:nth-child(1) > div > div > div.src-components-peopleAndTeams-ControlBar-styles__searchWrapper__rSxH2.src-components-peopleAndTeams-ControlBar-styles__active__gdVGK > div > div.src-components-peopleAndTeams-ControlBar-SearchInput-styles__inputWrapper__aSxfE > input').type('shar').type('{enter}')
    cy.get(':nth-child(3) > .styles_info__qdry6 > .src-components-peopleAndTeams-Members-Member-styles__container__XjsgJ > :nth-child(2) > :nth-child(1) > .styles_heading__1om0g > mark').should('include.text','Shar')


})
})

