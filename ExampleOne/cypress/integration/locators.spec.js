/// <reference types="cypress" />

describe("Locators", () => {
    beforeEach(() => {
        cy.visit("/elements");
    });

    it("locating elements with get", () => {
        // Get all elements by tag name
        cy.get("button");

        // Get all elements by class name
        cy.get(".btn-with-class");

        // Get all elements by specific classes
        cy.get("[class='Elements-btn btn-with-class']");

        // Get all elements by id
        cy.get("#btn-with-id");

        // Get all elements by specific attribute
        cy.get("[type='submit']");

        // Get all elements by tag name AND class
        cy.get("button.Elements-btn");

        // Get all elements by tag name AND class AND id
        cy.get("button.Elements-btn#btn-with-id");

        // Get all elements by tag name AND class AND type attribute
        cy.get("button.Elements-btn[type='submit']");

        // Get all elements with specific test id
        cy.get("[data-cy='btn-id-1'");
        // Same as above but defined in 'commands.js
        cy.getByTestId("btn-id-1");
    });

    it("locating elements with contains", () => {
        // Get element by text
        cy.contains("Unique Text");

        // Get element by text
        cy.contains("Not Unique Text"); // "contains" get only one

        // With selector
        cy.contains("[type='submit']", "Not Unique Text");
        cy.contains("form", "Not Unique Text");
        cy.get("[type='submit']").contains("Not Unique Text");
    });

    it("locating elements with find", () => {
        // Find needs to get something before
        cy.get("#form-1").find(".btn-1");
        cy.get("#form-1").find(".btn-2");
    });
});