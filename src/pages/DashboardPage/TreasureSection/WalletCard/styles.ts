import styled from "styled-components";
import { defaultParagraphSmall } from "styles/typography/default";

export const Title = styled.h3`
  ${defaultParagraphSmall};
  color: ${({ theme }) => theme.colors.gray30};
`;

export const Value = styled.h4`
  color: ${({ color, theme }) => color || theme.colors.green30};
`;
