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

  // it("should render the edit page without error", async () => {
  //   renderComponent(<UpsertBigDonorPage isEdit />);

  //   await waitFor(() => {
  //     expect(screen.getByText("Edit Donor")).toBeInTheDocument();
  //     expect(screen.getByText("Save changes")).toBeInTheDocument();
  //   });
  // });
});
