# Testes E2E com Cypress: Adopet

Projeto de automação de testes end-to-end desenvolvido durante o curso **Cypress: automatizando testes E2E**, da Alura, parte da Carreira QA. Os testes rodam sobre o **Adopet**, uma aplicação web de adoção de pets usada no curso: [adopet-frontend-cypress.vercel.app](https://adopet-frontend-cypress.vercel.app/).

O repositório foi organizado por aula, com um commit para cada etapa concluída e prints de evidência de cada execução.

## Tecnologias

- [Cypress](https://www.cypress.io/) 13
- JavaScript
- [Mochawesome](https://github.com/adamgruber/mochawesome) para relatórios em HTML e JSON
- Cypress Cloud para centralizar execuções e Test Replay
- Git e GitHub

## O que foi testado

| Aula | Pasta | Conteúdo |
|---|---|---|
| 01 | `aula-01-visitando-adopet` | Primeiro teste: abrir a página inicial |
| 01 | `aula-01-localizando-elementos` | Seletores, cadastro e navegação entre páginas |
| 02 | `aula-02-automatizando-cenarios` | Caminho feliz e caminho triste de cadastro e login, seletores `data-test`, asserções e `beforeEach` |
| 03 | `aula-03-comandos-personalizados` | Comandos personalizados `cy.login` e `cy.cadastrar`, modo headless, vídeo, relatórios e Cypress Cloud |
| 04 | `aula-04-fixtures-e-stubs` | Stub de API com `cy.intercept`, testes de API com `cy.request` e massa de dados com fixtures |
| 05 | `aula-05-qualidade-dos-testes` | Identificação e correção de flaky test e proteção de dados sensíveis |

### Destaques

- **Caminho feliz e caminho triste:** cada fluxo tem testes para o uso correto e para mensagens de erro de campos inválidos.
- **Comandos personalizados:** os passos de login e cadastro ficam em `cypress/support/commands.js` e são reutilizados nos testes.
- **Stub de API:** o teste de login simula uma resposta `400` da API para validar a mensagem de erro do front-end sem depender do servidor.
- **Testes de API:** requisições `GET` direto na API, conferindo status, corpo da resposta e propriedades.
- **Massa de dados:** o mesmo teste de cadastro roda para vários usuários definidos em `cypress/fixtures/usuarios.json`, incluindo valores limite de senha e nomes com acento.
- **Flaky test:** o histórico de commits mostra um teste frágil criado de propósito (dependente de tempo de resposta) e a correção logo em seguida.
- **Dados sensíveis:** o token de acesso fica fora do código, em `cypress.env.json` (ignorado pelo Git), e a requisição usa `log: false` para não expor o token no log do Cypress.

## Estrutura do projeto

```
curso_cypress/
├── cypress/
│   ├── e2e/                  # testes, separados por aula
│   ├── fixtures/
│   │   └── usuarios.json     # massa de dados do cadastro
│   └── support/
│       └── commands.js       # comandos personalizados (login e cadastro)
├── docs/prints/              # evidências de execução de cada aula
├── cypress.config.js         # configuração (vídeo, Mochawesome, Cypress Cloud)
├── cypress.env.example.json  # modelo do arquivo de variáveis de ambiente
├── roteiro.md                # roteiro de testes do cadastro
└── package.json
```

## Como rodar

**Pré-requisitos:** [Node.js](https://nodejs.org/) instalado.

1. Clone o repositório e instale as dependências:
   ```
   npm install
   ```
2. Crie o arquivo de variáveis de ambiente a partir do modelo:
   - copie `cypress.env.example.json` e renomeie a cópia para `cypress.env.json`;
   - troque `SEU_TOKEN_AQUI` pelo token de um usuário logado no Adopet (no navegador: DevTools → Application → Local Storage → `token`).

   O `cypress.env.json` só é usado pelos testes de API e nunca vai para o Git.
3. Abra a interface do Cypress:
   ```
   npx cypress open
   ```
   Ou rode todos os testes no terminal, em modo headless:
   ```
   npx cypress run
   ```
   Para rodar um arquivo só:
   ```
   npx cypress run --spec "cypress/e2e/aula-02-automatizando-cenarios/login-correto.cy.js"
   ```

> No Windows com PowerShell, se o comando `npx` for bloqueado pela política de execução de scripts, use `npx.cmd`.

### Observações

- A API do Adopet fica num servidor gratuito que "dorme" sem uso. A primeira requisição pode levar mais de um minuto; se um teste falhar por tempo, rode de novo.
- O cadastro não aceita e-mail repetido. Para rodar os testes de cadastro mais de uma vez, troque os e-mails nos testes e em `usuarios.json`.
- O token de acesso expira em poucos dias. Se os testes de API falharem com `401`, gere um token novo e atualize o `cypress.env.json`.

## Evidências

Os prints de cada etapa estão em [`docs/prints`](docs/prints). Alguns exemplos:

| Teste | Print |
|---|---|
| Caminho triste do login | [aula-02-login-incorreto.png](docs/prints/aula-02-login-incorreto.png) |
| Relatório Mochawesome | [aula-03-mochawesome-relatorio.png](docs/prints/aula-03-mochawesome-relatorio.png) |
| Test Replay no Cypress Cloud | [aula-03-cypress-cloud-replay.png](docs/prints/aula-03-cypress-cloud-replay.png) |
| Stub de erro 400 no login | [aula-04-stub-login.png](docs/prints/aula-04-stub-login.png) |
| Massa de dados no cadastro | [aula-04-massa-de-dados.png](docs/prints/aula-04-massa-de-dados.png) |
| Flaky test falhando | [aula-05-flaky-falha.png](docs/prints/aula-05-flaky-falha.png) |
| Flaky test corrigido | [aula-05-flaky-corrigido.png](docs/prints/aula-05-flaky-corrigido.png) |

## O que aprendi

**Flaky test:** é um teste que às vezes passa e às vezes falha sem nenhuma mudança no código. No curso, isso aconteceu quando o teste passou a exigir que a API respondesse dentro de um tempo sorteado. A correção foi remover a dependência de tempo e deixar o Cypress esperar a resposta automaticamente.

**Dados sensíveis:** são informações individuais que permitem acessar ou identificar uma pessoa, como tokens de acesso, senhas e dados pessoais. No Cypress, guardei o token no `cypress.env.json` (fora do Git, pelo `.gitignore`) e usei `log: false` na requisição para ele não aparecer no log dos testes.

**Falso positivo:** um teste sem asserção pode passar mesmo quando a ação falhou. Por isso os testes conferem o resultado esperado e também o que não deveria acontecer.

## Autor

**Enzo André Carezzato Brossi**
[LinkedIn](https://www.linkedin.com/in/enzo-brossi) · [GitHub](https://github.com/enzocarezzato)
