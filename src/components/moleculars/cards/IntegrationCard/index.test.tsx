import { screen } from "@testing-library/react";
import { renderComponent } from "config/testUtils";
import theme from "styles/theme";
import IntegrationCard from ".";

const { ribonBlue, lgRed, phcYellow } = theme.colors;

describe("IntegrationCard", () => {
  it("should render without error", () => {
    renderComponent(<IntegrationCard title="title" value="value" />);

    expect(screen.getByText("title")).toBeInTheDocument();
    expect(screen.getByText("value")).toBeInTheDocument();
  });

  describe("when value is 0", () => {
    it("should render red icon", () => {
      renderComponent(<IntegrationCard title="title" value="0" />);

      expect(screen.getByAltText("warningIcon")).toBeInTheDocument();
    });

    it("should render red text", () => {
      const { component } = renderComponent(
        <IntegrationCard title="title" value="0" />,
      );
      const valueText = component.container.getElementsByTagName("p");
      const index = valueText.length - 1;

      expect(valueText[index]).toHaveStyle(`color: ${lgRed}`);
    });
  });

  describe("when value is less than 1000", () => {
    it("should render yellow text", () => {
      const { component } = renderComponent(
        <IntegrationCard title="title" value="999" />,
      );
      const valueText = component.container.getElementsByTagName("p");
      const index = valueText.length - 1;

      expect(valueText[index]).toHaveStyle(`color:  ${phcYellow}`);
    });
  });

  describe("when value is greater than 1000", () => {
    it("should render blue text", () => {
      const { component } = renderComponent(
        <IntegrationCard title="title" value="1001" />,
      );
      const valueText = component.container.getElementsByTagName("p");
      const index = valueText.length - 1;

      expect(valueText[index]).toHaveStyle(`color:  ${ribonBlue}`);
    });
  });
});
