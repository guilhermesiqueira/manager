import { useTranslation } from "react-i18next";
import { Button } from "@chakra-ui/react";
import theme from "styles/theme";
import { useNavigate } from "react-router";
import AddIcon from "assets/icons/addIcon";
import IntegrationsListSection from "./IntegrationsListSection";
import * as S from "./styles";

function IntegrationsPage(): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "integrations.integrationsList",
  });

  const { gray10, gray30, gray40 } = theme.colors;

  const navigate = useNavigate();

  const handleAddNew = () => {
    navigate("/integrations/new");
  };

  return (
    <S.Container>
      <S.Title>{t("title")}</S.Title>
      <Button
        color={gray10}
        backgroundColor={gray40}
        _hover={{ bg: gray30 }}
        marginLeft="8px"
        onClick={handleAddNew}
        leftIcon={AddIcon()}
      >
        {t("createNew")}
      </Button>
      <IntegrationsListSection />
    </S.Container>
  );
}

export default IntegrationsPage;
