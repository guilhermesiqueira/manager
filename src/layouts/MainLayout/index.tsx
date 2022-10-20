import ChangeLanguageItem from "components/moleculars/ChangeLanguageItem";
import React from "react";
import * as S from "./styles";

export type Props = {
  children: JSX.Element;
};
function MainLayout({ children }: Props): JSX.Element {
  return (
    <S.Container>
      <S.BodyContainer>
        <ChangeLanguageItem />
        {children}
      </S.BodyContainer>
    </S.Container>
  );
}

export default MainLayout;
