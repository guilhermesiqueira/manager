import { screen } from "@testing-library/react";
import { renderComponent } from "config/testUtils";

import EditSettingsPage from ".";

describe("EditSettingsPage", () => {
  it("should render without error", () => {
    renderComponent(<EditSettingsPage />);

    expect(screen.getByText("Edit Settings")).toBeInTheDocument();
    expect(screen.getByText("Default ticket value (USDC)")).toBeInTheDocument();
  });
});
