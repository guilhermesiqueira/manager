import { screen, waitFor } from "@testing-library/react";
import { renderComponent } from "config/testUtils";

import UpsertIntegrationPage from ".";

describe("UpsertIntegrationPage", () => {
  it("should render the create page without error", async () => {
    renderComponent(<UpsertIntegrationPage />);
    await waitFor(() => {
      expect(screen.getByText("Add New Integration")).toBeInTheDocument();
      expect(screen.getByText("Save")).toBeInTheDocument();
    });
  });

  it("should render the edit page without error", async () => {
    renderComponent(<UpsertIntegrationPage isEdit />);

    await waitFor(() => {
      expect(screen.getByText("Edit Integration")).toBeInTheDocument();
      expect(screen.getByText("Save changes")).toBeInTheDocument();
    });
  });
});
