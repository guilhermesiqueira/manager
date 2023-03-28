import { useEffect, useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import useBigDonors from "hooks/apiHooks/useBigDonors";
import { logError } from "services/crashReport";
import * as S from "./styles";

function BigDonorsListSection(): JSX.Element {
  const [allBigDonors, setAllBigDonors] = useState<any>([]);
  const { getAllBigDonors } = useBigDonors();

  const { t } = useTranslation("translation", {
    keyPrefix: "bigDonations.bigDonors.attributes",
  });

  const fetchAllBigDonors = useCallback(async () => {
    try {
      const BigDonors = await getAllBigDonors();
      setAllBigDonors(BigDonors);
    } catch (e) {
      logError(e);
    }
  }, []);

  useEffect(() => {
    fetchAllBigDonors();
  }, []);

  function renderTableRowsForBigDonors() {
    if (allBigDonors.length === 0)
      return (
        <tr key="noDonor">
          <th>{t("noBigDonors")}</th>
        </tr>
      );

    return allBigDonors?.map((donor: any) => (
      <tr key={donor.id}>
        <th>{donor.name}</th>
        <th>{donor.email}</th>
      </tr>
    ));
  }

  return (
    <S.Container>
      <S.Table>
        <thead>
          <tr>
            <th>{t("name")}</th>
            <th>{t("email")}</th>
          </tr>
        </thead>
        <tbody>{renderTableRowsForBigDonors()}</tbody>
      </S.Table>
    </S.Container>
  );
}

export default BigDonorsListSection;
