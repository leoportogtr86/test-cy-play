describe('Teste da Página de Navegação', () => {
    beforeEach(() => {
        cy.visit('https://leoportogtr86.github.io/cy-play/navigation.html');
    })

    it('deve exibir o título correto', () => {
        cy.get('h1').should('contain.text', 'Cypress Playground - Automação VOX');
    });

    it('deve exibir a seção de navegação com o texto correto', () => {
        cy.get('#navigation').should('be.visible');
        cy.get('#navigation h2').should('contain.text', 'Navegação');
    });

    it('deve navegar para a página inicial', () => {
        cy.get('nav a').contains('Home').click();
        cy.url().should('include', 'index.html');
    });

    it('deve navegar para a página de formulários', () => {
        cy.get('nav a').contains('Formulários').click();
        cy.url().should('include', 'forms.html');
    });

    it('deve navegar para a página de elementos interativos', () => {
        cy.get('nav a').contains('Elementos Interativos').click();
        cy.url().should('include', 'interactive.html');
    });
});
