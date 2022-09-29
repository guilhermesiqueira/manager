import * as S from "./styles";

type Props = {
  logo?: string | null;
  children?: JSX.Element | JSX.Element[] | null;
};

function LogoCard({ logo, children = null }: Props): JSX.Element {
  return (
    <S.DotBox>
      <S.CenterBox>
        {logo && <S.Logo src={logo} alt="logo" />}
        {children}
      </S.CenterBox>
    </S.DotBox>
  );
}

export default LogoCard;

LogoCard.defaultProps = {
  logo: null,
  children: null,
};
