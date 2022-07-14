import React from "react";
import * as S from "./styles";

function TreasurePage(): JSX.Element {
  return (
    <S.Container>
      <S.Title>Treasure Dashboard</S.Title>
      <S.Card>
        <S.Subtitle>Assigned (USDC)</S.Subtitle>
        <S.Subtitle>Unassigned (USDC)</S.Subtitle>
      </S.Card>
    </S.Container>
  );
}

export default TreasurePage;
