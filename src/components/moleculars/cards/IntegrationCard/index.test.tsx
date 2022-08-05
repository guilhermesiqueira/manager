import { screen } from "@testing-library/react";
import { renderComponent } from "config/testUtils";
import IntegrationCard from ".";

describe("IntegrationCard", () => {
  it("should render without error", () => {
    renderComponent(<IntegrationCard title="title" value="value" />);

    expect(screen.getByText("title")).toBeInTheDocument();
    expect(screen.getByText("value")).toBeInTheDocument();
  });

  it("should render red icon if value is 0", () => {
    renderComponent(<IntegrationCard title="title" value="0" />);

    expect(screen.getByAltText("warningIcon")).toBeInTheDocument();
  });

  it("should render red text if value is 0", () => {
    const { component } = renderComponent(
      <IntegrationCard title="title" value="0" />,
    );
    const valueText = component.container.getElementsByTagName("p");
    const index = valueText.length - 1;

    expect(valueText[index]).toHaveStyle("color: #EF5350");
  });

  it("should render orange text if value is less than 1000", () => {
    const { component } = renderComponent(
      <IntegrationCard title="title" value="999" />,
    );
    const valueText = component.container.getElementsByTagName("p");
    const index = valueText.length - 1;

    expect(valueText[index]).toHaveStyle("color: #FF8F00");
  });

  it("should render blue text if value is greater than 1000", () => {
    const { component } = renderComponent(
      <IntegrationCard title="title" value="1001" />,
    );
    const valueText = component.container.getElementsByTagName("p");
    const index = valueText.length - 1;

    expect(valueText[index]).toHaveStyle("color: #00CDB4");
  });
});
