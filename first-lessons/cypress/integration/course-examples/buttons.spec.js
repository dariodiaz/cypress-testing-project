describe('Browser Actions - Buttons', () => {
    it('should load books website', () => {
        cy.visit('https://books.toscrape.com/index.html', { timeout: 10000})
        cy.url()
            .should('include', 'index.html')
        cy.log('Before reload')
        cy.reload()
        cy.log('After reload')
    })

    it('should click on Travel Category', () => {
        cy.get('a')
            .contains('Travel')
            .click()
        cy.get('h1')
            .contains('Travel')
    })

    it('should displaye correct numbers of books', () => {
        cy.get('.product_pod')
            .its('length')
            .should('eq', 11)
    })

    it('should click on poetry category', () => {
        cy.get('a')
            .contains('Poetry')
            .click()
    })

    it('should click on Olio book detail', () => {
        cy.get('a')
            .contains('Olio')
            .click()
    })

    it('should have correct price tag', () => {
        cy.get('.price_color')
            .contains('£23.88')
    })
})

