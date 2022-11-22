import styled from "styled-components";
import ReactModal from "react-modal";

export const ModalWithImage = styled(ReactModal)`
  width: 100%;
  max-width: 464px;
  margin: 16px;
  padding: 16px;
  border-radius: 16px;
  overflow: hidden;
  background-color: #fff;

  button,
  a {
    margin-bottom: 8px;

    &:last-child {
      margin: 0;
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
  margin: 4px 0 16px;
  text-align: center;
  color: ${({ theme }) => theme.colors.gray30};
`;

export const RowsModalRow = styled.div`
  margin-bottom: 28px;
  display: flex;
`;
