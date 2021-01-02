const pages = ['http://example.com/']
const sizes = ['iphone-6', 'ipad-2', [1200, 800]]
describe('Visual Regression', () => {
    it('My first visual regression test', () => {
        cy.visit('http://example.com/')
        cy.matchImageSnapshot()
    })
})