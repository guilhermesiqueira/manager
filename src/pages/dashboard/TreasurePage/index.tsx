import React from "react";
import TreasureSection from "./TreasureSection";
import * as S from "./styles";

function TreasurePage(): JSX.Element {
  return (
    <S.Container>
      <S.Title>Treasure Dashboard</S.Title>
      <TreasureSection />
    </S.Container>
  );
}

export default TreasurePage;
