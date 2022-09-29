import uploadIcon from "assets/icons/upload-icon.svg";
import LogoCard from "../LogoCard";
import * as S from "./styles";

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  logo: string;
  value: string;
};

export default function FileUpload({ onChange, logo, value }: Props) {
  return (
    <S.Container>
      <LogoCard logo={value || logo}>
        {logo || value ? (
          <S.Box>
            <S.Layer>
              <S.InputField
                type="file"
                onChange={onChange}
                data-testid="file-upload"
                accept="image/*"
              />
              <S.UploadIcon src={uploadIcon} alt="file" />
            </S.Layer>
          </S.Box>
        ) : (
          <S.Box>
            <S.InputField
              type="file"
              onChange={onChange}
              data-testid="file-upload"
              accept="image/*"
            />
            <S.UploadIcon src={uploadIcon} alt="file" />
            <S.Text>
              Drop the logo image here or <span>browse</span>
            </S.Text>
            <S.span>Supports: JPG, PNG</S.span>
          </S.Box>
        )}
      </LogoCard>
    </S.Container>
  );
}
