import ReactPaginate from "react-paginate";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
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

export const Pagination = styled(ReactPaginate).attrs({
  activeClassName: "active", // default to "disabled"
})`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  list-style-type: none;
  li a {
    border-radius: 16px;
    padding: 8px 16px;
    margin-left: 4px;
    border: 1px solid ${({ theme }) => theme.colors.gray30};
    cursor: pointer;
  }
  li.previous a,
  li.next a,
  li.break a {
    border-color: transparent;
  }
  li.active a {
    background-color: ${({ theme }) => theme.colors.green30};
    border-color: transparent;
    color: ${({ theme }) => theme.colors.neutral10};
    min-width: 32px;
  }
  li.disabled a {
    color: ${({ theme }) => theme.colors.gray30};
  }
  li.disable,
  li.disabled a {
    cursor: default;
  }
`;
