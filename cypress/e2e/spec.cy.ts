describe('My Angular 14 Project', () => {
  it('Visits the initial project page', () => {
    cy.visit('/');
    cy.contains('standalone works!');
    cy.contains('https://ServiceAEndPoint');
  });

  it('Open side nav', () => {
    cy.get('.nav-open').click();
  });

  it('Open secound page', () => {
    cy.get('.menu-list')
      .children()
      .filter('button')
      .contains('Second Component')
      .click();
  });

  it('Close side nav', () => {
    cy.get('.nav-open').click();
  });

  it('New route Should open Second Component', () => {
    cy.contains('standalone2 works!');
    cy.contains('https://ServiceBEndPoint');
  });
});
