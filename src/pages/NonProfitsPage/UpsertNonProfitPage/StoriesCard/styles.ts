import styled from "styled-components";

export const Container = styled.div`
  max-width: 564px;
  margin-bottom: ${({ theme }) => theme.spacing(12)};
  padding: ${({ theme }) => theme.spacing(24)};
  border: 2px solid ${({ theme }) => theme.colors.neutral[200]};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
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
  width: 30%;
  display: flex;
`;

export const RightSection = styled.div`
  width: 70%;
  margin-left: ${({ theme }) => theme.spacing(24)};
  display: flex;
  flex-direction: column;
`;

export const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
`;
