import { screen } from "@testing-library/react";
import { renderComponent } from "config/testUtils";
import TreasureSection from ".";

describe("TreasureSection", () => {
  it("should render without error", () => {
    renderComponent(<TreasureSection />);

    expect(screen.getByText("Treasure Balance (USDC)")).toBeInTheDocument();
  });
});
