import styled, { css } from "styled-components";

export const Title = styled.h1`
  ${() => css`
    text-transform: uppercase;
    margin: 4px 0;
    font-weight: 800;
    font-size: 28px;
    margin-bottom: 32px;
    margin-top: 84px;
  `}
`;

export const Subtitle = styled.h3`
  ${() => css`
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 12px;
  `}
`;

export const TextInput = styled.input`
  ${({ theme }) => css`
    display: block;
    margin: 4px 0;
    margin-bottom: 8px;
    margin-top: 8px;
    border: 1px solid ${theme.colors.ribonBlack};
    border-radius: 10px;
    padding: 8px 16px;
    font-size: 14px;
    color: ${theme.colors.ribonBlack};
    min-width: 400px;
    margin-bottom: 30px;
  `}
`;

export const NumberInput = styled.input`
  ${({ theme }) => css`
    display: block;
    margin-inline: 6px;
    border: 1.5px solid ${theme.colors.ribonBlack};
    padding: 8px 5px;
    font-size: 14px;
    color: ${theme.colors.ribonBlack};
    width: 40px;
    text-align: center;
    border-radius: 10px;
  `}
`;


export const Checkbox = styled.input`
  ${({ theme }) => css`
    transform: scale(1.5);
    display: inline-block;
    vertical-align: middle;
    margin: 5px 7px 30px 4px;
    accent-color: ${theme.colors.ribonBlack};
  `}
`;

export const Span = styled.span`
  ${({ color, theme  }) => css`
    color: ${color || theme.colors.ribonBlack};
    font-size: 12px;
    display: inline-block;
    vertical-align: middle;
    margin: 5px 7px 30px 4px;
    text-transform:capitalize;
  `}
`;

export const TicketAvailabilityContainer = styled.div`
  ${({ color, theme }) => css`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
    color: ${color || theme.colors.ribonBlack};
  `}
`;

export const ButtonContainer = styled.div`
  ${() => css`
    display: flex;
    margin-top: 24px;
  `}
`;
