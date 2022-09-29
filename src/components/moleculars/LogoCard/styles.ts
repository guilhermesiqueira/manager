import { Image } from "@chakra-ui/react";
import styled from "styled-components";

export const DotBox = styled.div`
  border: 1px dashed ${({ theme }) => theme.colors.darkGray};
  border-radius: 8px;
  height: 150px;
  width: 150px;
  padding: 15px;
  display: inline-block;
  margin: 5px 0;
`;

export const CenterBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Logo = styled(Image)`
  height: 100px;
  height: 100px;
  object-fit: cover;
`;
