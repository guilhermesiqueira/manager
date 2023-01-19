import { screen } from "@testing-library/react";
import { renderComponent } from "config/testUtils";

import CauseDetailsPage from ".";

describe("CauseDetailsPage", () => {
  it("should render without error", () => {
    renderComponent(<CauseDetailsPage />);

    expect(screen.getByText("Cause details")).toBeInTheDocument();
    expect(
      screen.getByText("Available to donation (USDC)"),
    ).toBeInTheDocument();
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Pool address")).toBeInTheDocument();

    expect(screen.getByText("Linked projects")).toBeInTheDocument();
    expect(screen.getByText("Main image")).toBeInTheDocument();
    expect(screen.getByText("Cover image")).toBeInTheDocument();
  });
});
