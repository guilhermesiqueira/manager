import InfoName from "components/moleculars/infoName";
import { useTranslation } from "react-i18next";
import * as S from "./styles";

export type Props = {
  register: any;
  getValues: any;
  formState: any;
  setError: any;
  clearErrors: any;
  mobilityAttributes: string[];
};

function IntegrationTaskForm({
  register,
  getValues,
  formState,
  setError,
  clearErrors,
  mobilityAttributes,
}: Props) {
  const { t } = useTranslation("translation", {
    keyPrefix: "integrations",
  });

  const validateForm = () => {
    if (
      (!!getValues("link") || !!getValues("linkAddress")) &&
      !getValues("description")
    )
      setError("description", {
        types: {
          required: t("upsert.required"),
        },
      });
    else {
      clearErrors("description");
    }
  };

  return (
    <>
      <S.Subtitle>{t("attributes.modalInfo")}</S.Subtitle>

      <InfoName hasTranslation={mobilityAttributes?.includes("description")}>
        {t("attributes.ctaDescription")}
      </InfoName>

      <S.TextInput
        {...register("description", {
          onChange: () => {
            validateForm();
          },
        })}
        placeholder={t("attributes.typeDescription")}
      />
      {formState.errors.description && formState.errors.description.types && (
        <S.Error>{formState.errors.description.types.required}</S.Error>
      )}
      <InfoName hasTranslation={mobilityAttributes?.includes("link")}>
        {t("attributes.ctaLink")}
      </InfoName>

      <S.TextInput
        {...register("link", {
          onChange: () => {
            validateForm();
          },
        })}
        placeholder={t("attributes.linkName")}
      />

      <S.TextInput
        {...register("linkAddress", {
          onChange: () => {
            validateForm();
          },
        })}
        placeholder={t("attributes.linkAddress")}
      />
    </>
  );
}

export default IntegrationTaskForm;
