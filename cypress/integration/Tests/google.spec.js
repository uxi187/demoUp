/// <reference types="Cypress" />
import { Google as google } from '../Pages/Google.page'

describe("Google Image tests", () => {

    beforeEach(() => {
        cy.visit("https://images.google.com/?gl=us")
    })


    it("Check Google Imagine action elements", () => {

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
            .get(google.selectors.searchSuggestionList, { timeout: 3000 })
            .contains(SEARCH_CRITERIA.toLocaleLowerCase())
    })

    it("Check search by image options", () => {

        const INPUT_URL = 'https://google.com'

        cy.get(google.selectors.searchByImage).click()

        //check pop up title
        cy.get(google.selectors.imageOption.title)
            .should('have.text', 'Search by image')

        //check pop up subtitle
        cy.get(google.selectors.imageOption.subTitle)
            .should('contain.text', 'Paste image URL')
            .and('contain.text', 'Upload an image')

        //check paste url option
        cy.get(google.selectors.imageOption.inputPasteURL)
            .should('be.visible')
            .type(INPUT_URL)
            .should('have.value', INPUT_URL)

        //check close button is visible an click on it
        cy.get(google.selectors.imageOption.close)
            .should('be.visible')
            .click()

        //check dialog is not visible any more
        cy.get(google.selectors.imageOption.dialog)
            .should('not.be.visible')
    })

    it("Check page footer", () => {

        //check left footer
        cy.get(google.selectors.footer.left)
            .should('contain.text', 'Advertising')
            .and('contain.text', 'Business')
            .and('contain.text', 'About')
            .and('contain.text', 'How Search works')

        //check right footer
        cy.get(google.selectors.footer.right)
            .should('contain.text', 'Privacy')
            .and('contain.text', 'Terms')
            .and('contain.text', 'Settings')

        //check for footer link
        cy.get(google.selectors.footer.link).each($ft => {
            expect($ft).to.have.attr('href')
        })
    })

    it("Check google apps", () => {

        //check google apps
        cy.get(google.selectors.googleApps.apps)
            .should('have.attr', 'href')
            .and("include", "/about/products?");

        //check google account
        cy.get(google.selectors.googleApps.account)
            .should('have.text', 'Sign in')
            .and('have.attr', 'href')
            .and("include", "https://accounts.google.com/ServiceLogin")

    })
})
