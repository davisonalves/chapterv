/// <reference types="cypress" />

describe('Articles', () => {
    it('Cadastro de um novo artigo com sucesso', () => {
        cy.visit('login');

        cy.get('[placeholder=Email]').type('ChapterV@mailinator.com');
        cy.get('[placeholder=Password]').type('123456');
        cy.contains('button', 'Sign in').click();

        const articleName = 'Artigo de testes' + new Date().getTime();

        cy.get('[href*=editor]').click(); //tudo que contenha editor
        cy.get('[ng-model$=title]').type(articleName); //tudo que termine com title
        cy.get('[ng-model$=description]').type('Descrição do artigo de testes'); 
        cy.get('[ng-model$=body]').type('Corpo do texto do artigo de testes'); 
        cy.get('[ng-model$=tagField]').type('cypress'); 

        cy.contains('button', 'Publish Article').click();

        cy.get('h1').should('have.text', articleName);
    });
});