# Prova de Conceito (PoC) com Playwright

Este repositório contém uma prova de conceito para automação de testes end-to-end utilizando o framework Playwright.

O cenário de teste implementado simula a jornada de um usuário em um site de e-commerce, incluindo a pesquisa por um produto e sua adição ao carrinho de compras.

## Pré-requisitos

*   [Node.js](https://nodejs.org/en/) instalado.
*   Navegadores web para os testes (Chromium, Firefox, WebKit) que são gerenciados pelo Playwright.

## Instalação

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/DiegoSuzuki/PoC_Playwright.git
    cd PoC_Playwright
    ```

2.  **Instale as dependências do projeto:**
    ```bash
    npm install
    ```

3.  **Instale os navegadores do Playwright:**
    Este comando fará o download dos navegadores necessários para os testes.
    ```bash
    npx playwright install
    ```

## Executando os Testes

Para executar os testes de ponta a ponta, utilize o seguinte comando:

```bash
npx playwright test
```

Este comando irá executar todos os arquivos de teste (`.spec.js`) presentes no projeto.

## Visualizando os Relatórios

Após a execução dos testes, você pode visualizar um relatório detalhado com o comando:

```bash
npx playwright show-report
```

## Estrutura do Projeto

*   `e2e/`: Contém os arquivos de teste de ponta a ponta.
    *   `ComprarProduto.spec.js`: Arquivo com o cenário de teste principal.
    *   `pages/`: Contém a implementação do padrão Page Object Model (POM). Cada arquivo representa uma página da aplicação e seus elementos/ações.
*   `playwright.config.js`: Arquivo de configuração do Playwright.
*   `package.json`: Define as dependências e metadados do projeto.
