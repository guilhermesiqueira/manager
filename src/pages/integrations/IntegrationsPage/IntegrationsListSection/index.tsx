import { useEffect, useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import useApiIntegrations from "hooks/apiHooks/useApiIntegrations";
import { logError } from "services/crashReport";
import { Integration } from "@ribon.io/shared/types";
import * as S from "./styles";
import IntegrationItem from "../IntegrationItem";

interface StatusObject {
  [key: string]: boolean;
}

function IntegrationsListSection(): JSX.Element {
  const [allIntegrations, setAllIntegrations] = useState<any>([]);
  const { getAllApiIntegrations } = useApiIntegrations();

  const { t } = useTranslation("translation", {
    keyPrefix: "integrations.attributes",
  });

  const defaultStatusSelection = {
    active: true,
    inactive: true,
  };

  const [selectedStatus, setSelectedStatus] = useState<StatusObject>(
    defaultStatusSelection,
  );

  const fetchAllIntegrations = useCallback(async () => {
    try {
      const integrations = await getAllApiIntegrations();
      setAllIntegrations(integrations);
    } catch (e) {
      logError(e);
    }
  }, []);

  const filterIntegrationsByStatus = (nonFilteredIntegrations: Integration[]) =>
    nonFilteredIntegrations.filter((integrationData: Integration) => {
      if (integrationData.status) {
        const articleStatus = integrationData.status.toString().split("-")[0];
        if (selectedStatus[articleStatus]) return integrationData;
      }
      return null;
    });

  useEffect(() => {
    fetchAllIntegrations();
  }, []);

  const handleStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSelectedStatus({
      ...selectedStatus,
      [value]: !selectedStatus[value],
    });
  };

  function renderTableRowsForIntegrations() {
    return filterIntegrationsByStatus(allIntegrations)?.map((item: any) => (
      <IntegrationItem integration={item} />
    ));
  }

  return (
    <S.Container>
      <S.CheckboxContainer>
        {Object.keys(defaultStatusSelection).map((status: any) => (
          <div key={status}>
            <S.Checkbox
              name="status"
              type="checkbox"
              value={status}
              onChange={handleStatusChange}
              checked={selectedStatus[status]}
            />
            <S.Span>{t(`${status}`)}</S.Span>
          </div>
        ))}
      </S.CheckboxContainer>
      <S.Table>
        <thead>
          <tr>
            <th>{t("id")}</th>
            <th>{t("name")}</th>
            <th>{t("walletAddress")}</th>
            <th>{t("integrationAddress")}</th>
            <th>{t("integrationDeeplinkAddress")}</th>
            <th>{t("integrationDashboardAddress")}</th>
            <th>{t("status")}</th>
          </tr>
        </thead>
        <tbody>{renderTableRowsForIntegrations()}</tbody>
      </S.Table>
    </S.Container>
  );
}

export default IntegrationsListSection;
