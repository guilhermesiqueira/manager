import { screen } from "@testing-library/react";
import { renderComponent } from "config/testUtils";

import SettingsPage from ".";

describe("SettingsPage", () => {
  it("should render without error", () => {
    renderComponent(<SettingsPage />);

    expect(screen.getByText("Settings")).toBeInTheDocument();
    expect(screen.getByText("Details")).toBeInTheDocument();
    expect(screen.getByText("Default ticket value (USDC)")).toBeInTheDocument();
    expect(screen.getByText("Last updated")).toBeInTheDocument();
  });
});
