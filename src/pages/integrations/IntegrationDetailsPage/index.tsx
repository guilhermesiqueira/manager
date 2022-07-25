import { useTranslation } from "react-i18next";
import * as S from "./styles";

function IntegrationDetailsPage(): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "integrations.integrationDetailsPage",
  });

  const integrationName = "Integration Name"

  return (
    <S.Container>
      <S.Title>{t("title", {integrationName})}</S.Title>
    </S.Container>
  );
}

export default IntegrationDetailsPage;
