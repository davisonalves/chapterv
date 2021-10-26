const el = require('./elements').ELEMENTS
const articleName = 'Artigo de testes' + new Date().getTime();

class Articles {

    acessarFormulario(){
        cy.get(el.linkNovoArtigo).click(); //tudo que contenha editor
    }
    
    preencherFormulario(){
        cy.get(el.inputTitle).type(articleName); //tudo que termine com title
        cy.get(el.inputDescription).type('Descrição do artigo de testes'); 
        cy.get(el.inputBody).type('Corpo do texto do artigo de testes'); 
        cy.get(el.inputTags).type('cypress'); 
    }

    submeterFormulario(){
        cy.contains('button', 'Publish Article').click();
    }
    
    verificarSeOArtigoFoiCriado(){
        cy.get('h1').should('have.text', articleName);
    }
    
}

export default new Articles()