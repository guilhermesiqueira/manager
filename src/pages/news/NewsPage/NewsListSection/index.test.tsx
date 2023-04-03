import { screen } from "@testing-library/react";
import { renderComponent } from "config/testUtils";
import NewsListSection from ".";

describe("NewsListSection", () => {
  it("should render without error", () => {
    renderComponent(<NewsListSection />);

    expect(screen.getByText("ID")).toBeInTheDocument();

    expect(screen.getByText("Content")).toBeInTheDocument();

    expect(screen.getByText("News link")).toBeInTheDocument();

    expect(screen.getByText("Author")).toBeInTheDocument();

    expect(screen.getByText("Language")).toBeInTheDocument();

    expect(screen.getByText("Publication date")).toBeInTheDocument();

    expect(screen.getByText("Visibility")).toBeInTheDocument();
  });
});
