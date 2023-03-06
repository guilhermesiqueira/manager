import { useTranslation } from "react-i18next";
import NewsListSection from "./NewsListSection";
import * as S from "./styles";

function NewsPage(): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "news.list",
  });

  return (
    <S.Container>
      <S.Title>{t("title")}</S.Title>

      <NewsListSection />
    </S.Container>
  );
}

export default NewsPage;
