describe('Cadastro no site Adopet', () => {
  it('deve realizar um cadastro com sucesso', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a', 'Cadastrar').click();
    cy.get('input[name="nome"]').type('Ana de Jesus');
    cy.get('input[name="email"]').type('enzo.teste.cypress@email.com');
    cy.get('input[name="password"]').type('Senha123');
    cy.get('input[name="confirm_password"]').type('Senha123');
    cy.contains('button', 'Cadastrar').click();
  });
});
