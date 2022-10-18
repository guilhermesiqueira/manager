import { screen } from "@testing-library/react";
import { renderComponent } from "config/testUtils";

import PurchasesListSection from ".";

describe("TreasureSection", () => {
  it("should render without error", () => {
    renderComponent(<PurchasesListSection />);

    expect(screen.getByText("Date")).toBeInTheDocument();

    expect(screen.getByText("Type")).toBeInTheDocument();
  });
});
