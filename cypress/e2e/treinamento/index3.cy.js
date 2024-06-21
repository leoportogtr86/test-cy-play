describe('Testa navegação para página de forms', () => {
    it('Deve navegar corretamente para página de forms', () => {
        cy.visit('https://leoportogtr86.github.io/cy-play/');
        cy.get('nav a').contains('Formulários').click();
        cy.url().should('include', 'forms.html');
    });
});
