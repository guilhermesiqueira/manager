import React from "react";
import { screen } from "@testing-library/react";
import { renderComponent } from "config/testUtils";

import IntegrationsListSection from ".";

describe("TreasureSection", () => {
  it("should render without error", () => {
    renderComponent(<IntegrationsListSection />);

    expect(screen.getByText("ID")).toBeInTheDocument();
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Wallet address")).toBeInTheDocument();
    expect(screen.getByText("Integration address")).toBeInTheDocument();
    expect(
      screen.getByText("Integration dashboard address"),
    ).toBeInTheDocument();
  });
});
