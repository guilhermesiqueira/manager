import * as S from "./styles";

export type Props = {
  title: string;
  description: string;
  image: string;
  key: number | string;
};

function StoriesCard({ title, description, image, key }: Props) {
  return (
    <S.Container key={key}>
      <S.CardContainer>
        <S.LeftSection>
          <S.ItemBox>
            <S.CardImage src={image && image} />
          </S.ItemBox>
        </S.LeftSection>

        <S.RightSection>
          <S.ItemBox>
            <S.CardTitle>{title}</S.CardTitle>
            <S.CardDescription>{description}</S.CardDescription>
          </S.ItemBox>
        </S.RightSection>
      </S.CardContainer>
    </S.Container>
  );
}

export default StoriesCard;
