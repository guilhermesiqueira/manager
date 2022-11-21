import { Button } from "@chakra-ui/react";
import useOffers from "hooks/apiHooks/useOffers";
import { useCallback, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { logError } from "services/crashReport";
import Offer from "types/entities/Offer";
import AddIcon from "assets/icons/addIcon";
import theme from "styles/theme";
import OffersItems from "../OffersItems";
import * as S from "./styles";

function OffersListSection(): JSX.Element {
  const [offers, setOffers] = useState<Offer[]>([]);
  const { getOffers } = useOffers();
  const { t } = useTranslation("translation", {
    keyPrefix: "offersPage.offersListSection",
  });
  const [currentOffers, setCurrentOffers] = useState<Offer[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;
  const [searchTerm, setSearchTerm] = useState("");

  const { gray10, gray30, gray40 } = theme.colors;

  const navigate = useNavigate();

  const handleAddNew = () => {
    navigate("/offers/new");
  };

  const fetchOffers = useCallback(async () => {
    try {
      const allOffers = await getOffers();
      setOffers(allOffers);
    } catch (e) {
      logError(e);
    }
  }, [setOffers]);

  useEffect(() => {
    fetchOffers();
  }, [fetchOffers]);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    const allItems = offers.slice(itemOffset, endOffset);

    setCurrentOffers(allItems);

    setPageCount(Math.ceil(offers.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, offers]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % offers.length;

    setItemOffset(newOffset);
  };

  return (
    <S.Container>
      <S.ButtonContainer>
        <Button
          color={gray10}
          backgroundColor={gray40}
          _hover={{ bg: gray30 }}
          marginLeft="8px"
          marginRight="8px"
          onClick={handleAddNew}
          leftIcon={AddIcon()}
        >
          {t("createNew")}
        </Button>
        <S.SearchBar
          placeholder={t("search")}
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </S.ButtonContainer>

      <S.Table>
        <thead>
          <tr>
            <th>{t("listColumns.id")}</th>
            <th>{t("listColumns.currency")}</th>
            <th>{t("listColumns.price")}</th>
            <th>{t("listColumns.gateway")}</th>
            <th>{t("listColumns.externalId")}</th>
            <th>{t("listColumns.status")}</th>
          </tr>
        </thead>
        <OffersItems searchTerm={searchTerm} offers={currentOffers} />
      </S.Table>

      <S.Pagination
        breakLabel="..."
        previousLabel={t("previous")}
        nextLabel={t("next")}
        onPageChange={handlePageClick}
        pageRangeDisplayed={10}
        pageCount={pageCount}
      />
    </S.Container>
  );
}

export default OffersListSection;
