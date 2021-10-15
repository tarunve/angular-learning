it('loads examples', () => {
  cy.window().then(()=> {
      cy.visit('/')
  });
  cy.contains('userId')
});
