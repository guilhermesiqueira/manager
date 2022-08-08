import { useTranslation } from "react-i18next";
import { Button } from "@chakra-ui/react";
import theme from "styles/theme";
import { useNavigate } from "react-router";
import IntegrationsListSection from "./IntegrationsListSection";
import * as S from "./styles";

function IntegrationsPage(): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "integrations.integrationsList",
  });

  const { bgGray, ribonBlack } = theme.colors;
  
  const navigate = useNavigate();

  const handleAddNew = () => {
    navigate("/integrations/new");
  }

  return (
    <S.Container>
      <S.Title>{t("title")}</S.Title>
        <Button
          color={bgGray}
          backgroundColor={ribonBlack}
          marginLeft="8px"
          onClick={handleAddNew}
        >
          {t("createNew")}
        </Button>
      <IntegrationsListSection />
    </S.Container>
  );
}

export default IntegrationsPage;
