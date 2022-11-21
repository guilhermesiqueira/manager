import { Link } from "react-router-dom";
import infoIcon from "assets/icons/info-icon.svg";
import editIcon from "assets/icons/edit-icon.svg";
import CopyableAddress from "components/atomics/CopyableAddress";

import Offer from "types/entities/Offer";
import theme from "styles/theme";
import { useTranslation } from "react-i18next";
import { capitalize } from "lib/capitalize";
import * as S from "./styles";

type Props = {
  offers: Offer[];
  searchTerm: string;
};

function OffersItems({ offers, searchTerm }: Props) {
  const { green30, red30 } = theme.colors;
  const { t } = useTranslation("translation", {
    keyPrefix: "offersPage.offersListSection.offersItems",
  });

  function filterOffers(nonFilteredOffers: Offer[]) {
    return nonFilteredOffers.filter((offerData: Offer) => {
      if (searchTerm === "") {
        return offerData;
      } else if (offerData?.id?.toString().includes(searchTerm)) {
        return offerData;
      } else {
        return null;
      }
    });
  }

  function renderOffers() {
    return (
      offers &&
      filterOffers(offers).map((offer: Offer) => (
        <tr key={offer?.id}>
          <th>{offer?.id}</th>
          <th>{offer?.currency.toUpperCase()}</th>
          <th>{offer.priceCents}</th>
          <th>{capitalize(offer?.gateway)}</th>
          <th>
            <CopyableAddress text={offer?.externalId} />
          </th>
          <th>
            {" "}
            <S.StatusTableCell
              style={{ color: offer?.active ? green30 : red30 }}
            >
              {offer?.active ? t("active") : t("inactive")}
            </S.StatusTableCell>
          </th>
          <th>
            <S.ActionsTableCell>
              <Link to={`/offers/${offer.id}`}>
                <img src={infoIcon} alt="view offer info" />
              </Link>

              <Link to={`/offers/${offer.id}/edit`}>
                <img src={editIcon} alt="edit offer info" />
              </Link>
            </S.ActionsTableCell>
          </th>
        </tr>
      ))
    );
  }

  return <tbody>{renderOffers()}</tbody>;
}

export default OffersItems;
