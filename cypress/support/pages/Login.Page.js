class Login {
    get= {
        userInput: () => cy.get('#user-name'),
        passwordInput: () => cy.get('#password'),
        submitButton: () => cy.get('[type="submit"]')
    }

    enterUser(user) {
        this.get.userInput().type(user)
    }
    enterpassword(password) {
        this.get.passwordInput().type(password)
    }
    clickSubmit(){
        this.get.submitButton().click()
    }
}

export const login = new Login()
