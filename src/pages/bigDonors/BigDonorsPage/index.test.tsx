import { renderComponent } from "config/testUtils";
import { expectTextToBeInTheDocument } from "config/testUtils/expects";
import BigDonorsPage from ".";

describe("BigDonorsPage", () => {
  it("should render without error", () => {
    renderComponent(<BigDonorsPage />);

    expectTextToBeInTheDocument("BigDonorsPage");
  });
});
