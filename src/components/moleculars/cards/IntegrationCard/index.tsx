import { GridItem, Text } from "@chakra-ui/react";
import warningRedIcon from "assets/icons/warning-red-icon.svg";
import theme from "styles/theme";

type Props = {
  title: string;
  subtitle?: string;
  value: string;
};

const { ribonBlack, ribonBlue, lightGray, lgRed, phcYellow2 } = theme.colors;

function IntegrationCard({
  title,
  subtitle = "",
  value,
}: Props) {

  const colorAccordingToValue = () => {
    const amount = parseFloat(value);
    if (amount === 0) {
      return lgRed;
    } else if (amount <1000) {
      return phcYellow2;
    }
    return ribonBlue;
  }

  return (
    <GridItem
      height="97px"
      width="176px"
      padding="16px"
      border="1px"
      borderColor={lightGray}
      borderRadius="16px"
    >
      {value === "0" && (
        <img
          src={warningRedIcon}
          alt="warningIcon"
          style={{ float: "right" }}
        />
      )}
      <Text textColor={ribonBlack} fontWeight={700} fontSize="12px">
        {title}
      </Text>
      <Text textColor={ribonBlack} fontWeight={300} fontSize="10px">
        {subtitle}
      </Text>
      <Text textColor={colorAccordingToValue()} fontWeight={700} fontSize="16px">
        {value}
      </Text>
    </GridItem>
  );
}

IntegrationCard.defaultProps = {
  subtitle: "Assigned (USDC)",
};

export default IntegrationCard;
