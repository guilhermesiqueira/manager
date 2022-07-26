import { useEffect, useState, useCallback } from "react";
import useApiIntegrations from "hooks/apiHooks/useApiIntegrations";
import { logError } from "services/crashReport";
import CopyableTableCell from "components/atomics/CopyableTableCell";
import infoIcon from "assets/icons/info-icon.svg";
import editIcon from "assets/icons/edit-icon.svg";
import { Link } from "react-router-dom";
import theme from "styles/theme";
import * as S from "./styles";

function IntegrationsListSection(): JSX.Element {
  const [allIntegrations, setAllIntegrations] = useState<any>([]);
  const { getAllApiIntegrations } = useApiIntegrations();
  const { ribonBlue, lgRed } = theme.colors;

  const statusColors: { [key: string]: string } = {
    active: ribonBlue,
    inactive: lgRed,
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
          <CopyableTableCell text={item.walletAddress} />
        </th>
        <th>
          <CopyableTableCell text={item.integrationAddress} />
        </th>
        <th>
          <S.StatusTableCell style={{ color: statusColors[item.status] }}>
            {item.status}
          </S.StatusTableCell>
        </th>
        <th>
          <S.ActionsTableCell>
            <Link to={`/integrations/${item?.id}`} >
            <img src={infoIcon} alt="view integration info" />
            </Link>
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
            <th>Id</th>
            <th>Name</th>
            <th>Wallet Address</th>
            <th>Integration Address</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>{renderTableRowsForIntegrations()}</tbody>
      </S.Table>
    </S.Container>
  );
}

export default IntegrationsListSection;
