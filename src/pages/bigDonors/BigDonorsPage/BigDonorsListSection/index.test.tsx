import { screen } from "@testing-library/react";
import { renderComponent } from "config/testUtils";

import BigDonorsListSection from ".";

describe("BigDonorsListSection", () => {
  it("should render without error", () => {
    renderComponent(<BigDonorsListSection />);

    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();
  });
});
