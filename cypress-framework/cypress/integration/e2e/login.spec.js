import Navbar from '../../page-objects/components/Navbar'
import LoginPage from '../../page-objects/pages/LoginPage'
import { url, login_username, login_password } from '../../../config'

describe('Login Failed Test', () => {
    before(function() {
        cy.visit(url)
        Navbar.clickSignIn()
    })

    it('should try to login with invalid credentials', () => {
        LoginPage.login('invalid user', 'invalid password')
    })

    it('should display error message', () => {
        LoginPage.displayErrorMessage()
    })
})


describe('Login Successful Test', () => {
    before(function() {
        cy.visit(url)
        Navbar.clickSignIn()
    })

    it('should login into application', () => {
        LoginPage.login(login_username, login_password)
    })

    it('should logout from application', () => {
        Navbar.logout()
        Navbar.displaySignInButton()
    })
})