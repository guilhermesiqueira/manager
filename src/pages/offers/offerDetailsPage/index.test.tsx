import { screen } from "@testing-library/react";
import { renderComponent } from "config/testUtils";

import OfferDetailsPage from ".";

describe("OfferDetailsPage", () => {
  it("should render without error", () => {
    renderComponent(<OfferDetailsPage />);

    expect(screen.getByText("Offer")).toBeInTheDocument();
  });
});
