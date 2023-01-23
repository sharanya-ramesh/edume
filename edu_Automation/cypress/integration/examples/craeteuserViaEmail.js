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

it('Login the app and create a new user by adding email',function() 
{
    cy.visit(selectors.loginPage)
    cy.get(selectors.userEmail).type(this.data.Email)
    cy.get(selectors.continueButton).click() 
    cy.wait(2000)
    cy.get('.styles_input__xphjl').type(this.data.Password)
    cy.wait(2000)
    cy.get('.styles_primary__hk7t8').click()
    cy.wait(10000)
    cy.get(selectors.headerItemPeople).click()
    cy.get(selectors.clickOnPeople).click()
    cy.get(selectors.addSingleUser).click()
    cy.get(selectors.firstName).type('Sharanya')
    cy.get(selectors.lastName).type('ramesh')
    cy.get(selectors.clickOnEmailButton).click()
    cy.get(selectors.enterValidEmail).type('shartest123@gk.com')
    cy.get(selectors.otherInfoTYpeIn).type('test data 1234')
    cy.get(selectors.clickOnSelectTeams).click()
    cy.get('.styles_invalid__hk7t8').click()
    cy.get(selectors.selectAllButton).click()
    cy.get(selectors.selectButton).click()
    cy.get(selectors.addUser).click()
    cy.wait(2000)
    //cy.get('#root > div > div.src-views-styles__outerContainer__t63xn > div.src-components-core-Header-styles__headerSpacer__vo8GS > header > div.src-components-core-Header-styles__topBar__iuEa4').should('contain','Awesome! The user has been added')
})
})


    
