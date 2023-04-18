import { useEffect, useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import usePersonPayments from "hooks/apiHooks/usePersonPayments";
import { logError } from "services/crashReport";
import theme from "styles/theme";
import AddIcon from "assets/icons/addIcon";
import { Button } from "@chakra-ui/react";
import { useWalletContext } from "contexts/walletContext";
import BigDonationsItems from "../BigDonationsItems";
import * as S from "./styles";

function BigDonationsListSection(): JSX.Element {
  const { neutral } = theme.colors;
  const navigate = useNavigate();
  const [allBigDonations, setAllBigDonations] = useState<any>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { getBigDonorsPayments } = usePersonPayments();

  const { t } = useTranslation("translation", {
    keyPrefix: "bigDonations.attributes",
  });

  const { connectWallet, checkIfWalletIsConnected, wallet } =
    useWalletContext();

  const fetchAllBigDonations = useCallback(async () => {
    try {
      const bigDonations = await getBigDonorsPayments();
      setAllBigDonations(bigDonations);
    } catch (e) {
      logError(e);
    }
  }, []);

  const handleAddNew = () => {
    if (!wallet) {
      connectWallet();
    } else {
      navigate("/big-donors/donations/new");
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
    fetchAllBigDonations();
  }, []);

  return (
    <S.Container>
      <S.ButtonContainer>
        <Button
          color={neutral[50]}
          backgroundColor={neutral[800]}
          _hover={{ bg: neutral[500] }}
          marginRight="8px"
          onClick={handleAddNew}
          leftIcon={AddIcon()}
        >
          {t("createNew")}
        </Button>
        <S.SearchBar
          placeholder={t("search")}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </S.ButtonContainer>

      <S.Table>
        <thead>
          <tr>
            <th>{t("donationId")}</th>
            <th>{t("transactionHash")}</th>
            <th>{t("value")}</th>
            <th>{t("processingDate")}</th>
            <th>{t("bigDonor")}</th>
            <th>{t("status")}</th>
          </tr>
        </thead>
        <BigDonationsItems
          searchTerm={searchTerm}
          bigDonations={allBigDonations}
        />
      </S.Table>
    </S.Container>
  );
}

export default BigDonationsListSection;
