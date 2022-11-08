import { screen } from "@testing-library/react";
import { renderComponent } from "config/testUtils";

import CausesListSection from ".";

describe("CausessListSection", () => {
  it("should render without error", () => {
    renderComponent(<CausesListSection />);

    expect(screen.getByText("Name")).toBeInTheDocument();

    expect(screen.getByText("Token")).toBeInTheDocument();
    expect(
      screen.getByText("Available to donation (USDC)"),
    ).toBeInTheDocument();
    expect(screen.getByText("Pool address")).toBeInTheDocument();
  });
});
