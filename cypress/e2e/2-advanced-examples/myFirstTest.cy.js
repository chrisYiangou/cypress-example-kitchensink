/// <reference types="cypress" />

context('My First Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/commands/actions')
  })

  it('has a h1 on page', () => {
    cy.get('h1').should('exist')
  })

  it('renders the correct h1 text', () => {
    cy.get('h1').should('contain.text', 'Actions')
  })

  // Eq starts from index 0
  it('render p under within container', () => {
    cy.get('.container').eq(1).contains('h1', 'Actions').should('exist')
  })

  it('renders a section with the correct element', () => {
    cy.get('.container').eq(2).within(() => {
      cy.get('h4').should('exist')
      cy.get('p').should('exist')
    })
  })
})
