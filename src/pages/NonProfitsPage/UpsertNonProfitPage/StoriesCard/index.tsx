import * as S from "./styles";

export type Props = {
  title: string;
  description: string;
  image: string;
};

function StoriesCard({ title, description, image }: Props) {
  return (
    <S.Container>
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
