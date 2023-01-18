import styled from "styled-components";

export const Title = styled.h2`
  margin: 84px 0 32px;
  text-transform: uppercase;
`;

export const TextInput = styled.input`
  min-width: 274px;
  max-width: 274px;
  margin: 8px 0 30px;
  padding: 8px 16px;
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
  min-width: 274px;
  max-width: 274px;
  margin: 8px 0 30px;
  padding: 8px 16px;
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
  margin: 5px 7px 30px 4px;
  display: inline-block;
  vertical-align: middle;
  color: ${({ color, theme }) => color || theme.colors.darkGray};

  ::first-letter {
    text-transform: uppercase;
  }
`;

export const Error = styled.span`
  margin-top: -20px;
  color: ${({ color, theme }) => color || theme.colors.red30};

  ::first-letter {
    text-transform: uppercase;
  }
`;

export const DoubleItemSection = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Info = styled.p`
  color: ${({ theme }) => theme.colors.gray30};
`;

export const ItemBox = styled.div`
  margin-right: 16px;
  display: flex;
  flex-direction: column;
`;
