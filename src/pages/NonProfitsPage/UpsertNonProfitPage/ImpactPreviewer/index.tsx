import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { impactNormalizer } from "@ribon.io/shared/lib";
import * as S from "./styles";

export type Props = {
  nonProfit: any;
  defaultAmountInUsd?: number;
};

function ImpactPreviewer({ nonProfit, defaultAmountInUsd = 100 }: Props) {
  const [roundedImpact, setRoundedImpact] = useState(0);
  const { t } = useTranslation("translation", {
    keyPrefix: "nonProfits.upsert.impactPreviewer",
  });

  const { t: normalizerTranslations } = useTranslation("translation", {
    keyPrefix: "impactNormalizer",
  });

  useEffect(() => {
    if (nonProfit?.nonProfitImpacts) {
      setRoundedImpact(
        defaultAmountInUsd /
          Number(nonProfit?.nonProfitImpacts[0]?.usdCentsToOneImpactUnit),
      );
    }
  }, [nonProfit?.nonProfitImpacts]);

  return (
    nonProfit?.nonProfitImpacts &&
    roundedImpact && (
      <S.Info>
        ${defaultAmountInUsd} {t("fund")}{" "}
        {impactNormalizer(nonProfit, roundedImpact, normalizerTranslations)}
      </S.Info>
    )
  );
}

export default ImpactPreviewer;
