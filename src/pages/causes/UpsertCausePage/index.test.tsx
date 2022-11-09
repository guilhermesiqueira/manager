import { screen } from "@testing-library/react";
import { renderComponent } from "config/testUtils";

import UpsertCausePage from ".";

describe("UpsertCausePage", () => {
  it("should render without error", () => {
    renderComponent(<UpsertCausePage />);

    expect(screen.getByText("Add New Cause")).toBeInTheDocument();
    expect(screen.getByText("Cause Name")).toBeInTheDocument();
  });

  it("should render without error", () => {
    renderComponent(<UpsertCausePage isEdit />);

    expect(screen.getByText("Edit Cause")).toBeInTheDocument();
    expect(screen.getByText("Cause Name")).toBeInTheDocument();
  });
});
