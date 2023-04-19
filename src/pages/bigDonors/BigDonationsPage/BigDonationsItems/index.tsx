import { Link } from "react-router-dom";
import infoIcon from "assets/icons/info-icon.svg";
import { useTranslation } from "react-i18next";
import CopyableAddress from "components/atomics/CopyableAddress";
import dateFormatter from "lib/dateFormatter";
import LinkPage from "components/atomics/LinkPage";
import * as S from "./styles";

type Props = {
  bigDonations: any;
  searchTerm: string;
};

function BigDonationsItems({ bigDonations, searchTerm }: Props) {
  const { t } = useTranslation("translation", {
    keyPrefix: "bigDonations",
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
          <S.TH>
            <LinkPage
              page="/big-donors/index"
              text={donation.payer.name ?? ""}
            />
          </S.TH>
          <S.TH>
            <LinkPage
              page={`/causes/${donation.cause?.id}`}
              text={donation.cause?.name ?? ""}
            />
          </S.TH>
          <th>{donation.blockchainStatus}</th>

          <th>
            <Link to={`/big-donors/donations/${donation.id}`}>
              <img src={infoIcon} alt="big donation info" />
            </Link>
          </th>
        </tr>
      ))
    );
  }

  return <tbody>{renderBigDonations()}</tbody>;
}

export default BigDonationsItems;
