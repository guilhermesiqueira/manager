import { screen } from "@testing-library/react";
import { renderComponent } from "config/testUtils";

import UpsertNonProfitPage from ".";

describe("UpsertNonProfitPage", () => {
  it("should render without error", () => {
    renderComponent(<UpsertNonProfitPage />);

    expect(screen.getByText("Add News")).toBeInTheDocument();
    expect(screen.getByText("Details")).toBeInTheDocument();
  });
});
