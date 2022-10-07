import language from "assets/icons/language.png";
import * as S from "./styles";

type Props = {
  hasTranslation?: boolean | null;
  children?: JSX.Element | JSX.Element[] | null;
};

function InfoName({ hasTranslation, children = null }: Props): JSX.Element {
  return (
    <S.Box>
      <S.InfoName>{children}</S.InfoName>
      {hasTranslation && <S.Icon src={language} alt="language" />}
    </S.Box>
  );
}

export default InfoName;

InfoName.defaultProps = {
  hasTranslation: false,
  children: null,
};
