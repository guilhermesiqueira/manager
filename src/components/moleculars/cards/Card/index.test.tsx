import { screen } from "@testing-library/react";
import { renderComponent } from "config/testUtils";
import Card from ".";

describe("Card", () => {
  it("should render without error", () => {
    renderComponent(<Card title="title" />);

    expect(screen.getByText("title")).toBeInTheDocument();
  });
});
