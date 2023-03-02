import styled from "styled-components";
import { defaultBodyXsRegular } from "styles/typography/default";

export const TextInput = styled.input`
  width: 100%;
  margin: ${({ theme }) => theme.spacing(8, 0, 12)};
  padding: ${({ theme }) => theme.spacing(8, 16)};
  border: 1px solid ${({ theme }) => theme.colors.darkGray};
  border-radius: 4px;
  display: block;
  color: ${({ theme }) => theme.colors.darkGray};

  ::placeholder {
    color: ${({ theme }) => theme.colors.gray};
    opacity: 1;
  }
`;

export const AreaInput = styled.textarea`
  width: 100%;
  margin: ${({ theme }) => theme.spacing(8, 0, 12)};
  padding: ${({ theme }) => theme.spacing(8, 16)};
  border: 1px solid ${({ theme }) => theme.colors.darkGray};
  border-radius: 4px;
  display: block;
  color: ${({ theme }) => theme.colors.darkGray};

  ::placeholder {
    color: ${({ theme }) => theme.colors.gray};
    opacity: 1;
  }
`;

export const Span = styled.span`
  margin: ${({ theme }) => theme.spacing(4, 8, 32, 4)};
  display: inline-block;
  vertical-align: middle;
  color: ${({ color, theme }) => color || theme.colors.darkGray};

  ::first-letter {
    text-transform: uppercase;
  }
`;

export const Error = styled.span`
  margin-top: -20px;
  color: ${({ color, theme }) => color || theme.colors.brand.tertiary[400]};

  ::first-letter {
    text-transform: uppercase;
  }
`;

export const DoubleItemSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const Info = styled.p`
  ${defaultBodyXsRegular}

  color: ${({ theme }) => theme.colors.neutral[500]};
`;

export const ItemBox = styled.div`
  margin-right: ${({ theme }) => theme.spacing(16)};
  display: flex;
  flex-direction: column;
`;
