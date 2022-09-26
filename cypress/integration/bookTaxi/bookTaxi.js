const { Given, Then, When } = require('cypress-cucumber-preprocessor/steps');

Given('I open the app', () => {
    cy.visit('/');
});

Given('provide a destination', () => {
    cy.get('form').findByLabelText('Destination').type('Fabrika48', {
        delay: 250,
    });
});

When('I book a ride', () => {
    cy.get('form').findByRole('button', { name: 'Book a ride' }).click();
});

Then('I see my booking confirmation', () => {
    cy.get('form').should('not.exist');
    cy.contains('It is confirmed!').should('be.visible');
});
