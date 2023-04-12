import { renderComponent } from "config/testUtils";
import { expectTextToBeInTheDocument } from "config/testUtils/expects";
import BigDonationsDetailsPage from ".";

describe("BigDonationsDetailsPage", () => {
  it("should render without error", () => {
    renderComponent(<BigDonationsDetailsPage />);

    expectTextToBeInTheDocument("BigDonationsDetailsPage");
  });
});
