import IntegrationCard from "components/moleculars/cards/IntegrationCard";
import useApiIntegrations from "hooks/apiHooks/useApiIntegrations";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";
import { logError } from "services/crashReport";
import * as S from "./styles";

function IntegrationDetailsPage(): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "integrations.integrationDetailsPage",
  });

  const [integration, setIntegration] = useState<any>([]);
  const { getApiIntegration } = useApiIntegrations();
  const { id } = useParams();

  // const statusColors: { [key: string]: string } = {
  //   active: "#00CDB4",
  //   inactive: "#f00",
  // };

  const fetchIntegration = useCallback(async () => {
    try {
      const integrationData = await getApiIntegration(id);
      setIntegration(integrationData);
    } catch (e) {
      logError(e);
    }
  }, []);

  const integrationName = integration?.name;

  useEffect(() => {
    fetchIntegration();
  }, []);

  return (
    <S.Container>
      <S.Title>{t("title", { integrationName })}</S.Title>
      <IntegrationCard title={integrationName} value="12" warning/>
    </S.Container>
  );
}

export default IntegrationDetailsPage;
