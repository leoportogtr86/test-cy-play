describe('Testa seção de boas vindas', () => {
    it('Deve exibir corretamente a seção de boas vindas', () => {
        cy.visit('https://leoportogtr86.github.io/cy-play/');
        cy.get('#home').should('be.visible');
        cy.get('#home h2').should('contain.text', 'Bem-vindo ao Cypress Playground');
        cy.get('#home p').should('contain.text', 'Use os links acima para navegar pelas diferentes seções e testar suas habilidades com Cypress.');
    });
});
