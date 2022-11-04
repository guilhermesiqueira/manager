import { useTranslation } from "react-i18next";
import CopyableAddress from "components/atomics/CopyableAddress";
import { Link } from "react-router-dom";
import EditIcon from "assets/icons/editIcon";

import InfoName from "components/moleculars/infoName";
import { Button } from "@chakra-ui/react";
import theme from "styles/theme";
import * as S from "./styles";

function CausesDetailsPage(): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "causes.causeDetailsPage",
  });
  const { gray40, gray10, gray30 } = theme.colors;

  return (
    <S.Content>
      <S.Title>{t("title", "causa")}</S.Title>

      <S.Container>
        <S.LeftSection>
          <br />

          <Link to="edit">
            <Button
              color={gray10}
              background={gray40}
              _hover={{ bg: gray30 }}
              leftIcon={<EditIcon />}
            >
              {t("edit")}
            </Button>
          </Link>

          <InfoName>{t("name")}</InfoName>
          <S.InfoValue>Nome da causa</S.InfoValue>

          <InfoName>{t("walletAddress")}</InfoName>
          <CopyableAddress text="enderecodapull" />
        </S.LeftSection>

        <S.RightSection>
          <div> sessao</div>
        </S.RightSection>
      </S.Container>
    </S.Content>
  );
}

export default CausesDetailsPage;
