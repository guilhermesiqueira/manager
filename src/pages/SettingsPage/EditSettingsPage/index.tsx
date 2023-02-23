import { Button } from "@chakra-ui/react";
import { useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { logError } from "services/crashReport";

import theme from "styles/theme";
import InfoName from "components/moleculars/infoName";

import useRibonConfig from "hooks/apiHooks/useRibonConfig";
import { RibonConfig } from "types/entities/RibonConfig";
import * as S from "./styles";

function EditSettingsPage() {
  const { t } = useTranslation("translation", {
    keyPrefix: "settings",
  });

  const { neutral, gray40, gray30 } = theme.colors;
  const navigate = useNavigate();
  const { getConfig, updateConfig } = useRibonConfig();
  const {
    register,
    getValues: ConfigObject,
    reset,
    handleSubmit,
    formState,
  } = useForm<RibonConfig>({ mode: "onChange", reValidateMode: "onChange" });

  const fetchConfig = useCallback(async () => {
    try {
      const config = await getConfig();
      reset({
        ...config[0],
        defaultTicketValue: Number(config[0].defaultTicketValue).toFixed(0),
      });
    } catch (e) {
      logError(e);
    }
  }, []);

  const handleSave = async () => {
    try {
      await updateConfig(ConfigObject());

      navigate("/settings");
    } catch (e) {
      logError(e);
    }
  };

  const handleCancel = () => {
    navigate("/settings");
  };

  useEffect(() => {
    fetchConfig();
  }, []);

  return (
    <>
      <S.Title>{t("edit.title")}</S.Title>
      <form onSubmit={handleSubmit(handleSave)}>
        <S.ContentSection>
          <S.LeftSection>
            <S.Subtitle>{t("edit.details")}</S.Subtitle>
            <InfoName hasTranslation>
              {t("attributes.defaultTicketValue")}
            </InfoName>
            <S.TextInput
              {...register("defaultTicketValue", {
                required: t("upsert.required"),
              })}
            />
            <S.HelperText>{t("attributes.helperText")}</S.HelperText>
            {formState?.errors.defaultTicketValue &&
              formState?.errors.defaultTicketValue.type && (
                <S.Error>
                  {formState?.errors.defaultTicketValue.message}
                </S.Error>
              )}
          </S.LeftSection>
        </S.ContentSection>
        <S.ContentSection>
          <S.ButtonContainer>
            <Button
              type="submit"
              color={neutral[50]}
              backgroundColor={gray40}
              _hover={{ bg: gray30 }}
              disabled={!formState?.isValid}
            >
              {t("edit.save")}
            </Button>

            <Button
              color={gray40}
              backgroundColor={neutral[50]}
              outlineColor={gray40}
              marginLeft="8px"
              onClick={handleCancel}
            >
              {t("edit.cancel")}
            </Button>
          </S.ButtonContainer>
        </S.ContentSection>
      </form>
    </>
  );
}

export default EditSettingsPage;
