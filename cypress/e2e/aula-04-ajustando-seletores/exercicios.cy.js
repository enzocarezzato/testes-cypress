describe('Exercícios da aula 04 - Página principal do Adopet', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
  });

  it('Exercício 2: deve ter o título "AdoPet" no html', () => {
    cy.get('title').should('contain', 'AdoPet');
  });

  it('Exercício 3: deve exibir o texto "Quem ama adota!"', () => {
    cy.contains('Quem ama adota!').should('be.visible');
  });

  it('Exercício 4: deve exibir o texto de boas-vindas sobre adoção', () => {
    cy.contains('Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!').should('be.visible');
  });

  it('Exercício 5: deve fazer login a partir do ícone de mensagem no header', () => {
    cy.get('a[class="header__message"]').click();
    cy.get('[data-test="input-loginEmail"]').type('ana@email.com');
    cy.get('[data-test="input-loginPassword"]').type('Senha123');
    cy.get('[data-test="submit-button"]').click();
  });
});
