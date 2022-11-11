import React from "react";
import { screen } from "@testing-library/react";
import { renderComponent } from "config/testUtils";

import CausesPage from ".";

describe("CausesPage", () => {
  it("should render without error", () => {
    renderComponent(<CausesPage />);

    expect(screen.getByText("Causes List")).toBeInTheDocument();
  });
});
