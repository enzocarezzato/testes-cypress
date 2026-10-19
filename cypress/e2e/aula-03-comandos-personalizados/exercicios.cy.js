describe('Exercícios da aula 03 - Comandos personalizados', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
  });

  it('Exercício 4: deve redirecionar para o login ao acessar a página de mensagem e permitir o login', () => {
    cy.get('a[class="header__message"]').click();
    cy.contains('Já tem conta? Faça seu login:').should('be.visible');
    cy.login('ana@email.com', 'Senha123');
  });

  it('Exercício 5: deve exibir as imagens dos pets na página home', () => {
    cy.get('[data-test="login-button"]').click();
    cy.login('ana@email.com', 'Senha123');
    cy.get('.cards img').should('be.visible');
  });
});
