import PersonPayment from "types/entities/PersonPayment";
import dateFormatter from "lib/dateFormatter";
import theme from "styles/theme";
import refundIcon from "assets/icons/refund-icon.svg";
import usePayments from "hooks/apiHooks/usePayments";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import Tooltip from "components/atomics/Tooltip";
import ModalImage from "components/moleculars/modals/ModalImage";
import * as S from "./styles";

type Props = {
  purchases: PersonPayment[];
  searchTerm: string;
  fetchPurchases: () => void;
};

function PurchaseItems({ purchases, fetchPurchases, searchTerm }: Props) {
  const { green30, red30, gray30, gray40, orange40 } = theme.colors;
  const { creditCardRefund } = usePayments();
  const [visible, setVisible] = useState(false);
  const [externalId, setExternalId] = useState<string>("teste");
  const { t } = useTranslation("translation", {
    keyPrefix: "purchasesPage.purchasesListSection.refundModal",
  });

  const handleRefund = () => {
    creditCardRefund(externalId).then(() => {
      fetchPurchases();
    });
    setVisible(false);
  };

  const statusColors: { [key: string]: string } = {
    processing: gray30,
    paid: green30,
    failed: red30,
    refunded: orange40,
  };

  const handleOpenModal = (id: string) => {
    setExternalId(id);
    setVisible(true);
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

          {purchase.status === "paid" &&
            purchase.paymentMethod === "credit_card" && (
              <th>
                <S.RefundButton
                  onClick={() => handleOpenModal(purchase.externalId)}
                >
                  <Tooltip text={t("tooltipText")} color={gray40}>
                    <S.RefundIcon src={refundIcon} />
                  </Tooltip>
                </S.RefundButton>

                <ModalImage
                  title={t("title")}
                  body={t("body")}
                  visible={visible}
                  image={refundIcon}
                  primaryButtonText={t("confirmButton")}
                  primaryButtonColor={red30}
                  primaryButtonCallback={handleRefund}
                  secondaryButtonText={t("cancelButton")}
                  secondaryButtonBorderColor={gray30}
                />
              </th>
            )}
        </tr>
      ))
    );
  }

  return <tbody>{renderPurchases()}</tbody>;
}

export default PurchaseItems;
