describe('Testa o Título da Página', () => {
    it('Deve exibir o título corretamente', () => {
        cy.visit('https://leoportogtr86.github.io/cy-play/');
        cy.get('h1').should('contain.text', 'Cypress Playground - Automação VOX');
    });
});
