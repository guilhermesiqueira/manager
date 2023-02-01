import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  div {
    display: flex;
  }

  img {
    max-width: 17px;
    margin-right: ${({ theme }) => theme.spacing(8)};
  }

  span {
    width: 200px;
    overflow: hidden;
    text-decoration: underline;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: ${({ theme }) => theme.colors.gray30};
  }
`;
