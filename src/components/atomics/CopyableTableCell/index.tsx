import copyIcon from "./assets/copy-icon.svg";
import * as S from "./styles";

export type Props = {
  text: string;
};

function CopyableTableCell({ text }: Props): JSX.Element {
  return (
    <S.Container>
      <img src={copyIcon} alt="copy to clipboard" />
      <span>{text}</span>
    </S.Container>
  );
}

export default CopyableTableCell;
