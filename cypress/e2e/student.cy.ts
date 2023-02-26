describe("Go to student login page", () => {
    it("Visit category page", () => {
        cy.visit("http://localhost:3000/student/login")
    })
})

describe("Go to student register page", () => {
    it("Visit category page", () => {
        cy.visit("http://localhost:3000/student/register")
    })
})