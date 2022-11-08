import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

// create a component to table
export const Table = styled.table`
  min-width: 500px;
  margin: 25px 0;
  border-collapse: collapse;

  tr,
  thead tr,
  tbody {
    border-bottom: 1px solid #ddd;
  }

  td,
  th {
    padding: 10px 15px;
  }

  tbody tr th {
    text-align: left;
    color: ${({ theme }) => theme.colors.gray30};
  }

  thead tr {
    text-align: left;
    color: ${({ theme }) => theme.colors.gray40};
  }
`;

export const ActionsTableCell = styled.div`
  display: flex;

  img {
    margin-right: 0.5rem;
  }
`;

export const StatusTableCell = styled.span`
  text-transform: capitalize;
`;

export const RefundButton = styled.button``;

export const RefundIcon = styled.img``;
