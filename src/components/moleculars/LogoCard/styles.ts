import { Image } from "@chakra-ui/react";
import styled from "styled-components";

export const DotBox = styled.div`
  width: 150px;
  height: 150px;
  margin: ${({ theme }) => theme.spacing(4, 0)};
  padding: ${({ theme }) => theme.spacing(16)};
  border: 1px dashed ${({ theme }) => theme.colors.neutral[800]};
  border-radius: 8px;
  display: inline-block;
`;

export const CenterBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled(Image)`
  height: 100px;
  object-fit: cover;
`;

export const Box = styled.div``;
export const Text = styled.h6`
  font-weight: 500;
  line-height: 24px;
`;
export const Icon = styled(Image)`
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`;
