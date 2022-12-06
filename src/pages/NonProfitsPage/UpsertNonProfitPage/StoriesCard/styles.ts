import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 564px;
  border: 2px solid ${({ theme }) => theme.colors.gray20};
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 12px;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CardImage = styled.img`
  width: 156px;
  height: 148px;
  border-radius: 8px;
  object-fit: cover;
`;

export const CardTitle = styled.h5`
  font-weight: 500;
`;

export const CardDescription = styled.h6`
  font-weight: 400;
`;

export const LeftSection = styled.div`
  display: flex;
  width: 30%;
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin-left: 24px;
`;

export const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
`;
