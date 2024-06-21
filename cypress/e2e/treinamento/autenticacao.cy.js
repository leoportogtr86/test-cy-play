describe('Teste de Autentação', () => {
    beforeEach(() => {
        cy.visit('https://leoportogtr86.github.io/cy-play/authentication.html');
    })

    it('deve exibir o título correto', () => {
        cy.get('h1').should('contain.text', 'Cypress Playground - Automação VOX');
    });

    it('deve realizar o login com sucesso', () => {
        cy.get('#username').type('admin');
        cy.get('#password-login').type('password123');
        cy.get('#login-form').submit();
        cy.get('#login-message').should('have.class', 'success');
        cy.get('#login-message').should('contain.text', 'Login realizado com sucesso!');
        cy.get('#logout-button').should('be.visible');
        cy.get('#login-form').should('have.class', 'hidden');
    });

    it('deve exibir mensagem de erro para credenciais inválidas', () => {
        cy.get('#username').type('usuarioerrado');
        cy.get('#password-login').type('senhaerrada');
        cy.get('#login-form').submit();
        cy.get('#login-message').should('have.class', 'error');
        cy.get('#login-message').should('contain.text', 'Usuário ou senha incorretos!');
    });

    it('deve realizar o logout corretamente', () => {
        cy.get('#username').type('admin');
        cy.get('#password-login').type('password123');
        cy.get('#login-form').submit();
        cy.get('#logout-button').click();
        cy.get('#login-message').should('have.class', 'hidden');
        cy.get('#login-form').should('not.have.class', 'hidden');
        cy.get('#logout-button').should('have.class', 'hidden');
    });

    it('deve exibir as credenciais corretas para teste', () => {
        cy.get('ul').should('contain.text', 'Usuário correto: admin');
        cy.get('ul').should('contain.text', 'Senha correta: password123');
    });
});
