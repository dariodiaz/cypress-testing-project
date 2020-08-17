describe('Browser Actions - Buttons', () => {
    it('should load books website', () => {
        cy.visit('https://books.toscrape.com/index.html', { timeout: 10000})
        cy.url()
            .should('include', 'index.html')
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
})

describe('Challenge to review what we have learned so far', () => {
    it('should load books website', () => {
        cy.visit('https://books.toscrape.com/index.html', { timeout: 10000})
        cy.url()
            .should('include', 'index.html')
    })
    // Go to Poetry Category
    // Open Olio Book
    // Validate Price 23.88
});
