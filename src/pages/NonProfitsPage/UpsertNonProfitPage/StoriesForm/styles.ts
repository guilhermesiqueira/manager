import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 564px;
  border: 2px solid ${({ theme }) => theme.colors.gray20};
  border-radius: 8px;
  padding: 12px 24px 24px 24px;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: row;
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
  display: flex;
  margin-top: 12px;
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
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
  display: flex;
  flex-direction: column;
  margin-right: 16px;
`;

export const ButtonContainer = styled.div`
  margin-top: 12px;
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;
