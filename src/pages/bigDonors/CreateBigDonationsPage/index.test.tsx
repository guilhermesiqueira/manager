import { screen, waitFor } from "@testing-library/react";
import { renderComponent } from "config/testUtils";

import CreateBigDonationsPage from ".";

describe("CreateBigDonationsPage", () => {
  it("should render the create page without error", async () => {
    renderComponent(<CreateBigDonationsPage />);
    await waitFor(() => {
      expect(screen.getByText("Send donation to contract")).toBeInTheDocument();
      expect(screen.getByText("Send")).toBeInTheDocument();
    });
  });
});
