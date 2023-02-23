import styled from "styled-components";
import { defaultHeadingXxs } from "styles/typography/default";

export const Text = styled.h3`
  ${defaultHeadingXxs}

  color: ${({ theme }) => theme.colors.neutral[800]};
`;

export const Container = styled.div`
  padding: ${({ theme }) => theme.spacing(12, 16)};
  border: 1px solid ${({ theme }) => theme.colors.neutral[200]};
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.neutral10};
`;
