import { useTranslation } from "react-i18next";
import * as S from "./styles";

export type Props = {
  register: any;
};

function IntegrationTaskForm({ register }: Props) {
  const { t } = useTranslation("translation", {
    keyPrefix: "integrations.upsertIntegrationPage",
  });

  return (
    <>
      <S.Subtitle>{t("modalInfo")}</S.Subtitle>

      <S.SubtitleDescription>{t("ctaDescription")}</S.SubtitleDescription>

      <S.TextInput
        {...register("description")}
        placeholder="Type description"
      />

      <S.SubtitleDescription>{t("ctaLink")}</S.SubtitleDescription>

      <S.TextInput {...register("link")} placeholder="Link name" />

      <S.TextInput {...register("linkAddress")} placeholder="Link address" />
    </>
  );
}

export default IntegrationTaskForm;
