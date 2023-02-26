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


describe("Go to book detail page", () => {
    it("Visit book detail page", () => {
        cy.visit("http://localhost:3000/books/all")
        cy.contains('Detail').click()
    })
})

describe("Test Back to books button in book detail", () => {
    it("Try to go back from detail page to all books page", () => {
        cy.visit("http://localhost:3000/books/all")
        cy.contains('Detail').click()
        cy.contains("Návrat na knihy").click();
    })
})


describe("Try to find book", () => {
    it("Test book searchbar for finding specific book", () => {
        return;
    })
})