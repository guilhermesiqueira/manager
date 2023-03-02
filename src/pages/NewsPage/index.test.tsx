import { screen } from "@testing-library/react";
import { renderComponent } from "config/testUtils";

import NewsPage from ".";

describe("NewsPage", () => {
  it("should render without error", () => {
    renderComponent(<NewsPage />);

    expect(screen.getByText("News List")).toBeInTheDocument();
  });
});
