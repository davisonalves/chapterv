/// <reference types="cypress" />
describe('Cadastro', () => {
  it('Cadastro com sucesso', () => {
    cy.intercept({
      method: 'POST',
      path: '/api/users'
    }, {
      statusCode: 200,
      fixture: 'cadastro-com-sucesso'
    }).as('postUsers')

    cy.visit('register')

    cy.get('input[placeholder=Username]').type('Davison ChapterV')
    cy.get('input[placeholder=Email]').type('ChapterV@mailinator.com')
    cy.get('input[placeholder=Password]').type('123456')

    cy.get('button[type=submit]').click()

    cy.contains('No articles are here... yet.').should('be.visible')
  })

  it('Cadastro com usuário já existente', () => {
    cy.intercept({
      method: 'POST',
      path: '/api/users'
    }, {
      statusCode: 422,
      fixture: 'cadastro-usuario-existente'
    }).as('postUsers')

    cy.visit('register')

    cy.get('input[placeholder=Username]').type('Davison ChapterV')
    cy.get('input[placeholder=Email]').type('ChapterV12@mailinator.com')
    cy.get('input[placeholder=Password]').type('123456')

    cy.get('button[type=submit]').click()

    cy.contains('username has already been taken').should('be.visible')
  })

  it('Cadastro com email ja existente', () => {
    cy.intercept({
      method: 'POST',
      path: '/api/users'
    }, {
      statusCode: 422,
      fixture: 'cadastro-email-existente'
    }).as('postUsers')

    cy.visit('register')

    cy.get('input[placeholder=Username]').type('Davison ChapterV12')
    cy.get('input[placeholder=Email]').type('ChapterV@mailinator.com')
    cy.get('input[placeholder=Password]').type('123456')

    cy.get('button[type=submit]').click()

    cy.contains('email has already been taken').should('be.visible')
  })
})
