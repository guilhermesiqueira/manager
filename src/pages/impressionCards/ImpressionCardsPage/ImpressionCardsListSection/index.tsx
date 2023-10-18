import { useEffect, useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { logError } from "services/crashReport";
import useImpressionCards from "hooks/apiHooks/useImpressionCards";
import ImpressionCard from "types/entities/ImpressionCard";
import * as S from "./styles";

function ImpressionCardsListSection(): JSX.Element {
  const [impressionCards, setImpressionCards] = useState<any>([]);
  const { getAllImpressionCards } = useImpressionCards();

  const { t } = useTranslation("translation", {
    keyPrefix: "impressionCards.attributes",
  });

  const fetchImpressionCards = useCallback(async () => {
    try {
      const allImpressionCards = await getAllImpressionCards();
      setImpressionCards(allImpressionCards);
    } catch (e) {
      logError(e);
    }
  }, []);

  useEffect(() => {
    fetchImpressionCards();
  }, []);

  function renderTableRows() {
    return impressionCards?.map((item: ImpressionCard) => (
      <tr key={item.id}>
        <th>{item.id}</th>
        <th>{item.headline}</th>
        <th>{item.title}</th>
        <th>{item.description}</th>
      </tr>
    ));
  }

  return (
    <S.Container>
      <S.Table>
        <thead>
          <tr>
            <th>{t("id")}</th>
            <th>{t("headline")}</th>
            <th>{t("title")}</th>
            <th>{t("description")}</th>
          </tr>
        </thead>
        <tbody>{renderTableRows()}</tbody>
      </S.Table>
    </S.Container>
  );
}

export default ImpressionCardsListSection;
