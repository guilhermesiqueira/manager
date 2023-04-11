import { Link } from "react-router-dom";
import editIcon from "assets/icons/edit-icon.svg";

import { useTranslation } from "react-i18next";
import CopyableAddress from "components/atomics/CopyableAddress";
import dateFormatter from "lib/dateFormatter";
import LinkPage from "components/atomics/LinkPage";

type Props = {
  bigDonations: any;
  searchTerm: string;
};

function BigDonationsItems({ bigDonations, searchTerm }: Props) {
  const { t } = useTranslation("translation", {
    keyPrefix: "bigDonations.bigDonations",
  });

  function filterBigDonations(nonFilteredBigDonations: any) {
    return nonFilteredBigDonations.filter((bigDonationsData: any) => {
      if (searchTerm === "") {
        return bigDonationsData;
      } else if (
        bigDonationsData?.payer.name
          ?.toLowerCase()
          .includes(searchTerm.toLowerCase())
      ) {
        return bigDonationsData;
      } else {
        return null;
      }
    });
  }

  function renderBigDonations() {
    if (filterBigDonations(bigDonations).length === 0)
      return (
        <tr key="noDonations">
          <th>{t("noBigDonations")}</th>
        </tr>
      );

    return (
      bigDonations &&
      filterBigDonations(bigDonations).map((donation: any) => (
        <tr key={donation.id}>
          <th>{donation.id}</th>
          <th>
            <CopyableAddress text={donation.transactionHash} />
          </th>
          <th>{donation.amountCents / 100}</th>
          <th>{dateFormatter(donation.paidDate)}</th>
          <th>
            <LinkPage
              page="/big-donors/index"
              text={donation.payer.name ?? ""}
            />
          </th>
          <th>{donation.blockchainStatus}</th>

          <th>
            <Link to={`/big-donations/${donation.id}/edit`}>
              <img src={editIcon} alt="edit big Donations info" />
            </Link>
          </th>
        </tr>
      ))
    );
  }

  return <tbody>{renderBigDonations()}</tbody>;
}

export default BigDonationsItems;
