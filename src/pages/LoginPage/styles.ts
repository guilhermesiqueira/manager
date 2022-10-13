import styled from "styled-components";

export const Container = styled.div`
  width: 328px;
  display: flex;
  flex: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h6`
  margin: 8px 0 24px;
  color: ${({ theme }) => theme.colors.gray40};
`;

export const TitleError = styled.h6`
  margin: 24px 0 8px;
  color: ${({ theme }) => theme.colors.red30};
`;

export const SubTitleError = styled.h6`
  color: ${({ theme }) => theme.colors.red30};
`;
