describe('Testa navegação para página de elementos interativos', () => {
    it('Deve navegar corretamente para página de elementos interativos', () => {
        cy.visit('https://leoportogtr86.github.io/cy-play/');
        cy.get('nav a').contains('Elementos Interativos').click();
        cy.url().should('include', 'interactive.html');
    });
});
