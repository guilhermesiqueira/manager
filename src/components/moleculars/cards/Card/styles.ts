import styled from "styled-components";
import { defaultTitleMedium } from "styles/typography/default";

export const Text = styled.h3`
  ${defaultTitleMedium}

  color: ${({ theme }) => theme.colors.gray40};
`;

export const Container = styled.div`
  padding: 12px 16px;
  border: 1px solid ${({ theme }) => theme.colors.gray20};
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.neutral10};
`;
