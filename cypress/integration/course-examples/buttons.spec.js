describe('Browser Actions - Buttons', () => {
    it('should load books website', () => {
        cy.visit('https://books.toscrape.com/index.html', { timeout: 10000})
        cy.url().should('include', 'index.html')
    })

    it('should click on Travel Category', () => {
        cy.get('a')
            .contains('Travel')
            .click()
        cy.get('h1').contains('Travel')
    })
});