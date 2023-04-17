import LinkPage from "components/atomics/LinkPage";
import InfoName from "components/moleculars/infoName";
import usePersonPayments from "hooks/apiHooks/usePersonPayments";
import dateFormatterWithMinutes from "lib/dateFormatterWithMinutes";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";
import { logError } from "services/crashReport";
import * as S from "./styles";

function BigDonationsDetailsPage(): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "bigDonations.bigDonations.details",
  });

  const { id } = useParams();
  const { getBigDonorPersonPayment } = usePersonPayments();
  const [bigDonorDonation, setBigDonorDonation] = useState<any>([]);

  const fetchBigDonorDonation = useCallback(async () => {
    try {
      if (!id) return;
      const donation = await getBigDonorPersonPayment(id);
      setBigDonorDonation(donation);
    } catch (e) {
      logError(e);
    }
  }, []);

  useEffect(() => {
    fetchBigDonorDonation();
  }, []);

  return (
    <S.Container>
      <S.Title>{t("title")}</S.Title>

      <InfoName>{t("attributes.id")}</InfoName>
      <S.InfoValue>{id}</S.InfoValue>

      <InfoName>{t("attributes.value")}</InfoName>
      <S.InfoValue>{bigDonorDonation.amountCents}</S.InfoValue>

      <InfoName>{t("attributes.bigDonor")}</InfoName>
      <LinkPage
        page="/big-donors/index"
        text={bigDonorDonation.payer?.name ?? ""}
      />

      <InfoName>{t("attributes.cause")}</InfoName>
      <LinkPage
        page={`/causes/${bigDonorDonation.cause?.id}`}
        text={bigDonorDonation.cause?.name}
      />
      <InfoName>{t("attributes.processingDate")}</InfoName>
      <S.InfoValue>
        {dateFormatterWithMinutes(bigDonorDonation.paidDate)}
      </S.InfoValue>

      <InfoName>{t("attributes.status")}</InfoName>
      <S.InfoValue>{bigDonorDonation.status}</S.InfoValue>
    </S.Container>
  );
}
export default BigDonationsDetailsPage;
