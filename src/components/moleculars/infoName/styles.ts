import styled from "styled-components";

export const InfoName = styled.h6``;

export const Box = styled.div`
  margin-top: ${({ theme }) => theme.spacing(4)};
  margin-bottom: ${({ theme }) => theme.spacing(4)};
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: start;
`;

export const Icon = styled.img`
  height: 15px;
`;
