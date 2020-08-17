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

    it('should click on Poetry Category', () => {
        cy.get('a')
            .contains('Poetry')
            .click()
        cy.get('h1')
            .contains('Poetry')
    })

    // Open Olio Book
    it('should click on Olio Book', () => {
        cy.get('a')
            .contains('Olio')
            .click()
        cy.get('h1')
            .contains('Olio')
    })
    // Validate Price 23.88
    it('should validate the price', () => {
        cy.get('.price_color')
            .contains('£23.88')
    })
})
