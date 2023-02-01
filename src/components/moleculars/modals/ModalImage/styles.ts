import styled from "styled-components";
import ReactModal from "react-modal";

export const ModalWithImage = styled(ReactModal)`
  width: 100%;
  max-width: 464px;
  margin: ${({ theme }) => theme.spacing(16)};
  padding: ${({ theme }) => theme.spacing(16)};
  border-radius: 16px;
  overflow: hidden;
  background-color: #fff;

  button,
  a {
    margin-bottom: ${({ theme }) => theme.spacing(8)};

    &:last-child {
      margin: ${({ theme }) => theme.spacing(0)};
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 100%;
  height: 56px;
`;

export const Title = styled.h3`
  text-align: center;
  color: ${({ theme, color }) => color || theme.colors.gray40};
`;

export const Body = styled.p`
  margin: ${({ theme }) => theme.spacing(4, 0, 16)};
  text-align: center;
  color: ${({ theme }) => theme.colors.gray30};
`;

export const RowsModalRow = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(32)};
  display: flex;
`;
