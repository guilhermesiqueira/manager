import styled from "styled-components";
import { defaultParagraphSmall } from "styles/typography/default";

export const Info = styled.p`
  ${defaultParagraphSmall}
  color: ${({ theme }) => theme.colors.gray30};
  margin-block: 12px;
`;
