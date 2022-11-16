import theme from "styles/theme";
import { Spinner } from "@chakra-ui/react";
import * as S from "./styles";

export type Props = {
  strokeColor?: string;
  size?: string;
};

function Loading({
  strokeColor = theme.colors.green30,
  size = "xl",
}: Props): JSX.Element {
  return (
    <S.Container>
      <Spinner color={strokeColor} size={size} />
    </S.Container>
  );
}

export default Loading;

Loading.defaultProps = {
  strokeColor: theme.colors.green30,
  size: "xl",
};
