import styled from "styled-components";

export const Container = styled.div`
  padding: 12px 24px 24px;
  border: 2px solid ${({ theme }) => theme.colors.gray20};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Checkbox = styled.input`
  accent-color: ${({ theme }) => theme.colors.green30};
  margin: 5px 7px 30px 4px;
  display: inline-block;
  vertical-align: middle;
  transform: scale(1.5);
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

export const LeftSection = styled.div`
  margin-top: 12px;
  display: flex;
`;

export const RightSection = styled.div`
  margin-left: 8px;
  display: flex;
  flex-direction: column;
`;

export const Subtitle = styled.h3`
  margin-bottom: 12px;
`;

export const SubtitleDescription = styled.h4`
  margin-bottom: 4px;
  font-weight: 400;
`;

export const TextInput = styled.input`
  width: 336px;
  margin: 8px 0;
  padding: 8px 16px;
  border: 1px solid ${({ theme }) => theme.colors.gray40};
  border-radius: 10px;
  display: block;
  color: ${({ theme }) => theme.colors.gray40};

  ::placeholder {
    color: ${({ theme }) => theme.colors.gray30};
    opacity: 1;
  }
`;

export const Error = styled.span`
  color: ${({ color, theme }) => color || theme.colors.red30};

  ::first-letter {
    text-transform: uppercase;
  }
`;

export const ItemBox = styled.div`
  margin-right: 16px;
  display: flex;
  flex-direction: column;
`;

export const ButtonContainer = styled.div`
  width: 50%;
  margin-top: 12px;
  display: flex;
  justify-content: flex-start;
`;
