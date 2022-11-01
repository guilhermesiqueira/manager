import { screen } from "@testing-library/react";
import { renderComponent } from "config/testUtils";

import CausesListSection from ".";

describe("CausessListSection", () => {
  it("should render without error", () => {
    renderComponent(<CausesListSection />);

    expect(screen.getByText("Date")).toBeInTheDocument();

    expect(screen.getByText("Type")).toBeInTheDocument();
  });
});
