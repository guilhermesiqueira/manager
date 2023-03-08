import useArticles from "hooks/apiHooks/useArticles";
import { useCallback, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import AddIcon from "assets/icons/addIcon";
import { logError } from "services/crashReport";
import Article from "types/entities/Article";
import { useNavigate } from "react-router";
import theme from "styles/theme";
import NewsItems from "../NewsItems";
import * as S from "./styles";

function NewsListSection(): JSX.Element {
  const [articles, setArticles] = useState<Article[]>([]);
  const { getArticles } = useArticles();
  const { t } = useTranslation("translation", {
    keyPrefix: "news",
  });
  const [currentArticles, setCurrentArticles] = useState<Article[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;
  const [searchTerm, setSearchTerm] = useState("");

  const fetchArticles = useCallback(async () => {
    try {
      const allArticles = await getArticles();
      setArticles(allArticles);
    } catch (e) {
      logError(e);
    }
  }, [setArticles]);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    const allItems = articles.slice(itemOffset, endOffset);

    setCurrentArticles(allItems);

    setPageCount(Math.ceil(articles.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, articles]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % articles.length;

    setItemOffset(newOffset);
  };

  const { neutral } = theme.colors;

  const navigate = useNavigate();

  const handleAddNew = () => {
    navigate("/news/articles/new");
  };

  return (
    <S.Container>
      <S.ButtonContainer>
        <S.AddButton
          color={neutral[50]}
          backgroundColor={neutral[800]}
          _hover={{ bg: neutral[500] }}
          marginLeft="8px"
          onClick={handleAddNew}
          leftIcon={AddIcon()}
        >
          {t("list.createNew")}
        </S.AddButton>

        <S.SearchBar
          placeholder={t("list.search")}
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </S.ButtonContainer>
      <S.Table>
        <thead>
          <tr>
            <th>{t("attributes.id")}</th>
            <th>{t("attributes.content")}</th>
            <th>{t("attributes.link")}</th>
            <th>{t("attributes.author")}</th>
            <th>{t("attributes.publicationDate")}</th>
            <th>{t("attributes.visibility")}</th>
          </tr>
        </thead>
        <NewsItems searchTerm={searchTerm} articles={currentArticles} />
      </S.Table>

      <S.Pagination
        breakLabel="..."
        previousLabel={t("list.previous")}
        nextLabel={t("list.next")}
        onPageChange={handlePageClick}
        pageRangeDisplayed={10}
        pageCount={pageCount}
      />
    </S.Container>
  );
}

export default NewsListSection;
