import { useTranslation } from "react-i18next";
import { Flex } from "@chakra-ui/react";
import TreasureSection from "./TreasureSection";
import * as S from "./styles";

function DashboardPage(): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "dashboard.treasureDashboard",
  });

  return (
    <S.Container>
      <S.Title>{t("title")}</S.Title>

      <Flex>
        <TreasureSection />
      </Flex>
    </S.Container>
  );
}
export default DashboardPage;
