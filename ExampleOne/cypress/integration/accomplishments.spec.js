/// <reference types="cypress" />

describe("Accomplishment dashboard", () => {
    beforeEach(() => {
        cy.visit("/accomplishments");
    });

    it("should showcase error if description is missing", () => {
        cy.get("[data-cy='accomplishment-title-input']").type("My basketball accomplishment");
        cy.get("[data-cy='accomplishment-input']").type("I made 10 threes in a row");
        cy.contains("Submit Accomplishment").click();
        cy.contains("Complete the items above to continue").should("be.visible");
    });

    it("should display validation component if all information is input", () => {
        cy.get("[data-cy='accomplishment-title-input']").type("My basketball accomplishment");
        cy.get("[data-cy='accomplishment-input']").type("I made 10 threes in a row");
        cy.get("[type='checkbox']").click();
        cy.contains("Submit Accomplishment").click();
        cy.contains("This Accomplishment was Successfully Submitted").should("be.visible");
    });

    it("should return back to component dashboard with empty inputs when 'Go Back' is clicked", () => {
        cy.get("[data-cy='accomplishment-title-input']").type("My basketball accomplishment");
        cy.get("[data-cy='accomplishment-input']").type("I made 10 threes in a row");
        cy.get("[type='checkbox']").click();
        cy.contains("Submit Accomplishment").click();
        cy.contains("Go Back").click();
        cy.contains("h2", "Accomplishment").should("be.visible");
        cy.get("[data-cy='accomplishment-title-input']").should("have.value", "");
        cy.get("[data-cy='accomplishment-input']").should("have.value", "");
        cy.get("[type='checkbox']").should("not.be.checked");
    });
});