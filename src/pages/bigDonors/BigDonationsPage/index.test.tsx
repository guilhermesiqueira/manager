import { renderComponent } from "config/testUtils";
import { expectTextToBeInTheDocument } from "config/testUtils/expects";
import BigDonationsPage from ".";

describe("BigDonationsPage", () => {
  it("should render without error", () => {
    renderComponent(<BigDonationsPage />);

    expectTextToBeInTheDocument("BigDonationsPage");
  });
});
