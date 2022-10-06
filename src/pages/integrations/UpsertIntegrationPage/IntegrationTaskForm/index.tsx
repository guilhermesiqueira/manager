import InfoName from "components/moleculars/infoName";
import { useTranslation } from "react-i18next";
import * as S from "./styles";

export type Props = {
  register: any;
  mobilityAttributes: string[];
};

function IntegrationTaskForm({ register, mobilityAttributes }: Props) {
  const { t } = useTranslation("translation", {
    keyPrefix: "integrations.upsertIntegrationPage",
  });

  return (
    <>
      <S.Subtitle>{t("modalInfo")}</S.Subtitle>

      <InfoName hasTranslation={mobilityAttributes?.includes("description")}>
        {t("ctaDescription")}
      </InfoName>

      <S.TextInput
        {...register("description")}
        placeholder="Type description"
      />

      <InfoName hasTranslation={mobilityAttributes?.includes("link")}>
        {t("ctaLink")}
      </InfoName>

      <S.TextInput {...register("link")} placeholder="Link name" />

      <S.TextInput {...register("linkAddress")} placeholder="Link address" />
    </>
  );
}

export default IntegrationTaskForm;
