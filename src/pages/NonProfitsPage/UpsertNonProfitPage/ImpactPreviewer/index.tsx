import { useTranslation } from "react-i18next";
import { impactNormalizer } from "@ribon.io/shared/lib";
import { useNonProfitImpact } from "@ribon.io/shared/hooks";
import { Currencies } from "types/enums/Currencies";
import * as S from "./styles";

export type Props = {
  nonProfit: any;
  defaultAmountInUsd?: number;
};

function ImpactPreviewer({ nonProfit, defaultAmountInUsd = 100 }: Props) {
  const { t } = useTranslation("translation", {
    keyPrefix: "nonProfits.upsert.impactPreviewer",
  });

  const { t: normalizerTranslations } = useTranslation("translation", {
    keyPrefix: "impactNormalizer",
  });

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
            nonProfit?.impactByTicket,
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
