import { screen } from "@testing-library/react";
import { renderComponent } from "config/testUtils";
import UpsertArticleNewsPage from ".";

describe("UpsertNonProfitPage", () => {
  it("should render without error", () => {
    renderComponent(<UpsertArticleNewsPage />);

    expect(screen.getByText("Add News")).toBeInTheDocument();
    expect(screen.getByText("Details")).toBeInTheDocument();
  });

  it("when is edit page", () => {
    renderComponent(<UpsertArticleNewsPage isEdit />);

    expect(screen.getByText("Edit News")).toBeInTheDocument();
    expect(screen.getByText("Details")).toBeInTheDocument();
  });
});
