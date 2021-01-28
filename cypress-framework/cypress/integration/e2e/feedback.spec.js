import FeedbackPage from '../../page-objects/pages/FeedbackPage'

describe('Feedback Test using Fixtures', () => {
    before(() => {
        FeedbackPage.load()
    })
    
    it('should submit the feedback form', () => {
        FeedbackPage.submitFeedback()
    })
})