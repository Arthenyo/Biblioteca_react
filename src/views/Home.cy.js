import React from 'react';
import Home from './Home';
import { BrowserRouter as Route } from 'react-router-dom';

describe('<Home />', () => {
  beforeEach(() => {
    cy.mount(
      <Route>
        <Home />
      </Route>
    );
  });

  it('Exibir mensagem de boas-vindas com o nome do usuário', () => {
    const usuarioLogado = { nome: 'Arthenyo Carlos' };
    localStorage.setItem('user', JSON.stringify(usuarioLogado));
    cy.reload();
    cy.contains(`Seja Bem Vindo ${usuarioLogado.nome}`).should('be.visible');
  });

  it('Redirecionar para a página de login se o usuário não estiver logado', () => {
    localStorage.removeItem('user');
    cy.reload();
    cy.url().should('include', '/login');
  });

  it('Mostrar a navegação correta para as outras páginas', () => {
    cy.get("[data-cy=btn-home]").should('be.visible');
    cy.get("[data-cy=btn-livros]").should('be.visible');
    cy.get("[data-cy=btn-usuarios]").should('be.visible');
    cy.get("[data-cy=btn-emprestimo]").should('be.visible');
    cy.get("[data-cy=btn-devolucao]").should('be.visible');
    cy.get("[data-cy=btn-sair]").should('be.visible');
    cy.get("[data-cy=btn-livros]").click();
    cy.url().should('include', '/livros');
  });
});
