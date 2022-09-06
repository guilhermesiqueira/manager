import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  cursor: pointer;

  img {
    margin-right: 0.4rem;
    max-width: 17px;
  }

  span {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.gray};
    width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
