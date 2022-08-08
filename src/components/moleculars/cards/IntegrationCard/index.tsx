import { GridItem, Text } from "@chakra-ui/react";
import warningRedIcon from "assets/icons/warning-red-icon.svg";
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

const { ribonBlack, ribonBlue, lightGray, lgRed, phcYellow } = theme.colors;

function IntegrationCard({ title, subtitle = "", value }: Props) {
  const [showTooltip, setShowTooltip] = useState(false);
  const { t } = useTranslation("translation", {
    keyPrefix: "integrations.integrationCard",
  });

  const colorAccordingToValue = () => {
    const amount = parseFloat(value);
    if (amount === 0) {
      return lgRed;
    } else if (amount < 1000) {
      return phcYellow;
    }
    return ribonBlue;
  };

  const textAccordingToValue = () => {
    const amount = parseFloat(value);
    if (amount === 0) {
      return t("amountEnded");
    }
    return t("amountEnding");
  }

  return (
    <>
      <GridItem
        height="97px"
        width="176px"
        padding="16px"
        border="1px"
        borderColor={lightGray}
        borderRadius="16px"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
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
          <S.Text color={colorAccordingToValue()} >{textAccordingToValue()}</S.Text>
        </Tooltip>
      )}
    </>
  );
}

IntegrationCard.defaultProps = {
  subtitle: "Assigned (USDC)",
};

export default IntegrationCard;
