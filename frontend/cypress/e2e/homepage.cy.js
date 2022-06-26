describe("renders homepage", () => {
  it("homepage rendered correctly", () => {
    cy.visit("/");
    cy.get("#pageTitle").should("exist");
  });
  it("homepage starts a request, we make sure that api returns 3 elements and less than or equal 3 are returned", () => {
    cy.intercept("POST", "/api/locations").as("firstLocations");
    cy.visit("/");
    cy.wait("@firstLocations");
    cy.get("#locationsContainer").should("exist");
    cy.get(".locationItem").its("length").should("lte", 3);
  });
  for (let i = 1; i < 6; i++) {
    it(`scrolls down to the end of the page n°${i}`, () => {
      cy.intercept("POST", "/api/locations").as("newLocations");
      cy.scrollTo(0, 5000);
      cy.get("#loadingCircularProgress").should("exist");
      cy.wait("@newLocations");
      cy.get("#loadingCircularProgress").should("not.exist");
      cy.get(".locationItem")
        .its("length")
        .should("lte", 3 * i + 3);
    });
  }
});
