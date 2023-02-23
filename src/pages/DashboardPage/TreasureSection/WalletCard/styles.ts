import styled from "styled-components";
import { defaultBodyXsRegular } from "styles/typography/default";

export const Title = styled.h3`
  ${defaultBodyXsRegular}

  color: ${({ theme }) => theme.colors.neutral[500]};
`;

export const Value = styled.h4`
  color: ${({ color, theme }) => color || theme.colors.brand.primary[300]};
`;
