describe('Logout functionality', () => {
  it('Logs out successfully', () => {
    cy.visit('http://localhost:3000/login');
    cy.get('#Username').type('test@test.com');
    cy.get('#Password').type('test123');
    cy.get('[data-testid="button"]').click();
    cy.get('button[type="button"]').click();
    cy.url().should('eq', 'http://localhost:3000/');
  });
});
