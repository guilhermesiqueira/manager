import styled from "styled-components";

export const Title = styled.h2`
  text-transform: uppercase;
  margin: 4px 0;
  margin-bottom: 32px;
  margin-top: 84px;
`;

export const Subtitle = styled.h3`
  margin-bottom: 12px;
`;

export const TextInput = styled.input`
  display: block;
  margin: 4px 0;
  margin-bottom: 8px;
  margin-top: 8px;
  border: 1px solid ${({ theme }) => theme.colors.darkGray};
  border-radius: 10px;
  padding: 8px 16px;
  color: ${({ theme }) => theme.colors.darkGray};
  min-width: 400px;
  margin-bottom: 30px;
`;

export const NumberInput = styled.input`
  display: block;
  margin-inline: 6px;
  border: 1.5px solid ${({ theme }) => theme.colors.darkGray};
  padding: 8px 5px;
  color: ${({ theme }) => theme.colors.darkGray};
  width: 40px;
  text-align: center;
  border-radius: 10px;
`;

export const Checkbox = styled.input`
  transform: scale(1.5);
  display: inline-block;
  vertical-align: middle;
  margin: 5px 7px 30px 4px;
  accent-color: ${({ theme }) => theme.colors.green};
`;

export const Span = styled.span`
  color: ${({ color }) => color} || ${({ theme }) => theme.colors.darkGray};
  display: inline-block;
  vertical-align: middle;
  margin: 5px 7px 30px 4px;
  :first-letter {
    text-transform: uppercase;
  }
`;

export const TicketAvailabilityContainer = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
  color: ${({ color }) => color} || ${({ theme }) => theme.colors.darkGray};
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 24px;
`;
