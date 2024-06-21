describe('Teste Tela de Conteúdo Dinâmico', () => {
    beforeEach(() => {
        cy.visit('https://leoportogtr86.github.io/cy-play/dynamic.html');
    })

    it('deve carregar conteúdo dinamicamente ao clicar no botão', () => {
        cy.get('#load-content').click();
        cy.get('#dynamic-content').should('contain.text', 'Conteúdo carregado dinamicamente!');
    });

    it('deve mostrar conteúdo extra ao clicar no botão', () => {
        cy.get('#toggle-content').click();
        cy.get('#extra-content').should('not.have.class', 'hidden');
        cy.get('#extra-content').should('contain.text', 'Este é o conteúdo extra que pode ser mostrado ou ocultado ao clicar no botão acima.');
    });

    it('deve ocultar conteúdo extra ao clicar novamente no botão', () => {
        cy.get('#toggle-content').click(); // Primeiro clique para mostrar
        cy.get('#toggle-content').click(); // Segundo clique para ocultar
        cy.get('#extra-content').should('have.class', 'hidden');
    });

    it('deve exibir a tooltip ao passar o mouse sobre o elemento', () => {
        cy.get('#hover-box').trigger('mouseover');
        cy.get('#hover-box .tooltiptext').should('have.css', 'visibility', 'visible');
        cy.get('#hover-box .tooltiptext').should('have.css', 'opacity', '1');
    });

    it('deve ocultar a tooltip ao remover o mouse do elemento', () => {
        cy.get('#hover-box').trigger('mouseover');
        cy.get('#hover-box').trigger('mouseout');
        cy.get('#hover-box .tooltiptext').should('have.css', 'visibility', 'hidden');
        cy.get('#hover-box .tooltiptext').should('have.css', 'opacity', '0');
    });
});
