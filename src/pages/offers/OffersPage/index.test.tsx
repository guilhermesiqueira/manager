import React from "react";
import { screen } from "@testing-library/react";
import { renderComponent } from "config/testUtils";

import OffersPage from ".";

describe("OffersPage", () => {
  it("should render without error", () => {
    renderComponent(<OffersPage />);

    expect(screen.getByText("Offers")).toBeInTheDocument();
  });
});
