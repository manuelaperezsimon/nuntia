import cypress from "cypress";

describe("Given a URL of nuntia", () => {
  it("Then it should visit nuntia web", () => {
    cy.visit("https://nuntia.netlify.app/");
    cy.get(".button").should("be.disabled");
    cy.get("#userName").type("Bret");
    cy.get("#password").type("hello");
    cy.get(".button").should("not.be.disabled");
    cy.get(".button").click();
  });

  it("Then it should visit the page of posts", () => {
    cy.get("h2").contains("Wow, you don't understand anything, do you?");
    cy.wait(7000);
    cy.get(".post-card__container");
    cy.get("button:first").click();
  });

  it("Then it should visit the edit page form", () => {
    cy.get("h2").contains("Edit the post!");
    cy.get("#title");
    cy.get("#body");
    cy.get("button").click();
    cy.wait(5000);
  });

  it("Then it should come back to posts page", () => {
    cy.get("h2").contains("Wow, you don't understand anything, do you?");
    cy.get(".post-card__container");
    cy.contains("Edit").click();
    cy.get("h2").contains("Edit the post!");
    cy.wait(4000);
    cy.get(".icon--close").click();
    cy.wait(4000);
  });

  it("Then it should come back to posts page and deleted the post selected", () => {
    cy.get(".post-card__container");
    cy.get(".icon-trash");
  });

  it("Then it should go to login page", () => {
    cy.get(".icon-logout").click().clearLocalStorage();
    cy.get("h2").contains("Log In");
    cy.get(".button").should("be.disabled");
    cy.get("#userName");
    cy.get("#password");
  });
});
