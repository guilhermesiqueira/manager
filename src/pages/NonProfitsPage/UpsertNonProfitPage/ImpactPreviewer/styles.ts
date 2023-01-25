import styled from "styled-components";
import { defaultBodyXsRegular } from "styles/typography/default";

export const Info = styled.p`
  ${defaultBodyXsRegular}

  margin-block: 12px;
  color: ${({ theme }) => theme.colors.gray30};
`;
