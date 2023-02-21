describe("Testing homepage page", () => {
  it("Visit spst homepage", () => {
    cy.visit("http://localhost:3000");
  });
});

describe("Visit Main SPST Page", () => {
    it("Visit spst page", () => {
        cy.visit("https://www.spsbj.sk/")
    })
})