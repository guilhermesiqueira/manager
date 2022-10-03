import uploadIcon from "assets/icons/upload-icon.svg";
import { useTranslation } from "react-i18next";
import LogoCard from "../LogoCard";
import * as S from "./styles";

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  logo: string;
  value: string;
};

export default function FileUpload({ onChange, logo, value }: Props) {
  const { t } = useTranslation("translation", {
    keyPrefix: "upload",
  });
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
              {t("helpText")} <span>{t("helpText2")}</span>
            </S.Text>
            <S.span>{t("supports")}</S.span>
          </S.Box>
        )}
      </LogoCard>
    </S.Container>
  );
}
