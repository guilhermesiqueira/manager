import { AspectRatio, Image } from "@chakra-ui/react";
import styled from "styled-components";

export const Container = styled(AspectRatio)`
  width: 154px;
  height: 148px;
  margin-bottom: 24px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Layer = styled(Box)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  img {
    display: none;
  }

  &:hover {
    background: rgba(218, 218, 218, 70%);

    img {
      display: inline;
    }
  }
`;

export const InputField = styled.input`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  cursor: pointer;
`;
export const UploadIcon = styled(Image)``;

export const Text = styled.p`
  margin: 5px 0;
  font-size: 11px;
  line-height: 1.6;
  text-align: center;
  color: ${({ theme }) => theme.colors.darkGray};

  span {
    font-weight: 700;
    text-decoration: underline;
  }
`;

export const span = styled.span`
  font-size: 10px;
  color: ${({ theme }) => theme.colors.gray};
`;
