import styled from "styled-components";

export const Title = styled.h2`
  margin: 84px 0 32px;
  text-transform: uppercase;
`;

export const Subtitle = styled.h3`
  margin-bottom: 12px;
`;

export const TextInput = styled.input`
  min-width: 400px;
  margin: 8px 0 30px;
  padding: 8px 16px;
  border: 1px solid ${({ theme }) => theme.colors.darkGray};
  border-radius: 10px;
  display: block;
  color: ${({ theme }) => theme.colors.darkGray};
`;

export const NumberInput = styled.input`
  margin-inline: 6px;
  width: 40px;
  padding: 8px 5px;
  border: 1.5px solid ${({ theme }) => theme.colors.darkGray};
  border-radius: 10px;
  display: block;
  text-align: center;
  color: ${({ theme }) => theme.colors.darkGray};
`;

export const Checkbox = styled.input`
  accent-color: ${({ theme }) => theme.colors.green};
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

export const TicketAvailabilityContainer = styled.div`
  margin-bottom: 20px;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  color: ${({ color, theme }) => color || theme.colors.darkGray};
`;

export const ButtonContainer = styled.div`
  margin: 24px 0;
  display: flex;
`;
