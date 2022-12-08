import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import EditIcon from "assets/icons/editIcon";

import InfoName from "components/moleculars/infoName";
import { Button } from "@chakra-ui/react";
import theme from "styles/theme";
import { useCallback, useEffect, useState } from "react";
import { logError } from "services/crashReport";

import useRibonConfig from "hooks/apiHooks/useRibonConfig";
import { RibonConfig } from "types/entities/RibonConfig";

import dateFormatterWithMinutes from "lib/dateFormatterWithMinutes";
import moneyFormatter from "lib/moneyFormatter";
import * as S from "./styles";

function SettingsPage(): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "settings",
  });
  const { gray40, gray10, gray30 } = theme.colors;

  const [config, setConfig] = useState<RibonConfig>();

  const { getConfig } = useRibonConfig();

  const fetchConfig = useCallback(async () => {
    try {
      const configData = await getConfig();
      setConfig(configData[0]);
    } catch (e) {
      logError(e);
    }
  }, []);

  useEffect(() => {
    fetchConfig();
  }, []);

  return (
    <S.Content>
      <S.Title>{t("title")}</S.Title>

      <S.Content>
        <Link to="edit">
          <Button
            color={gray10}
            background={gray40}
            _hover={{ bg: gray30 }}
            leftIcon={<EditIcon />}
          >
            {t("editButton")}
          </Button>
        </Link>
        <S.Subtitle>{t("details")}</S.Subtitle>

        <InfoName>{t("attributes.defaultTicketValue")}</InfoName>
        <S.InfoValue>
          {moneyFormatter(Number(config?.defaultTicketValue))}
        </S.InfoValue>
        <S.InfoValue>
          {Number(config?.defaultTicketValue).toFixed(0)}
          {t("inCents")}
        </S.InfoValue>

        <InfoName>{t("attributes.lastUpdated")}</InfoName>
        <S.InfoValue>
          {dateFormatterWithMinutes(config?.updatedAt ?? "")}
        </S.InfoValue>
      </S.Content>
    </S.Content>
  );
}

export default SettingsPage;
