import { screen, waitFor } from "@testing-library/react";
import { renderComponent } from "config/testUtils";

import UpsertIntegrationPage from ".";

describe("UpsertIntegrationPage", () => {
  it("should render the create page without error", async () => {
    renderComponent(<UpsertIntegrationPage />);
    await waitFor(() => {
      expect(screen.getByText("Add new donor")).toBeInTheDocument();
      expect(screen.getByText("Save")).toBeInTheDocument();
    });
  });
});
