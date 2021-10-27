/// <reference types="cypress" />
/// <reference types="../support/" />
import articles from '../support/pages/articles'

describe('Articles', () => {
  beforeEach(() => {
    cy.login()

    cy.visit('/')
  })

  it('Cadastro de um novo artigo com sucesso', () => {
    articles.acessarFormulario()

    articles.preencherFormulario()

    articles.verificarSeOArtigoFoiCriado()
  })
})
