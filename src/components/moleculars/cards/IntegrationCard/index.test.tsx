import { screen } from "@testing-library/react";
import { renderComponent } from "config/testUtils";
import theme from "styles/theme";
import IntegrationCard from ".";

const { yellow30 } = theme.colors;
const { primary, tertiary } = theme.colors.brand;

describe("IntegrationCard", () => {
  it("should render without error", () => {
    renderComponent(<IntegrationCard title="title" value="value" />);

    expect(screen.getByText("title")).toBeInTheDocument();
    expect(screen.getByText("value")).toBeInTheDocument();
  });

  describe("when value is 0", () => {
    it("should render tertiary[400] icon", () => {
      renderComponent(<IntegrationCard title="title" value="0" />);

      expect(screen.getByAltText("warningIcon")).toBeInTheDocument();
    });

    it("should render tertiary[400] text", () => {
      const { component } = renderComponent(
        <IntegrationCard title="title" value="0" />,
      );
      const valueText = component.container.getElementsByTagName("p");
      const index = valueText.length - 1;

      expect(valueText[index]).toHaveStyle(`color: ${tertiary[400]}`);
    });
  });

  describe("when value is less than 1000", () => {
    it("should render yellow30 text", () => {
      const { component } = renderComponent(
        <IntegrationCard title="title" value="999" />,
      );
      const valueText = component.container.getElementsByTagName("p");
      const index = valueText.length - 1;

      expect(valueText[index]).toHaveStyle(`color:  ${yellow30}`);
    });
  });

  describe("when value is greater than 1000", () => {
    it("should render blue text", () => {
      const { component } = renderComponent(
        <IntegrationCard title="title" value="1001" />,
      );
      const valueText = component.container.getElementsByTagName("p");
      const index = valueText.length - 1;

      expect(valueText[index]).toHaveStyle(`color:  ${primary[300]}`);
    });
  });
});
