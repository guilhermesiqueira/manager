import styled from "styled-components";

export const Text = styled.h3`
  $(defaultTitleMedium)
  color: ${({ theme }) => theme.colors.gray30};
`;

export const Container = styled.div`
  height: 100%;
  margin: 4px 0;
  padding: 12px 16px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.neutral10};
  box-shadow: 0px 1px 8px ${({ theme }) => theme.colors.defaultShadow},
    0px 24px 48px ${({ theme }) => theme.colors.defaultShadow};
`;
