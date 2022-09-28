import { Input } from "@chakra-ui/react";
import uploadIcon from "assets/icons/upload-icon.svg";
import * as S from "./styles";

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  logo: any;
  value: string;
};

export default function FileUpload({ onChange, logo, value }: Props) {
  return (
    <S.Container>
      <S.FileUploadContainer>
        <S.Logo src={value || logo} alt="logo" />

        <S.FileIcon>
          <Input
            type="file"
            height="100%"
            width="100%"
            position="absolute"
            onChange={onChange}
            data-testid="file-upload"
            top="0"
            left="0"
            opacity="0"
            accept="image/*"
            value={value}
          />

          <S.UploadIcon src={uploadIcon} alt="file" />
        </S.FileIcon>
      </S.FileUploadContainer>
    </S.Container>
  );
}
