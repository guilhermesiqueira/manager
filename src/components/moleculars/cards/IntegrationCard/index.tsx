import { GridItem, Text } from "@chakra-ui/react";
import warningRedIcon from "assets/icons/warning-red-icon.svg";
import warningYellowIcon from "assets/icons/warning-yellow-icon.svg";
import Tooltip from "components/atomics/Tooltip";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import theme from "styles/theme";
import * as S from "./styles";

type Props = {
  title: string;
  subtitle?: string;
  value: string;
};

const { gray40, green30, gray20, red30, yellow30, neutral10 } = theme.colors;

function IntegrationCard({ title, subtitle = "", value }: Props) {
  const [showTooltip, setShowTooltip] = useState(false);
  const { t } = useTranslation("translation", {
    keyPrefix: "integrations.integrationCard",
  });

  const showWarning = parseFloat(value) < 1000;
  const icon = parseInt(value, 10) === 0 ? warningRedIcon : warningYellowIcon;

  const colorAccordingToValue = () => {
    const amount = parseFloat(value);
    if (amount === 0) {
      return red30;
    } else if (amount < 1000) {
      return yellow30;
    }
    return green30;
  };

  const textAccordingToValue = () => {
    const amount = parseFloat(value);
    if (amount === 0) {
      return t("amountEnded");
    }
    return t("amountEnding");
  };

  return (
    <>
      <GridItem
        height="110px"
        width="200px"
        padding="16px"
        border="1px"
        borderColor={gray20}
        backgroundColor={neutral10}
        borderRadius="16px"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {showWarning && (
          <img src={icon} alt="warningIcon" style={{ float: "right" }} />
        )}
        <Text textColor={gray40} fontWeight={600} fontSize="12px">
          {title}
        </Text>
        <Text textColor={gray40} fontWeight={400} fontSize="12px">
          {subtitle}
        </Text>
        <Text
          textColor={colorAccordingToValue()}
          fontWeight={700}
          fontSize="16px"
        >
          {value}
        </Text>
      </GridItem>
      {showTooltip && (
        <Tooltip text="" color={colorAccordingToValue()}>
          <S.Text color={colorAccordingToValue()}>
            {textAccordingToValue()}
          </S.Text>
        </Tooltip>
      )}
    </>
  );
}

IntegrationCard.defaultProps = {
  subtitle: "Assigned (USDC)",
};

export default IntegrationCard;
