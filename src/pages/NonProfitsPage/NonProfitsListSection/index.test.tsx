import { screen } from "@testing-library/react";
import { renderComponent } from "config/testUtils";

import NonProfitsListSection from ".";

describe("NonProfitsListSection", () => {
  it("should render without error", () => {
    renderComponent(<NonProfitsListSection />);

    expect(screen.getByText("Id")).toBeInTheDocument();

    expect(screen.getByText("Name")).toBeInTheDocument();

    expect(screen.getByText("Wallet address")).toBeInTheDocument();

    expect(screen.getByText("Status")).toBeInTheDocument();
  });
});
