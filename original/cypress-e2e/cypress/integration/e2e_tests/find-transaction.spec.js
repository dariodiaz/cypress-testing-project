describe('Find Transaction Test', () => {
	before(function() {
		cy.viewport(1024, 768)
		cy.visit('http://zero.webappsecurity.com/index.html')
		cy.get('#signin_button').click()
		cy.fixture('user').then(user => {
			const username = user.id
			const password = user.pwd
			cy.login(username, password)
		})
	})

	it('should filter transactions', () => {
		cy.get('#account_activity_tab').click()
		cy.contains('Find Transactions').click()
		cy.get('#aa_fromAmount').type('200')
		cy.get('#aa_toAmount').type('1000')
	})

	it('should display results', () => {
		cy.get('#filtered_transactions_for_account').should('be.visible')
		cy.get('#filtered_transactions_for_account > table > tbody > tr')
			.its('length')
			.should('be.gt', 0)
	})
})
