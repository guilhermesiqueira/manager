import PersonPayment from "types/entities/PersonPayment";
import dateFormatter from "lib/dateFormatter";
import numberFormatter from "lib/moneyFormatter";
import theme from "styles/theme";
import * as S from "./styles";

type Props = {
  purchases: PersonPayment[];
};

function PurchaseItems({ purchases }: Props) {
  const { green30, red30, gray30 } = theme.colors;

  const statusColors: { [key: string]: string } = {
    processing: gray30,
    paid: green30,
    failed: red30,
  };

  function renderPurchases() {
    return (
      purchases &&
      purchases.map((purchase: any) => (
        <tr key={purchase.id}>
          <th>{dateFormatter(purchase?.paidDate)}</th>
          {/* TODO: Mudar quando for adicionado o stripe ID */}
          <th>{purchase.id}</th>
          <th>{purchase?.paymentMethod}</th>
          <th>
            {purchase?.person?.customer?.email &&
              purchase?.person?.customer?.email}
          </th>
          <th>{numberFormatter(purchase?.offer?.priceValue)}</th>
          <th>
            <S.StatusTableCell
              style={{ color: statusColors[purchase?.status] }}
            >
              {purchase?.status}
            </S.StatusTableCell>
          </th>
        </tr>
      ))
    );
  }

  return <tbody>{renderPurchases()}</tbody>;
}

export default PurchaseItems;
