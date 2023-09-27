import styled from "styled-components";
import {
  defaultBodySmSemibold,
  defaultBodyXsRegular,
} from "styles/typography/default";

export const Info = styled.p`
  ${defaultBodyXsRegular}

  margin-block: 12px;
  color: ${({ theme }) => theme.colors.neutral[500]};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(16)};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.neutral[200]};
  margin-bottom: ${({ theme }) => theme.spacing(16)};
`;

export const Title = styled.h3`
  ${defaultBodySmSemibold}
`;
