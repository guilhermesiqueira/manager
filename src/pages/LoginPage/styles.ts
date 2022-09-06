import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  flex: auto;
  width: 328px;
`;

export const Title = styled.h6`
  margin: 8px 0 24px 0;
  color: ${({ theme }) => theme.colors.darkGray};
`;

export const TitleError = styled.h6`
  margin: 24px 0 8px 0;
  color: ${({ theme }) => theme.colors.red};
`;

export const SubTitleError = styled.h6`
  color: ${({ theme }) => theme.colors.red};
`;
