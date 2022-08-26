import { screen } from "@testing-library/react";
import { renderComponent } from "config/testUtils";
import theme from "styles/theme";
import IntegrationCard from ".";

const { mediumGreen, mediumRed, mediumYellow } = theme.colors;

describe("IntegrationCard", () => {
  it("should render without error", () => {
    renderComponent(<IntegrationCard title="title" value="value" />);

    expect(screen.getByText("title")).toBeInTheDocument();
    expect(screen.getByText("value")).toBeInTheDocument();
  });

  describe("when value is 0", () => {
    it("should render mediumRed icon", () => {
      renderComponent(<IntegrationCard title="title" value="0" />);

      expect(screen.getByAltText("warningIcon")).toBeInTheDocument();
    });

    it("should render mediumRed text", () => {
      const { component } = renderComponent(
        <IntegrationCard title="title" value="0" />,
      );
      const valueText = component.container.getElementsByTagName("p");
      const index = valueText.length - 1;

      expect(valueText[index]).toHaveStyle(`color: ${mediumRed}`);
    });
  });

  describe("when value is less than 1000", () => {
    it("should render mediumYellow text", () => {
      const { component } = renderComponent(
        <IntegrationCard title="title" value="999" />,
      );
      const valueText = component.container.getElementsByTagName("p");
      const index = valueText.length - 1;

      expect(valueText[index]).toHaveStyle(`color:  ${mediumYellow}`);
    });
  });

  describe("when value is greater than 1000", () => {
    it("should render blue text", () => {
      const { component } = renderComponent(
        <IntegrationCard title="title" value="1001" />,
      );
      const valueText = component.container.getElementsByTagName("p");
      const index = valueText.length - 1;

      expect(valueText[index]).toHaveStyle(`color:  ${mediumGreen}`);
    });
  });
});
