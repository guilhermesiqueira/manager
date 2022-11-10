import styled from "styled-components";

export const CauseCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  margin-bottom: 20px;
`;

export const CauseTitle = styled.h6`
  color: ${({ theme }) => theme.colors.gray30};
  font-weight: 400;
`;

export const CauseValue = styled.h5`
  color: ${({ theme }) => theme.colors.green30};
`;
