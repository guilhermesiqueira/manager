import { screen } from "@testing-library/react";
import { renderComponent } from "config/testUtils";

import IntegrationDetailsPage from ".";

describe("TreasureSection", () => {
  it("should render without error", () => {
    renderComponent(<IntegrationDetailsPage />);

    expect(screen.getByText("Status")).toBeInTheDocument();
    expect(screen.getByText("Wallet address")).toBeInTheDocument();
    expect(screen.getByText("Integration address")).toBeInTheDocument();
    expect(screen.getByText("Ticket availability")).toBeInTheDocument();
  });
});
