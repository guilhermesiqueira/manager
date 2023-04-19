import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

// create a component to table
export const Table = styled.table`
  min-width: 700px;
  max-width: 90%;
  margin: ${({ theme }) => theme.spacing(24, 0)};
  border-collapse: collapse;

  tr,
  thead tr,
  tbody {
    border-bottom: 1px solid #ddd;
  }

  td,
  th {
    padding: ${({ theme }) => theme.spacing(12, 16)};
  }

  tbody tr th {
    text-align: left;
    color: ${({ theme }) => theme.colors.neutral[500]};
  }

  thead tr {
    text-align: left;
    color: ${({ theme }) => theme.colors.neutral[800]};
  }
`;

export const ActionsTableCell = styled.div`
  display: flex;

  img {
    margin-right: ${({ theme }) => theme.spacing(8)};
  }
`;

export const StatusTableCell = styled.span`
  text-transform: capitalize;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SearchBar = styled.input`
  width: 70%;
  height: 44px;
  padding-left: ${({ theme }) => theme.spacing(16)};
  border: 2px solid ${({ theme }) => theme.colors.neutral[500]};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.neutral[50]};
`;
