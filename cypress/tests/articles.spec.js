/// <reference types="cypress" />

describe('Articles', () => {

    beforeEach(() => {
        cy.request({
            url: 'https://api.realworld.io/api/users/login',
            method: 'POST',
            body: {
                "user": {
                    "email": "ChapterV@mailinator.com",
                    "password": "123456"
                }
            }
        }).then(response => {
            window.localStorage.setItem('jwtToken', response.body.user.token);
        });

        cy.visit('/');
    });

    it('Cadastro de um novo artigo com sucesso', () => {

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