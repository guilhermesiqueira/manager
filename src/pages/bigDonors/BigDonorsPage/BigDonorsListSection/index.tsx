import { useEffect, useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import useBigDonors from "hooks/apiHooks/useBigDonors";
import { logError } from "services/crashReport";
import theme from "styles/theme";
import AddIcon from "assets/icons/addIcon";
import { Button } from "@chakra-ui/react";
import * as S from "./styles";
import BigDonorsItems from "../BigDonorsItems";

function BigDonorsListSection(): JSX.Element {
  const { neutral } = theme.colors;
  const navigate = useNavigate();
  const [allBigDonors, setAllBigDonors] = useState<any>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { getBigDonors } = useBigDonors();

  const { t } = useTranslation("translation", {
    keyPrefix: "bigDonors.attributes",
  });

  const fetchAllBigDonors = useCallback(async () => {
    try {
      const bigDonors = await getBigDonors();
      setAllBigDonors(bigDonors);
    } catch (e) {
      logError(e);
    }
  }, []);

  const handleAddNew = () => {
    navigate("/big-donors/new");
  };

  useEffect(() => {
    fetchAllBigDonors();
  }, []);

  return (
    <S.Container>
      <S.ButtonContainer>
        <Button
          color={neutral[50]}
          backgroundColor={neutral[800]}
          _hover={{ bg: neutral[500] }}
          marginRight="8px"
          onClick={handleAddNew}
          leftIcon={AddIcon()}
        >
          {t("createNew")}
        </Button>
        <S.SearchBar
          placeholder={t("search")}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </S.ButtonContainer>

      <S.Table>
        <thead>
          <tr>
            <th>{t("name")}</th>
            <th>{t("email")}</th>
          </tr>
        </thead>
        <BigDonorsItems searchTerm={searchTerm} bigDonors={allBigDonors} />
      </S.Table>
    </S.Container>
  );
}

export default BigDonorsListSection;
