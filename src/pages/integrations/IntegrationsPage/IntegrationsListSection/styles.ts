import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

// create a component to table
export const Table = styled.table`
  border-collapse: collapse;
  margin: 25px 0;
  min-width: 500px;

  thead tr {
    color: ${({ theme }) => theme.colors.darkGray};
    text-align: left;
  }

  tbody tr th {
    color: ${({ theme }) => theme.colors.gray};
    text-align: left;
  }

  td,
  th {
    padding: 10px 15px;
  }

  thead tr,
  tbody,
  tr {
    border-bottom: 1px solid #dddddd;
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
