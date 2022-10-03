import NoImageIcon from "assets/icons/image_not_supported.svg";
import { useTranslation } from "react-i18next";
import * as S from "./styles";

type Props = {
  logo?: string | null;
  empty?: boolean;
  children?: JSX.Element | JSX.Element[] | null;
};

function LogoCard({
  logo,
  empty = false,
  children = null,
}: Props): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "commom",
  });
  return (
    <S.DotBox>
      {empty ? (
        <S.CenterBox>
          <S.Icon src={NoImageIcon} alt="file" />
          <S.Text>{t("notRegistered")}</S.Text>
        </S.CenterBox>
      ) : (
        logo && (
          <S.CenterBox>
            <S.Logo src={logo} alt="logo" />
          </S.CenterBox>
        )
      )}
      {children}
    </S.DotBox>
  );
}

export default LogoCard;

LogoCard.defaultProps = {
  logo: null,
  empty: false,
  children: null,
};
