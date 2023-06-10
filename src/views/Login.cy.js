import React from 'react'
import Login from './Login'
import { BrowserRouter as Route } from 'react-router-dom';

describe('<Login />', () => {
  beforeEach(() => {
    cy.mount(
      <Route>
        <Login />
      </Route>
    )
  });

  it('Entrar na aplicação com credenciais corretas', () => {
    cy.get("[data-cy=input-username]").should('be.visible').type("arthenyo");
    cy.get("[data-cy=input-senha]").should('be.visible').type("123456");
  
    cy.get("[data-cy=btn-entrar]").should('be.visible').click();
  
    cy.url().should('include', '/home');
  });
  
  it('Exibir mensagem de erro ao entrar com credenciais incorretas', () => {
    cy.get("[data-cy=input-username]").should('be.visible').type("fhgfhg");
    cy.get("[data-cy=input-senha]").should('be.visible').type("145");
  
    cy.get("[data-cy=btn-entrar]").should('be.visible').click();
  
    cy.get('.toast-error').should('be.visible');
  });
  
});
