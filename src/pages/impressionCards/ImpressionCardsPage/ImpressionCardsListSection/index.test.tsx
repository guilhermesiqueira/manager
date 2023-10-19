import React from "react";
import { screen } from "@testing-library/react";
import { renderComponent } from "config/testUtils";

import ImpressionCardsListSection from ".";

describe("TreasureSection", () => {
  it("should render without error", () => {
    renderComponent(<ImpressionCardsListSection />);

    expect(screen.getByText("ID")).toBeInTheDocument();
    expect(screen.getByText("Headline")).toBeInTheDocument();
    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Description")).toBeInTheDocument();
  });
});
