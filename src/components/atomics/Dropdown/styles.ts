import styled from "styled-components";

export const Input = styled.div`
  height: 46px;
  margin: ${({ theme }) => theme.spacing(8, 0, 12)};
  margin: ${({ theme }) => theme.spacing(8, 0)};
  padding: ${({ theme }) => theme.spacing(8, 16)};
  border: 1px solid ${({ theme }) => theme.colors.darkGray};
  border: 1px solid ${({ theme }) => theme.colors.gray40};
  border-radius: 4px;
  display: flex;
  background-color: ${({ theme }) => theme.colors.neutral10};
  color: ${({ theme }) => theme.colors.darkGray};
  color: ${({ theme }) => theme.colors.gray40};

  label {
    display: none;
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
  padding: ${({ theme }) => theme.spacing(8, 16)};

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray10};
    cursor: pointer;
  }
`;

export const OptionText = styled.p``;
