describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

describe("Visit SPST page", () => {
  it("Go to spstbj page", () => {
    cy.visit("https://www.spsbj.sk/");
  })
})