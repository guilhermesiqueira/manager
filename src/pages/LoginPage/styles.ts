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
  margin: ${({ theme }) => theme.spacing(8, 0, 24)};
  color: ${({ theme }) => theme.colors.neutral[800]};
`;

export const Text = styled.p`
  margin: ${({ theme }) => theme.spacing(24, 0, 0)};
`

export const TitleError = styled.h6`
  margin: ${({ theme }) => theme.spacing(24, 0, 8)};
  color: ${({ theme }) => theme.colors.brand.tertiary[400]};
`;

export const SubTitleError = styled.h6`
  color: ${({ theme }) => theme.colors.brand.tertiary[400]};
`;
