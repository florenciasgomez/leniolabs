describe('Test Suit 1: Sign in', () => {

    it('TC 1 - Validate user is able to sign-in succesfully with valid credentials', () => {
        cy.signInPage()
        cy.signIn()
        cy.url().should('include', '/inventory')
    })
})