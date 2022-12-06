import { useCallback, useEffect, useState } from "react";
import ArrowDownIcon from "assets/icons/arrow-down.svg";
import theme from "styles/theme";
import ModalBlank from "../ModalBlank";
import * as S from "./styles";

export type Props = {
  name: string;
  values: any[];
  defaultValue: any;
  label?: string;
  onOptionChanged: (value: any) => void;
  valueText?: (value: any) => string;
  containerId: string;
};

function Dropdown({
  name,
  values,
  onOptionChanged,
  defaultValue,
  valueText,
  label,
  containerId = "dropdown-container",
}: Props): JSX.Element {
  const valueToText = (value: any) => {
    if (valueText && value) return valueText(value);

    return value;
  };

  const [dropdownValue, setDropdownValue] = useState(values[0]);
  const [optionsVisible, setOptionsVisible] = useState(false);

  const { defaultShadow } = theme.colors;

  const handleInputClick = () => {
    setOptionsVisible(!optionsVisible);
  };

  const handleOptionClick = (value: string) => {
    setDropdownValue(value);
    setOptionsVisible(false);
    if (onOptionChanged) onOptionChanged(value);
  };

  const updateDropdownValue = useCallback(() => {
    if (defaultValue) setDropdownValue(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    updateDropdownValue();
  }, [updateDropdownValue]);

  return (
    <S.Container id={containerId}>
      <ModalBlank
        visible={optionsVisible}
        onClose={() => setOptionsVisible(false)}
        customStyles={{
          overlay: {
            backgroundColor: "transparent",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-end",
            position: "relative",
          },
          content: {
            paddingTop: 8,
            paddingBottom: 8,
            position: "absolute",
            boxShadow: defaultShadow,
            zIndex: 1,
            margin: 0,
            width: "100%",
            maxWidth: "472px",
          },
        }}
        parentSelector={() =>
          document.querySelector(`#${containerId}`) || document.body
        }
      >
        {values.map((value) => (
          <S.OptionContainer
            onClick={() => handleOptionClick(value)}
            key={value}
          >
            <S.OptionText>{valueToText(value)}</S.OptionText>
          </S.OptionContainer>
        ))}
      </ModalBlank>
      <S.Input onClick={handleInputClick}>
        {label && <label htmlFor={name}>{label}</label>}
        <input
          type="text"
          name={name}
          aria-label={name}
          value={valueToText(dropdownValue)}
          readOnly
        />

        <img src={ArrowDownIcon} alt="arrow-down" />
      </S.Input>
    </S.Container>
  );
}

export default Dropdown;
