import { screen } from "@testing-library/react";
import { renderComponent } from "config/testUtils";

import ImpressionCardDetailsPage from ".";

describe("TreasureSection", () => {
  it("should render without error", () => {
    renderComponent(<ImpressionCardDetailsPage />);

    expect(screen.getByText("ID")).toBeInTheDocument();
    expect(screen.getByText("Headline")).toBeInTheDocument();
    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Description")).toBeInTheDocument();
    expect(screen.getByText("Video URL")).toBeInTheDocument();
    expect(screen.getByText("Image")).toBeInTheDocument();
    expect(screen.getByText("CTA text")).toBeInTheDocument();
    expect(screen.getByText("CTA URL")).toBeInTheDocument();
  });
});
