import { Given, Then } from 'cypress-cucumber-preprocessor/steps';


Given('first test', () => {
    cy.visit('/');
    cy.title().should('include', 'Angular');
    cy.wait(2000);
});

Then('loads examples', () => {
  cy.visit('www.google.com');
  cy.contains('userId');
});
