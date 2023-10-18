import React from "react";
import { screen } from "@testing-library/react";
import { renderComponent } from "config/testUtils";

import ImpressionCardsPage from ".";

describe("CausesPage", () => {
  it("should render without error", () => {
    renderComponent(<ImpressionCardsPage />);

    expect(screen.getByText("Impression cards")).toBeInTheDocument();
  });
});
