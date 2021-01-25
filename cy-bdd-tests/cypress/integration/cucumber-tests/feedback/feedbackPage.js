const URL = 'http://zero.webappsecurity.com/feedback.html'
const NAME_INPUT = '#name'
const EMAIL_INPUT = ' #email'
const SUBJECT_INPUT = '#subject'
const COMMENT_INPUT = '#comment'
const SUBMIT_BUTTON = 'input[name="submit"]'

class FeedbackPage {
    static visit() {
        cy.visit(URL)
    }

    static fillFeedbackForm() {
        cy.get(NAME_INPUT).type('Dario')
        cy.get(EMAIL_INPUT).type('dario@test.com')
        cy.get(SUBJECT_INPUT).type('Test Feedback')
        cy.get(COMMENT_INPUT).type('test')
    }

    static submitFeedback() {
        cy.get(SUBMIT_BUTTON).click()
    }
}

export default FeedbackPage