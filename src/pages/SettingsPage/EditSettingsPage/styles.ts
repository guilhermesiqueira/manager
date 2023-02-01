import styled from "styled-components";

export const ContentSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakpoints.pad}) {
    flex-direction: row;
  }
`;

export const LeftSection = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  margin: ${({ theme }) => theme.spacing(80, 0, 32)};
  text-transform: uppercase;
`;

export const Subtitle = styled.h3`
  margin-bottom: ${({ theme }) => theme.spacing(12)};
`;

export const SubtitleDescription = styled.h4`
  margin-bottom: ${({ theme }) => theme.spacing(4)};
  font-weight: 400;
`;

export const TextInput = styled.input`
  min-width: 400px;
  max-width: 400px;
  margin: ${({ theme }) => theme.spacing(8, 0, 12)};
  padding: ${({ theme }) => theme.spacing(8, 16)};
  border: 1px solid ${({ theme }) => theme.colors.darkGray};
  border-radius: 10px;
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
  color: ${({ color, theme }) => color || theme.colors.red30};

  ::first-letter {
    text-transform: uppercase;
  }
`;

export const HelperText = styled.span`
  margin-top: -24px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray30};
`;

export const ButtonContainer = styled.div`
  margin: ${({ theme }) => theme.spacing(24, 0)};
  display: flex;
`;

export const RightSection = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;
