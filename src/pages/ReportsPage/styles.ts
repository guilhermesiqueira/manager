import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing(16)};
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakpoints.pad}) {
    flex-direction: row;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  margin: ${({ theme }) => theme.spacing(80, 0, 32)};
  text-transform: uppercase;
`;

export const InfoValue = styled.p`
  color: ${({ theme }) => theme.colors.neutral[500]};
`;

export const Subtitle = styled.h4`
  margin-top: ${({ theme }) => theme.spacing(32)};
`;

export const SubtitleInfo = styled.h2`
  margin-bottom: ${({ theme }) => theme.spacing(16)};
  color: ${({ theme }) => theme.colors.brand.primary[300]};
`;

export const CardProject = styled.div`
  width: 200px;
  min-height: 40px;
  margin-top: ${({ theme }) => theme.spacing(8)};
  padding: ${({ theme }) => theme.spacing(8, 16)};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.neutral10};
  box-shadow: 0 4px 12px ${({ theme }) => theme.colors.defaultShadow};
`;

export const Table = styled.table`
  width: 90%;
  min-width: 500px;
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
