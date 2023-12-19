import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: scroll;
`;

// create a component to table
export const Table = styled.table`
  min-width: 500px;
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

export const CheckboxContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing(24)};
  margin-left: ${({ theme }) => theme.spacing(12)};

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Checkbox = styled.input`
  accent-color: ${({ theme }) => theme.colors.brand.primary[300]};
  margin: ${({ theme }) => theme.spacing(4, 8, 32, 4)};
  display: inline-block;
  vertical-align: middle;
  transform: scale(1.5);
`;

export const Span = styled.span`
  margin: ${({ theme }) => theme.spacing(4, 20, 32, 4)};
  display: inline-block;
  vertical-align: middle;
  color: ${({ color, theme }) => color || theme.colors.darkGray};

  ::first-letter {
    text-transform: uppercase;
  }
`;
