import { useEffect, useState, useCallback } from "react";
import useIntegrations from "hooks/useIntegrations";
import { logError } from "services/crashReport";
import CopyableTableCell from "components/atomics/CopyableTableCell";
import * as S from "./styles";

function IntegrationsListSection(): JSX.Element {
  const [allIntegrations, setAllIntegrations] = useState<any>([]);
  const { getAllIntegrations } = useIntegrations();

  const fetchAllDonations = useCallback(async () => {
    try {
      const integrations = await getAllIntegrations();
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
          <CopyableTableCell text={item.walletAddress}/>
        </th>
        <th>
          <CopyableTableCell text={`https://dapp.ribon.io/integration/${item.id}`}/>
        </th>
        <th>HARDCODED</th>
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
        <tbody>
          { renderTableRowsForIntegrations() }
        </tbody>
      </S.Table>
    </S.Container>
  );
}

export default IntegrationsListSection;
