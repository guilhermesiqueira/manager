import styled from "styled-components";

export const ActionsTableCell = styled.div`
  display: flex;

  img {
    max-width: unset;
    margin-right: ${({ theme }) => theme.spacing(8)};
  }
`;

export const StatusTableCell = styled.span`
  text-transform: capitalize;
`;

export const walletColumn = styled.th`
  span {
    width: 100px;
  }
`;
