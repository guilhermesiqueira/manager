import PersonPayment from "types/entities/PersonPayment";
import dateFormatter from "lib/dateFormatter";
import theme from "styles/theme";
import * as S from "./styles";

type Props = {
  purchases: PersonPayment[];
  searchTerm: string;
};

function PurchaseItems({ purchases, searchTerm }: Props) {
  const { green30, red30, gray30 } = theme.colors;

  const statusColors: { [key: string]: string } = {
    processing: gray30,
    paid: green30,
    failed: red30,
  };

  function filterPurchases(nonFilteredPurchases: any) {
    return nonFilteredPurchases.filter((purchaseData: any) => {
      if (searchTerm === "") {
        return purchaseData;
      } else if (
        purchaseData?.person?.customer?.email
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      ) {
        return purchaseData;
      } else {
        return null;
      }
    });
  }

  function renderPurchases() {
    return (
      purchases &&
      filterPurchases(purchases).map((purchase: any) => (
        <tr key={purchase.id}>
          <th>{dateFormatter(purchase?.paidDate)}</th>
          <th>{purchase?.externalId || "-"}</th>
          <th>{purchase?.paymentMethod}</th>
          <th>{purchase?.person?.customer?.email || "guest"}</th>
          <th>{purchase?.offer?.price || "0"}</th>
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
