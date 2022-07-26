import { Tooltip } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import copyIcon from "./assets/copy-icon.svg";
import * as S from "./styles";

export type Props = {
  text: string;
};

function CopyableAddress({ text }: Props): JSX.Element {
  const [tooltipOpened, setTooltipOpened] = useState<boolean>(false);

  const closeTooltip = () => setTooltipOpened(false);

  const { t } = useTranslation("translation", {
    keyPrefix: "integrations.copyableAddress",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      closeTooltip();
    }, 1500);

    return () => clearInterval(interval);
  }, [tooltipOpened]);

  const copyText = () => {
    navigator.clipboard.writeText(text);
    setTooltipOpened(true);
  };

  return (
    <S.Container onClick={copyText}>
      <Tooltip
        label={t("successTooltipText")}
        bg="ribonBlack"
        color="white"
        placement="top"
        isOpen={tooltipOpened}
        onClose={closeTooltip}
      >
        <img src={copyIcon} alt={t("alternativeText")} />
      </Tooltip>
      <span>{text}</span>
    </S.Container>
  );
}

export default CopyableAddress;
