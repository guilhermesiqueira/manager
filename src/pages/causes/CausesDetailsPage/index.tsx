import { useTranslation } from "react-i18next";
import CopyableAddress from "components/atomics/CopyableAddress";
import { Link, useNavigate, useParams } from "react-router-dom";
import EditIcon from "assets/icons/editIcon";

import InfoName from "components/moleculars/infoName";
import { Button } from "@chakra-ui/react";
import theme from "styles/theme";
import { useCallback, useEffect, useState } from "react";
import { logError } from "services/crashReport";
import useCauses from "hooks/apiHooks/useCauses";
import Cause from "types/entities/Cause";
import ArrowOutward from "assets/icons/arrow-outward.svg";
import usePools from "hooks/apiTheGraphHooks/usePools";
import Pool from "types/apiResponses/pool";
import { formatFromDecimals } from "lib/web3Helpers/etherFormatters";
import NonProfit from "types/entities/NonProfit";
import * as S from "./styles";

function CausesDetailsPage(): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "causes",
  });
  const { gray40, neutral } = theme.colors;

  const [cause, setCause] = useState<Cause>();
  const [pool, setPool] = useState<Pool>();

  const { getCause } = useCauses();
  const { getPool } = usePools();

  const navigate = useNavigate();

  const { id } = useParams();

  const handleClick = (causeId: string) => {
    navigate(`/ngos/${causeId}`);
  };

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
      <S.Title>{t("details.title")}</S.Title>

      <S.Container>
        <S.LeftSection>
          <S.Subtitle>{t("attributes.availableToDonation")}</S.Subtitle>
          <S.SubtitleInfo>
            {formatFromDecimals(pool?.balance ?? 0).toFixed(2)}
          </S.SubtitleInfo>

          <Link to="edit">
            <Button
              color={neutral[50]}
              background={gray40}
              _hover={{ bg: neutral[500] }}
              leftIcon={<EditIcon />}
            >
              {t("details.edit")}
            </Button>
          </Link>

          <InfoName>{t("attributes.name")}</InfoName>
          <S.InfoValue>{cause?.name}</S.InfoValue>

          <InfoName>{t("attributes.poolAddress")}</InfoName>
          <CopyableAddress
            text={cause?.pools.length ? cause?.pools[0].address : "-"}
          />
        </S.LeftSection>

        <S.RightSection>
          <S.Subtitle>{t("details.linkedProjects")}</S.Subtitle>
          {cause?.nonProfits.map((nonProfit: NonProfit) => (
            <S.CardProject onClick={() => handleClick(nonProfit.id)}>
              <S.CardProjectInfo>{nonProfit.name}</S.CardProjectInfo>{" "}
              <S.ArrowOutward src={ArrowOutward} alt="project link" />
            </S.CardProject>
          ))}

          <S.ItemBox>
            <InfoName>{t("details.mainImage")}</InfoName>
            <S.CardImage src={cause?.mainImage} />
          </S.ItemBox>

          <S.ItemBox>
            <InfoName>{t("details.coverImage")}</InfoName>
            <S.CardImage src={cause?.coverImage} />
          </S.ItemBox>
        </S.RightSection>
      </S.Container>
    </S.Content>
  );
}

export default CausesDetailsPage;
