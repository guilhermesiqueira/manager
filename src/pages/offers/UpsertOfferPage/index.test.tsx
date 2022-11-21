import { screen, waitFor } from "@testing-library/react";
import { renderComponent } from "config/testUtils";

import UpsertOfferPage from ".";

describe("UpsertOfferPage", () => {
  it("should render the create page without error", async () => {
    renderComponent(<UpsertOfferPage />);
    await waitFor(() => {
      expect(screen.getByText("Add New Offer")).toBeInTheDocument();
      expect(screen.getByText("Save")).toBeInTheDocument();
    });
  });

  it("should render the edit page without error", async () => {
    renderComponent(<UpsertOfferPage isEdit />);

    await waitFor(() => {
      expect(screen.getByText("Edit Offer")).toBeInTheDocument();
      expect(screen.getByText("Save changes")).toBeInTheDocument();
    });
  });
});
