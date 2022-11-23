import styled from "styled-components";
import { defaultComponentTextMedium } from "styles/typography/default";

export const Input = styled.div`
  min-width: 274px;
  max-width: 274px;
  margin: 8px 0 30px;
  padding: 8px 16px;
  border: 1px solid ${({ theme }) => theme.colors.darkGray};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.darkGray};
  height: 46px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.gray40};
  background: ${({ theme }) => theme.colors.neutral10};

  label {
    display: none;
  }

  input {
    ${defaultComponentTextMedium};
    width: 100%;
    border: none;
    border-radius: 4px;
    box-sizing: border-box;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.gray40};

    &:hover {
      cursor: pointer;
    }
  }

  img {
    width: 24px;
  }

  &:hover {
    cursor: pointer;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.pad}) {
    label {
      top: -15px;
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  position: relative;
  display: inline-block;
`;

export const OptionContainer = styled.div`
  padding: 8px 16px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray10};
    cursor: pointer;
  }
`;

export const OptionText = styled.p``;
