import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { useWalletContext } from "contexts/walletContext";
import { onAccountChange } from "lib/walletConnector";
import WalletIcon from "assets/icons/wallet-icon.svg";
import { walletTruncate } from "lib/walletTruncate";
import { Image } from "@chakra-ui/react";
import ChangeLanguageItem from "components/moleculars/ChangeLanguageItem";
import theme from "styles/theme";
import * as S from "./styles";

export type Props = {
  children: JSX.Element;
  hideWallet?: boolean;
};

function WalletLayout({ children, hideWallet = false }: Props): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "layouts.walletLayout",
  });
  const { primary } = theme.colors.brand;

  const { connectWallet, wallet, checkIfWalletIsConnected, setWallet } =
    useWalletContext();

  const handleAccountChange = (accounts: string[]) => {
    setWallet(accounts[0]);
  };

  useEffect(() => {
    checkIfWalletIsConnected();
    onAccountChange(handleAccountChange);
  }, []);

  const handleWalletButtonClick = () => {
    connectWallet();
  };

  const walletButtonText = () => {
    if (!wallet) return t("connectWallet");

    return walletTruncate(wallet);
  };

  return (
    <S.Container>
      <S.BodyContainer>
        <S.Header>
          {!hideWallet && (
            <S.walletContainer>
              <S.WalletButton
                text={walletButtonText()}
                onClick={handleWalletButtonClick}
                leftIcon={<Image src={WalletIcon} />}
                color={primary[400]}
                borderColor={primary[400]}
              />
            </S.walletContainer>
          )}
          <ChangeLanguageItem />
        </S.Header>
        {children}
      </S.BodyContainer>
    </S.Container>
  );
}

export default WalletLayout;
