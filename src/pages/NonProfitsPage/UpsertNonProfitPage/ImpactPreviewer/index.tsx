import React from "react";
import { useTranslation } from "react-i18next";
import { impactNormalizer } from "@ribon.io/shared/lib";
import * as S from "./styles";

export type Props = {
  nonProfit: any;
  defaultAmountInUsd?: number;
};

function ImpactPreviewer({ nonProfit, defaultAmountInUsd = 100 }: Props) {
  const [roundedImpact, setRoundedImpact] = React.useState(0);
  const { t } = useTranslation("translation", {
    keyPrefix: "impactNormalizer",
  });

  React.useEffect(() => {
    if (nonProfit?.nonProfitImpacts) {
      setRoundedImpact(
        defaultAmountInUsd /
          Number(nonProfit?.nonProfitImpacts[0]?.usdCentsToOneImpactUnit),
      );
    }
  }, [nonProfit?.nonProfitImpacts]);

  return (
    nonProfit &&
    nonProfit?.nonProfitImpacts &&
    roundedImpact && (
      <S.Info>
        Com ${defaultAmountInUsd} você doa{" "}
        {impactNormalizer(nonProfit, roundedImpact, t)}
      </S.Info>
    )
  );
}

export default ImpactPreviewer;
