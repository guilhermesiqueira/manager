import styled from "styled-components";

export const Container = styled.div`
  padding: ${({ theme }) => theme.spacing(20, 112, 0, 0)};
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
