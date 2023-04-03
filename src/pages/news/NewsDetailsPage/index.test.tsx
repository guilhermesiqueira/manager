import { screen } from "@testing-library/react";
import { renderComponent } from "config/testUtils";

import NewsDetailsPage from ".";

describe("News Details Page", () => {
  it("should render without error", () => {
    renderComponent(<NewsDetailsPage />);

    expect(screen.getByText("Visibility status")).toBeInTheDocument();
    expect(screen.getByText("Details")).toBeInTheDocument();
    expect(screen.getByText("Content")).toBeInTheDocument();
    expect(screen.getByText("News link")).toBeInTheDocument();
    expect(screen.getByText("Author")).toBeInTheDocument();
    expect(screen.getByText("Language")).toBeInTheDocument();
    expect(screen.getByText("Publication date")).toBeInTheDocument();
    expect(screen.getByText("Created at")).toBeInTheDocument();
    expect(screen.getByText("Updated at")).toBeInTheDocument();
  });
});
