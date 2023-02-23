import { useState } from "react";
import Switch from "react-switch";
import theme from "styles/theme";
import * as S from "./styles";

const { neutral10, neutral } = theme.colors;
const { primary } = theme.colors.brand;

export type Props = {
  leftText: string;
  rightText: string;
  onSwitch?: (checked: boolean) => void;
  initialCheckState?: boolean;
};
function ButtonSwitch({
  leftText,
  rightText,
  onSwitch,
  initialCheckState = false,
}: Props): JSX.Element {
  const [checked, setChecked] = useState(initialCheckState);

  const handleChange = () => {
    setChecked(!checked);
    if (onSwitch) onSwitch(checked);
  };

  return (
    <S.Container>
      <S.BoxIcon>
        <S.Text color={checked ? neutral[200] : primary[200]}>
          {leftText}
        </S.Text>
      </S.BoxIcon>
      <S.ContainerSwitch>
        <Switch
          id="switch"
          onChange={handleChange}
          checked={checked}
          offColor={primary[200]}
          onColor={primary[200]}
          onHandleColor={neutral10}
          offHandleColor={neutral10}
          handleDiameter={15}
          checkedIcon={false}
          uncheckedIcon={false}
          width={30}
          height={19}
        />
      </S.ContainerSwitch>
      <S.BoxIcon>
        <S.Text color={checked ? primary[200] : neutral[200]}>
          {rightText}
        </S.Text>
      </S.BoxIcon>
    </S.Container>
  );
}

ButtonSwitch.defaultProps = {
  onSwitch: () => {},
  initialCheckState: false,
};

export default ButtonSwitch;
