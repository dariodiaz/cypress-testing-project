const URL = 'http://zero.webappsecurity.com/login.html'
const USERNAME = '#user_login'
const PASSWORD = '#user_password'
const SUBMIT_BUTTON = 'input[name="submit"]'

class LoginPage {
    static visit() {
        cy.visit(URL)
    }

    static fillUsername(name) {
        cy.get(USERNAME).type(name)
    }
    
    static fillPassword(password) {
        cy.get(PASSWORD).type(password)
    }

    static submitLogin() {
        cy.get(SUBMIT_BUTTON).click()
    }
}

export default LoginPage