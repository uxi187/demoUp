/// <reference types="Cypress" />
import { Google as google } from '../Pages/Google.page'

describe("Google Image tests", () => {

    beforeEach(() => {
        cy.visit("https://images.google.com/?gl=us")
    })


    it("Check Google Imagine page elements", () => {

        //check site title
        cy.title().should('eq', 'Google Images')

        //check for magnifier icon
        cy.get(google.selectors.magnifier).should('be.visible')

        //check for input field
        cy.get(google.selectors.search)
            .should('be.visible')
            .and('have.attr', 'maxlength', '2048')

        //check serch by elements 
        cy.get(google.selectors.searchByImage)
            .should('be.visible')

        cy.get(google.selectors.searchByVoice)
            .should('be.visible')

        cy.get(google.selectors.searchBtn)
            .should('be.visible')
    })

    it("Check search criteria", () => {

        const SEARCH_CRITERIA = "Super Mario"

        //check is search criteria typed in search field
        cy.get(google.selectors.search).type(SEARCH_CRITERIA)
            .should('have.value', SEARCH_CRITERIA)

        //check suggestion
        cy.get(google.selectors.searchSuggestion)
            .should('be.visible')
          .get(google.selectors.searchSuggestionList)
            .contains(SEARCH_CRITERIA.toLocaleLowerCase())
    })

    it("Search for image", () => {
        const SEARCH_CRITERIA = "Super Mario"

        //check is search criteria typed in search field
        cy.get(google.selectors.search).type(SEARCH_CRITERIA)
            .should('have.value', SEARCH_CRITERIA)

        cy.get(google.selectors.searchBtn)
            .should('be.visible')
            .click()

        //redirections are not supported in Cypress
        // cy.get('div[data-id="GRID_STATE0"]')

    })


})
