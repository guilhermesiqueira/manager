import React from "react";
import ReactModal from "react-modal";
import theme from "styles/theme";
import { Button } from "@chakra-ui/react";
import * as S from "./styles";
import { defaultCustomStyles } from "../defaultCustomStyles";

export type Props = {
  visible: boolean;
  image: string | null;
  title?: string | null;
  titleColor?: string;
  body?: string | null;
  primaryButtonText?: string | null;
  primaryButtonTextColor?: string;
  primaryButtonColor?: string;
  primaryButtonBorderColor?: string;
  primaryButtonCallback?: () => void;
  secondaryButtonText?: string | null;
  secondaryButtonTextColor?: string;
  secondaryButtonColor?: string;
  secondaryButtonBorderColor?: string;
  secondaryButtonCallback?: () => void;
  contentLabel?: string;
  onClose?: () => void;
  customStyles?: ReactModal.Styles;
};
function ModalImage({
  visible,
  image,
  title,
  titleColor,
  body,
  primaryButtonText,
  primaryButtonTextColor,
  primaryButtonColor,
  primaryButtonBorderColor,
  secondaryButtonText,
  secondaryButtonTextColor,
  secondaryButtonBorderColor,
  secondaryButtonColor,
  primaryButtonCallback,
  secondaryButtonCallback,
  onClose,
  contentLabel,
  customStyles,
}: Props): JSX.Element {
  return (
    <S.ModalWithImage
      isOpen={visible}
      onRequestClose={onClose}
      style={customStyles || defaultCustomStyles}
      contentLabel={contentLabel}
      ariaHideApp={false}
    >
      {image && <S.Image src={image} alt="modal-image" />}
      <S.Container>
        <S.Title color={titleColor}>{title}</S.Title>
        <S.Body>{body}</S.Body>
        {primaryButtonText && (
          <Button
            color={primaryButtonTextColor}
            backgroundColor={primaryButtonColor}
            borderColor={primaryButtonBorderColor}
            onClick={primaryButtonCallback}
          >
            {primaryButtonText}
          </Button>
        )}
        {secondaryButtonText && (
          <Button
            color={secondaryButtonTextColor}
            backgroundColor={secondaryButtonColor}
            onClick={secondaryButtonCallback}
            borderColor={secondaryButtonBorderColor}
            variant="outline"
          >
            {secondaryButtonText}
          </Button>
        )}
      </S.Container>
    </S.ModalWithImage>
  );
}

export default ModalImage;

ModalImage.defaultProps = {
  title: null,
  titleColor: null,
  body: null,
  primaryButtonText: null,
  primaryButtonTextColor: theme.colors.neutral10,
  primaryButtonColor: theme.colors.green30,
  primaryButtonBorderColor: null,
  secondaryButtonText: null,
  secondaryButtonTextColor: theme.colors.gray30,
  secondaryButtonBorderColor: theme.colors.gray30,
  secondaryButtonColor: theme.colors.neutral10,
  primaryButtonCallback: () => {},
  secondaryButtonCallback: () => {},
  onClose: () => {},
  contentLabel: null,
  customStyles: null,
};
