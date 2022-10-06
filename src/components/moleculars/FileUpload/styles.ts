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
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  &:hover {
    background: rgba(218, 218, 218, 0.7);
  }

  img {
    display: none;
  }

  &:hover {
    img {
      display: inline;
    }
  }
`;

export const InputField = styled.input`
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
  cursor: pointer;
  opacity: 0;
`;
export const UploadIcon = styled(Image)``;

export const Text = styled.p`
  margin: 5px 0;
  font-size: 11px;
  line-height: 1.6;
  text-align: center;
  color: ${({ theme }) => theme.colors.darkGray};
  span {
    font-weight: bold;
    text-decoration: underline;
  }
`;

export const span = styled.span`
  font-size: 10px;
  color: ${({ theme }) => theme.colors.gray};
`;
