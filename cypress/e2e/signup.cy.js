describe('login', () => {
  it('user should be able to log in', () => {
    cy.visit('http://localhost:3000/signup');
    cy.get('#Username').type('test@test.com');
    cy.get('#Password').type('test123');
    cy.get('[data-testid="button"]').click();
    cy.contains('Welcome test@test.com').should('be.visible');
  });
});
