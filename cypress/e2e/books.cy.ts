describe("Go to books page", () => {
    it("Visit book page", () => {
        cy.visit("http://localhost:3000/books/all")
    })
})

describe("Go to books search page", () => {
    it("Visit book search page", () => {
        cy.visit("http://localhost:3000/books/search")
    })
})

describe("Go to books detail page", () => {
    it("Go to books detail page", () => {
        return;
    })
})