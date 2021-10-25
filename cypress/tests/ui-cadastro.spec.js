/// <reference types="cypress" />
describe('Cadastro', () => {
    it('Cadastro com sucesso', () => {
        cy.visit('register');

        cy.get('input[placeholder=Username]').type('Davison ChapterV');
        cy.get('input[placeholder=Email]').type('ChapterV@mailinator.com');
        cy.get('input[placeholder=Password]').type('123456');

        cy.get('button[type=submit]').click();

        cy.contains('No articles are here... yet.').should('be.visible');
    });
});