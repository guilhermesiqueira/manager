import styled from "styled-components";

export const CauseCard = styled.div`
  width: 25%;
  margin-bottom: ${({ theme }) => theme.spacing(20)};
  display: flex;
  flex-direction: column;
`;

export const CauseTitle = styled.h6`
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray30};
`;

export const CauseValue = styled.h5`
  color: ${({ theme }) => theme.colors.green30};
`;
