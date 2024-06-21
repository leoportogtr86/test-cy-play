describe('Teste de Formulário', () => {
    beforeEach(() => {
        cy.visit('https://leoportogtr86.github.io/cy-play/forms.html');
    })

    it('deve preencher o campo de texto corretamente', () => {
        cy.get('#text').type('Teste de Texto');
        cy.get('#text').should('have.value', 'Teste de Texto');
    });

    it('deve preencher o campo de senha corretamente', () => {
        cy.get('#password').type('senha123');
        cy.get('#password').should('have.value', 'senha123');
    });

    it('deve selecionar a opção correta no campo de seleção', () => {
        cy.get('#select').select('Opção 2');
        cy.get('#select').should('have.value', 'option2');
    });

    it('deve submeter o formulário corretamente', () => {
        cy.get('#text').type('Teste de Submissão');
        cy.get('#password').type('senha123');
        cy.get('#number').type('123');
        cy.get('#date').type('2023-05-01');
        cy.get('#select').select('Opção 1');
        cy.get('#sample-form').submit();
    });

    it('deve resetar o formulário corretamente', () => {
        cy.get('#text').type('Teste de Reset');
        cy.get('#password').type('senha123');
        cy.get('#number').type('123');
        cy.get('#date').type('2023-05-01');
        cy.get('#select').select('Opção 3');
        cy.get('input[type="reset"]').click();
        cy.get('#text').should('have.value', '');
        cy.get('#password').should('have.value', '');
        cy.get('#number').should('have.value', '');
        cy.get('#date').should('have.value', '');
        cy.get('#select').should('have.value', 'option1');
    });
});
