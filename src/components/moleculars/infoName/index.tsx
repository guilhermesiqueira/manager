import language from "assets/icons/language.png";
import { useTranslation } from "react-i18next";
import * as S from "./styles";

type Props = {
  hasTranslation?: boolean | null;
  children?: JSX.Element | JSX.Element[] | null;
  optional?: boolean | null;
};

function InfoName({
  hasTranslation,
  children = null,
  optional = false,
}: Props): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "components.infoName",
  });

  return (
    <S.Box>
      <S.InfoName>
        {children} {optional ? t("optional") : null}
      </S.InfoName>
      {hasTranslation && <S.Icon src={language} alt="language" />}
    </S.Box>
  );
}

export default InfoName;

InfoName.defaultProps = {
  hasTranslation: false,
  children: null,
};
