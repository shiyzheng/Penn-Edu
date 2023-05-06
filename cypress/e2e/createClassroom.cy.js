describe('login', () => {
  it('user should be able to create a classroom', () => {
    cy.visit('http://localhost:3000/signup');
    cy.get('#Username').type('test@test.com');
    cy.get('#Password').type('test123');
    cy.get('[data-testid="button"]').click();
    cy.visit('http://localhost:3000/Home');
    cy.get('#Title').type('Cypress Test');
    cy.get('[type="submit"]').click();
    cy.contains('Cypress Test');
  });
});
