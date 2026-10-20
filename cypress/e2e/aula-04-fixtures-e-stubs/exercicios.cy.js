describe('Exercício 1 - Api Adopet', () => {
  const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMTY0M2NkNi03MTEyLTQxNWItOTVkMi0wNzkwNGIwZDFhMWMiLCJhZG9wdGVyTmFtZSI6IkFuYSBkZSBKZXN1cyIsImlhdCI6MTc5MjUwOTgyNCwiZXhwIjoxNzkyNzY5MDI0fQ.rjw6efMtd_2fdsc4dxYyC-vBTDm_yvos_gs_IpECqUA`;

  it('Nome do perfil', () => {
    cy.request({
      method: 'GET',
      url: 'https://adopet-api-i8qu.onrender.com/adotante/perfil/11643cd6-7112-415b-95d2-07904b0d1a1c',
      headers: { authorization },
    }).then((res) => {
      expect(res.status).to.be.equal(200);
      expect(res.body).is.not.empty;
      expect(res.body).to.have.property('perfil');
      expect(res.body.perfil.nome).to.be.equal('Ana de Jesus');
    });
  });
});

describe('Exercícios 2 e 3 - Página de exemplos do Cypress (lista de tarefas)', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/todo');
    cy.contains('Pay electric bill').parent().find('input[type=checkbox]').check();
  });

  it('Exercício 2: consegue deletar as tarefas concluídas', () => {
    cy.contains('Clear completed').click();
    cy.get('.todo-list li')
      .should('have.length', 1)
      .should('not.have.text', 'Pay electric bill');
    cy.contains('Clear completed').should('not.exist');
  });

  it('Exercício 3: consegue filtrar as tarefas concluídas', () => {
    cy.contains('Completed').click();
    cy.get('.todo-list li')
      .should('have.length', 1)
      .first()
      .should('have.text', 'Pay electric bill');
    cy.contains('Walk the dog').should('not.exist');
  });
});
