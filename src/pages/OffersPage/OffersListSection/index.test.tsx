import { screen } from "@testing-library/react";
import { renderComponent } from "config/testUtils";

import OffersListSection from ".";

describe("CausessListSection", () => {
  it("should render without error", () => {
    renderComponent(<OffersListSection />);

    expect(screen.getByText("ID")).toBeInTheDocument();

    expect(screen.getByText("Currency")).toBeInTheDocument();
    expect(screen.getByText("Price")).toBeInTheDocument();
    expect(screen.getByText("Gateway")).toBeInTheDocument();
    expect(screen.getByText("External ID")).toBeInTheDocument();
    expect(screen.getByText("Status")).toBeInTheDocument();
  });
});
