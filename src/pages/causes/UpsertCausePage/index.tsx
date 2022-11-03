import { Button } from "@chakra-ui/react";
import useApiCauses from "hooks/apiHooks/useApiCauses";
import { useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import { logError } from "services/crashReport";
import Cause from "types/entities/Cause";
import theme from "styles/theme";
import { useLanguage } from "hooks/useLanguage";
import * as S from "./styles";

export type Props = {
  isEdit?: boolean;
};

function UpsertCausePage({ isEdit }: Props) {
  const { t } = useTranslation("translation", {
    keyPrefix: "Causes.upsertCausePage",
  });

  const { currentLang } = useLanguage();

  const mode = isEdit ? "edit" : "create";

  const { gray10, gray40, gray30 } = theme.colors;
  const navigate = useNavigate();
  const { id } = useParams();
  const { createApiCause, getApiCause, updateApiCause } = useApiCauses();
  const {
    register,
    getValues: CauseObject,
    reset,
    handleSubmit,
    formState,
  } = useForm<Cause>({ mode: "onChange", reValidateMode: "onChange" });

  const fetchCause = useCallback(async () => {
    try {
      const apiCause = await getApiCause(id, currentLang);
      reset(apiCause);
    } catch (e) {
      logError(e);
    }
  }, []);

  const handleSave = async () => {
    try {
      if (isEdit) {
        await updateApiCause(CauseObject, currentLang);
      } else {
        await createApiCause(CauseObject, currentLang);
      }
      navigate("/Causes");
    } catch (e) {
      logError(e);
    }
  };

  const handleCancel = () => {
    navigate("/Causes");
  };

  useEffect(() => {
    if (isEdit) {
      fetchCause();
    } else {
      const newCause: Cause = {
        name: "New Cause",
        address: "",
      };
      reset(newCause);
    }
  }, []);

  return (
    <>
      <S.Title>{t(`${mode}.title`)}</S.Title>
      <form onSubmit={handleSubmit(handleSave)}>
        <S.ContentSection>
          <S.LeftSection>
            <S.Subtitle>{t("details")}</S.Subtitle>
            <S.SubtitleDescription>{t("CauseName")}</S.SubtitleDescription>
            <S.TextInput {...register("name", { required: t("required") })} />
            {formState?.errors.name && formState?.errors.name.type && (
              <S.Error>{formState?.errors.name.message}</S.Error>
            )}
            <S.Subtitle>{t("address")}</S.Subtitle>
            <S.TextInput
              placeholder="https://webhook.com"
              {...register("address")}
            />
          </S.LeftSection>
        </S.ContentSection>
        <S.ContentSection>
          <S.ButtonContainer>
            <Button
              type="submit"
              color={gray10}
              backgroundColor={gray40}
              _hover={{ bg: gray30 }}
              disabled={!formState?.isValid}
            >
              {t(`${mode}.save`)}
            </Button>

            <Button
              color={gray40}
              backgroundColor={gray10}
              outlineColor={gray40}
              marginLeft="8px"
              onClick={handleCancel}
            >
              {t(`${mode}.cancel`)}
            </Button>
          </S.ButtonContainer>
        </S.ContentSection>
      </form>
    </>
  );
}

UpsertCausePage.defaultProps = {
  isEdit: false,
};

export default UpsertCausePage;
