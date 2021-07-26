import { When, Then } from 'cypress-cucumber-preprocessor/steps'

When(`I visit home page`, () => {
    cy.visit('/');
})

Then(`App Title should be Angular-Express Webapp`, () => {
    cy.title().should('equal', 'Angular-Express Webapp');
})