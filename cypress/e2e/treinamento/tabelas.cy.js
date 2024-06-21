describe('Teste de Tela de Tabelas', () => {
    beforeEach(() => {
        cy.visit('https://leoportogtr86.github.io/cy-play/tables.html');
    })

    it('deve exibir o título correto', () => {
        cy.get('h1').should('contain.text', 'Cypress Playground - Automação VOX');
    });

    it('deve exibir a tabela com as colunas corretas', () => {
        cy.get('#sample-table').should('be.visible');
        cy.get('#sample-table th').eq(0).should('contain.text', 'ID');
        cy.get('#sample-table th').eq(1).should('contain.text', 'Nome');
        cy.get('#sample-table th').eq(2).should('contain.text', 'Idade');
    });

    it('deve exibir as linhas da tabela com os dados corretos', () => {
        cy.get('#sample-table tbody tr').should('have.length', 2);
        cy.get('#sample-table tbody tr').eq(0).within(() => {
            cy.get('td').eq(0).should('contain.text', '1');
            cy.get('td').eq(1).should('contain.text', 'Alice');
            cy.get('td').eq(2).should('contain.text', '25');
        });
        cy.get('#sample-table tbody tr').eq(1).within(() => {
            cy.get('td').eq(0).should('contain.text', '2');
            cy.get('td').eq(1).should('contain.text', 'Bob');
            cy.get('td').eq(2).should('contain.text', '30');
        });
    });

    it('deve exibir a lista com os itens corretos', () => {
        cy.get('#sample-list').should('be.visible');
        cy.get('#sample-list li').should('have.length', 3);
        cy.get('#sample-list li').eq(0).should('contain.text', 'Item 1');
        cy.get('#sample-list li').eq(1).should('contain.text', 'Item 2');
        cy.get('#sample-list li').eq(2).should('contain.text', 'Item 3');
    });

    it('deve exibir a seção de tabelas e listas com o título correto', () => {
        cy.get('#tables').should('be.visible');
        cy.get('#tables h2').should('contain.text', 'Tabelas e Listas');
    });
});
