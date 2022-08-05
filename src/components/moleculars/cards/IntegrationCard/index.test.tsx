import { screen } from "@testing-library/react";
import { renderComponent } from "config/testUtils";
import theme from "styles/theme";
import IntegrationCard from ".";

const { ribonBlue, lgRed, phcYellow2 } = theme.colors;

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

    expect(valueText[index]).toHaveStyle(`color: ${lgRed}`);
  });

  it("should render orange text if value is less than 1000", () => {
    const { component } = renderComponent(
      <IntegrationCard title="title" value="999" />,
    );
    const valueText = component.container.getElementsByTagName("p");
    const index = valueText.length - 1;

    expect(valueText[index]).toHaveStyle(`color:  ${phcYellow2}`);
  });

  it("should render blue text if value is greater than 1000", () => {
    const { component } = renderComponent(
      <IntegrationCard title="title" value="1001" />,
    );
    const valueText = component.container.getElementsByTagName("p");
    const index = valueText.length - 1;

    expect(valueText[index]).toHaveStyle(`color:  ${ribonBlue}`);
  });
});
