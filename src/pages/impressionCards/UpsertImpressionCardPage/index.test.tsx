import { screen, waitFor } from "@testing-library/react";
import { renderComponent } from "config/testUtils";
import UpsertImpressionCardPage from ".";

describe("UpsertImpressionCardPage", () => {
  it("should render the create page without error", async () => {
    renderComponent(<UpsertImpressionCardPage />);
    await waitFor(() => {
      expect(screen.getByText("Save")).toBeInTheDocument();
    });
  });
});
