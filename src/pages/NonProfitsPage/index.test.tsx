import { screen } from "@testing-library/react";
import { renderComponent } from "config/testUtils";

import NonProfitsPage from ".";

describe("NonProfitsPage", () => {
  it("should render without error", () => {
    renderComponent(<NonProfitsPage />);

    expect(screen.getByText("Ngos List")).toBeInTheDocument();
  });
});
