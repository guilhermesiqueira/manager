import styled from "styled-components";

export const Input = styled.div`
  min-width: 400px;
  max-width: 400px;
  height: 46px;
  margin: 8px 0;
  padding: 8px 16px;
  border: 1px solid ${({ theme }) => theme.colors.gray40};
  border-radius: 10px;
  display: flex;
  background-color: ${({ theme }) => theme.colors.neutral10};
  color: ${({ theme }) => theme.colors.gray40};

  :placeholder {
    color: ${({ theme }) => theme.colors.gray};
    opacity: 1;
  }

  input {
    width: 100%;
    border: none;
    border-radius: 4px;
    box-sizing: border-box;
    line-height: 20px;
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
