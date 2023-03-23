import { Path } from "history";
import * as S from "./styles";

export type Props = {
  visible: boolean;
  onMouseLeave: () => void;
  menuOptions: {
    path: Path;
    title: string;
    search?: string;
  }[];
};

function FloatingSideMenu({
  visible,
  onMouseLeave,
  menuOptions,
}: Props): JSX.Element {
  return (
    <S.Menu visible={visible} onMouseLeave={onMouseLeave}>
      {menuOptions.map((option, index) => (
        <S.MenuItem
          // eslint-disable-next-line react/no-array-index-key
          key={index.toString(10)}
          to={{ pathname: option.path.toString(), search: option.search }}
        >
          {option.title}
        </S.MenuItem>
      ))}
    </S.Menu>
  );
}

export default FloatingSideMenu;
