describe('Visual Regression Testing with Percy', () => {
    it('Should take percy snapshot', () => {
        cy.visit('https://www.example.com')
        cy.wait(1000)
        cy.percySnapshot()
    });
});