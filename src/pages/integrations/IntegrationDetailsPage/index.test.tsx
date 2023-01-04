import { screen } from "@testing-library/react";
import { renderComponent } from "config/testUtils";

import IntegrationDetailsPage from ".";

describe("TreasureSection", () => {
  it("should render without error", () => {
    renderComponent(<IntegrationDetailsPage />);

    expect(screen.getByText("Status")).toBeInTheDocument();
    expect(screen.getByText("ID")).toBeInTheDocument();
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Integration logo")).toBeInTheDocument();
    expect(screen.getByText("Wallet address")).toBeInTheDocument();
    expect(screen.getByText("Integration address")).toBeInTheDocument();
    expect(
      screen.getByText("Integration dashboard address"),
    ).toBeInTheDocument();
    expect(screen.getByText("Webhook Url")).toBeInTheDocument();
    expect(screen.getByText("Ticket availability")).toBeInTheDocument();
    expect(screen.getByText("Created At")).toBeInTheDocument();
    expect(screen.getByText("Last Edited At")).toBeInTheDocument();
  });
});
