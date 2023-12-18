import CopyableAddress from "components/atomics/CopyableAddress";
import { Link } from "react-router-dom";
import infoIcon from "assets/icons/info-icon.svg";
import editIcon from "assets/icons/edit-icon.svg";
import theme from "styles/theme";
import * as S from "./styles";

function IntegrationItem(integration: any) {
  const { primary, tertiary } = theme.colors.brand;
  const {
    integration: {
      id,
      status,
      integrationAddress,
      integrationDashboardAddress,
      integrationDeeplinkAddress,
      integrationWallet,
      name,
    },
  } = integration;

  const statusColors: { [key: string]: string } = {
    active: primary[300],
    inactive: tertiary[400],
  };

  return (
    integration && (
      <tr key={id}>
        <th>{id}</th>
        <th>{name}</th>
        <S.walletColumn>
          <CopyableAddress text={integrationWallet?.publicKey} />
        </S.walletColumn>
        <th>
          <CopyableAddress text={integrationAddress} />
        </th>
        <th>
          <CopyableAddress text={integrationDeeplinkAddress} />
        </th>
        <th>
          <CopyableAddress text={integrationDashboardAddress} />
        </th>
        <th>
          <S.StatusTableCell style={{ color: statusColors[status] }}>
            {status}
          </S.StatusTableCell>
        </th>
        <th>
          <S.ActionsTableCell>
            <Link to={`/integrations/${id}`}>
              <img src={infoIcon} alt="view integration info" />
            </Link>

            <Link to={`/integrations/${id}/edit`}>
              <img src={editIcon} alt="edit integration info" />
            </Link>
          </S.ActionsTableCell>
        </th>
      </tr>
    )
  );
}

export default IntegrationItem;
