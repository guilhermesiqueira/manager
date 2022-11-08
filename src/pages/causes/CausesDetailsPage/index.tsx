import { useTranslation } from "react-i18next";
import CopyableAddress from "components/atomics/CopyableAddress";
import { Link, useParams } from "react-router-dom";
import EditIcon from "assets/icons/editIcon";

import InfoName from "components/moleculars/infoName";
import { Button } from "@chakra-ui/react";
import theme from "styles/theme";
import { useCallback, useEffect, useState } from "react";
import { logError } from "services/crashReport";
import useCauses from "hooks/apiHooks/useCauses";
import { Cause } from "types/entities/Cause";
import ArrowOutward from "assets/icons/arrow-outward.svg";
import usePools from "hooks/apiTheGraphHooks/usePools";
import Pool from "types/apiResponses/pool";
import { formatFromDecimals } from "lib/web3Helpers/etherFormatters";
import * as S from "./styles";

function CausesDetailsPage(): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "causes.causeDetailsPage",
  });
  const { gray40, gray10, gray30 } = theme.colors;

  const [cause, setCause] = useState<Cause>();
  const [pool, setPool] = useState<Pool>();

  const { getCause } = useCauses();
  const { getPool } = usePools();

  const { id } = useParams();

  const fetchCause = useCallback(async () => {
    try {
      const causeData = await getCause(id);

      setCause(causeData);

      const apiPool = await getPool(causeData?.pools[0].address ?? "");

      setPool(apiPool.pools[0]);
    } catch (e) {
      logError(e);
    }
  }, []);

  useEffect(() => {
    fetchCause();
  }, []);

  return (
    <S.Content>
      <S.Title>{t("title")}</S.Title>

      <S.Container>
        <S.LeftSection>
          <S.Subtitle>{t("availableToDonation")}</S.Subtitle>
          <S.SubtitleInfo>
            {formatFromDecimals(pool?.balance ?? 0).toFixed(2)}
          </S.SubtitleInfo>

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
          <S.InfoValue>{cause?.name}</S.InfoValue>

          <InfoName>{t("poolAddress")}</InfoName>
          <CopyableAddress
            text={cause?.pools.length ? cause?.pools[0].address : "-"}
          />
        </S.LeftSection>

        <S.RightSection>
          <S.Subtitle>{t("linkedProjects")}</S.Subtitle>
          <S.CardProject>
            <S.CardProjectInfo>Link</S.CardProjectInfo>{" "}
            <S.ArrowOutward src={ArrowOutward} alt="project link" />
          </S.CardProject>
        </S.RightSection>
      </S.Container>
    </S.Content>
  );
}

export default CausesDetailsPage;
