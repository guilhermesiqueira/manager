import * as S from "./styles";

export type Props = {
  title: string;
  children?: React.ReactNode;
};

function Card({ title, children }: Props) {
  return (
    <S.Container>
      <S.Text>{title}</S.Text>
      {children}
    </S.Container>
  );
}

Card.defaultProps = {
  children: <div />,
};

export default Card;
