describe('Navegação no Adopet', () => {
  it('deve clicar em "Ver pets disponíveis para adoção" na página inicial', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a', 'Ver pets disponíveis para adoção').click();
  });

  it('deve testar os botões do header na página inicial', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('a[class="header__home"]').click();
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('a[class="header__message"]').click();
  });

  it('deve abrir a página de login', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/login');
  });

  it('deve abrir a página home', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/home');
  });

  it('deve clicar em "Falar com o responsável" na página home', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/home');
    cy.contains('a', 'Falar com responsável').click();
  });
});