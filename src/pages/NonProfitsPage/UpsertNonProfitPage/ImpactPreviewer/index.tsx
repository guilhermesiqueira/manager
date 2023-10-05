import { useTranslation } from "react-i18next";
import { impactNormalizer } from "@ribon.io/shared/lib";
import { useNonProfitImpact } from "@ribon.io/shared/hooks";
import { Currencies } from "types/enums/Currencies";
import useRibonConfig from "hooks/apiHooks/useRibonConfig";
import { useEffect, useState } from "react";
import * as S from "./styles";

export type Props = {
  nonProfit: any;
  usdCentsToOneImpactUnit: string;
  defaultAmountInUsd?: number;
};

function ImpactPreviewer({
  nonProfit,
  usdCentsToOneImpactUnit,
  defaultAmountInUsd = 100,
}: Props) {
  const { t } = useTranslation("translation", {
    keyPrefix: "nonProfits.upsert.impactPreviewer",
  });

  const { t: normalizerTranslations } = useTranslation("translation", {
    keyPrefix: "impactNormalizer",
  });

  const { getConfig } = useRibonConfig();
  const [impactByTicket, setImpacByTicket] = useState<number>(0);

  async function fetchImpactByTicket() {
    const config = await getConfig();
    const result =
      parseFloat(config[0].defaultTicketValue) /
      parseFloat(usdCentsToOneImpactUnit);
    setImpacByTicket(parseInt(result.toFixed(2), 10));
  }
  useEffect(() => {
    fetchImpactByTicket();
  }, []);

  const { nonProfitImpact } = useNonProfitImpact(
    nonProfit?.id,
    defaultAmountInUsd,
    Currencies.USD,
  );

  return (
    nonProfit?.nonProfitImpacts &&
    nonProfitImpact && (
      <S.Container>
        <S.Title>{t("previewTicket")}</S.Title>
        <S.Info>
          {t("oneTicket")}{" "}
          {impactNormalizer(
            nonProfit,
            impactByTicket,
            normalizerTranslations,
          ).join(" ")}
        </S.Info>
        <S.Title>{t("previewContribution")}</S.Title>
        <S.Info>
          ${defaultAmountInUsd} {t("fund")}{" "}
          {impactNormalizer(
            nonProfit,
            Number(nonProfitImpact?.roundedImpact),
            normalizerTranslations,
          ).join(" ")}
        </S.Info>
      </S.Container>
    )
  );
}

export default ImpactPreviewer;
