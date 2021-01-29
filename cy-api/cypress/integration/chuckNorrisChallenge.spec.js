// API to test
// You should make a request and validate the status code
describe('REST API Test challenge', () => {
    it('API Test - Should validate the status code on the response', () => {
        cy.request('https://api.chucknorris.io/jokes/random').as('chuck')
        cy.get('@chuck')
            .its('status')
            .should('be.equal', 200)
    })
})