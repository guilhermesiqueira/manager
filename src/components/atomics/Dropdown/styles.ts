import styled from "styled-components";

export const Input = styled.div`
  height: 46px;
  background-color: ${({ theme }) => theme.colors.neutral10};
  display: flex;
  min-width: 400px;
  max-width: 400px;
  margin: 8px 0;
  padding: 8px 16px;
  border: 1px solid ${({ theme }) => theme.colors.darkGray};
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.darkGray};

  :placeholder {
    color: ${({ theme }) => theme.colors.gray};
    opacity: 1;
  }

  input {
    width: 100%;
    border: none;
    border-radius: 4px;
    box-sizing: border-box;
    background: transparent;
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
