describe('template spec', () => {
  it('passes', () => {
    //using data-test
    cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click(); //id of the button component
  });
  it('passes', () => {
    //using id
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('locked_out_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click(); //id of the button component
  });
  it('passes', () => {
    //using id
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('problem_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click(); //id of the button component
  });
  it('passes', () => {
    //using data-test
    cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="username"]').type('performance_glitch_user');
    cy.get('[data-test="password"]').type('secret_sauce');
});
it('fails for wrong password', () => {
  //using data-test
  cy.visit('https://www.saucedemo.com/');
  cy.get('[data-test="username"]').type('performance_glitch_user');
  cy.get('[data-test="password"]').type('secret_sauc');
});
it('fails for wrong username', () => {
  //using data-test
  cy.visit('https://www.saucedemo.com/');
  cy.get('[data-test="username"]').type('performanceglitch_user');
  cy.get('[data-test="password"]').type('secret_sauce');
});
})