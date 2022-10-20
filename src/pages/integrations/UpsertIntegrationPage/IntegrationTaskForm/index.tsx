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
    keyPrefix: "integrations.upsertIntegrationPage",
  });

  const validateForm = () => {
    if (
      (!!getValues("link") || !!getValues("linkAddress")) &&
      !getValues("description")
    )
      setError("description", {
        types: {
          required: t("required"),
        },
      });
    else {
      clearErrors("description");
    }
  };

  return (
    <>
      <S.Subtitle>{t("modalInfo")}</S.Subtitle>

      <InfoName hasTranslation={mobilityAttributes?.includes("description")}>
        {t("ctaDescription")}
      </InfoName>

      <S.TextInput
        {...register("description", {
          onChange: () => {
            validateForm();
          },
        })}
        placeholder={t("typeDescription")}
      />
      {formState.errors.description && formState.errors.description.types && (
        <S.Error>{formState.errors.description.types.required}</S.Error>
      )}
      <InfoName hasTranslation={mobilityAttributes?.includes("link")}>
        {t("ctaLink")}
      </InfoName>

      <S.TextInput
        {...register("link", {
          onChange: () => {
            validateForm();
          },
        })}
        placeholder={t("linkName")}
      />

      <S.TextInput
        {...register("linkAddress", {
          onChange: () => {
            validateForm();
          },
        })}
        placeholder={t("linkAddress")}
      />
    </>
  );
}

export default IntegrationTaskForm;
