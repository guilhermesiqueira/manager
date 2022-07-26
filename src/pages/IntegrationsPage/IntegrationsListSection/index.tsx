import { useEffect, useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import useApiIntegrations from "hooks/apiHooks/useApiIntegrations";
import { logError } from "services/crashReport";
import CopyableAddress from "components/atomics/CopyableAddress";
import infoIcon from "assets/icons/info-icon.svg";
import editIcon from "assets/icons/edit-icon.svg";
import * as S from "./styles";

function IntegrationsListSection(): JSX.Element {
  const [allIntegrations, setAllIntegrations] = useState<any>([]);
  const { getAllApiIntegrations } = useApiIntegrations();

  const { t } = useTranslation("translation", {
    keyPrefix: "integrations.integrationsList.listColumns",
  });

  const statusColors: { [key: string]: string } = {
    active: "#00CDB4",
    inactive: "#f00",
  };

  const fetchAllDonations = useCallback(async () => {
    try {
      const integrations = await getAllApiIntegrations();
      setAllIntegrations(integrations);
    } catch (e) {
      logError(e);
    }
  }, []);

  useEffect(() => {
    fetchAllDonations();
  }, []);

  function renderTableRowsForIntegrations() {
    return allIntegrations?.map((item: any) => (
      <tr key={item.id}>
        <th>{item.id}</th>
        <th>{item.name}</th>
        <th>
          <CopyableAddress text={item.walletAddress} />
        </th>
        <th>
          <CopyableAddress text={item.integrationAddress} />
        </th>
        <th>
          <S.StatusTableCell style={{ color: statusColors[item.status] }}>
            {item.status}
          </S.StatusTableCell>
        </th>
        <th>
          <S.ActionsTableCell>
            <img src={infoIcon} alt="view integration info" />
            <img src={editIcon} alt="edit integration info" />
          </S.ActionsTableCell>
        </th>
      </tr>
    ));
  }

  return (
    <S.Container>
      <S.Table>
        <thead>
          <tr>
            <th>{t("id")}</th>
            <th>{t("name")}</th>
            <th>{t("walletAddress")}</th>
            <th>{t("integrationAddress")}</th>
            <th>{t("status")}</th>
          </tr>
        </thead>
        <tbody>{renderTableRowsForIntegrations()}</tbody>
      </S.Table>
    </S.Container>
  );
}

export default IntegrationsListSection;
