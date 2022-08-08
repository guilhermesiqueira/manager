import { screen } from "@testing-library/react";
import { renderComponent } from "config/testUtils";

import UpsertIntegrationPage from ".";

describe("UpsertIntegrationPage", () => {
  it("should render without error", () => {
    renderComponent(<UpsertIntegrationPage />);

    expect(screen.getByText("Edit Integration")).toBeInTheDocument();
    expect(screen.getByText("Save changes")).toBeInTheDocument();
  });
});
