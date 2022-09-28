import { AspectRatio, Box, Image } from "@chakra-ui/react";
import styled from "styled-components";

export const FileIcon = styled(Box)`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  align-items: center;
  display: flex;
  justify-content: center;
  position: absolute;
  &:hover {
     {
      background: rgba(218, 218, 218, 0.7);
    }
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

export const FileUploadContainer = styled(Box)`
  border: 1px dashed ${({ theme }) => theme.colors.darkGray};
  border-radius: 8px;
  shadow: sm;
  role: group;
  transition: all 150ms ease-in-out;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 156px;
`;

export const Logo = styled(Image)`
  height: 100px;
  height: 100px;
`;

export const UploadIcon = styled(Image)``;

export const Container = styled(AspectRatio)`
  width: 154px;
  height: 148px;
  margin-bottom: 24px;
`;
