import styled from "styled-components";
import { defaultParagraphMedium } from "styles/typography/default";

export const Container = styled.div`
  width: 100%;
  margin-bottom: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const BoxIcon = styled.div`
  display: flex;
  align-items: center;
`;

export const ContainerSwitch = styled.div`
  margin: 0 4px;
`;

export const Text = styled.p`
  ${defaultParagraphMedium}
  color: ${({ color }) => color};
`;
