describe("Go to categories page", () => {
    it("Visit category page", () => {
        cy.visit("http://localhost:3000/category/all")
    })
})