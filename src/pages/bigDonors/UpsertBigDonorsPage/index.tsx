import { Button } from "@chakra-ui/react";
import useBigDonors from "hooks/apiHooks/useBigDonors";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { logError } from "services/crashReport";
import BigDonor from "types/entities/BigDonor";
import theme from "styles/theme";
import * as S from "./styles";

export type Props = {
  isEdit?: boolean;
};

function UpsertBigDonorPage({ isEdit }: Props) {
  const { t } = useTranslation("translation", {
    keyPrefix: "bigDonations.bigDonors",
  });

  const mode = isEdit ? "edit" : "create";

  const { neutral } = theme.colors;
  const navigate = useNavigate();
  const { createBigDonor } = useBigDonors();
  const {
    register,
    getValues: bigDonor,
    reset,
    handleSubmit,
    formState,
  } = useForm<BigDonor>({ mode: "onChange", reValidateMode: "onChange" });

  const handleSave = async () => {
    if (bigDonor()) {
      const BigDonorObject = {
        ...bigDonor(),
      };

      try {
        await createBigDonor(BigDonorObject);
        navigate("/big-donors/index");
      } catch (e) {
        logError(e);
      }
    }
  };

  const handleCancel = () => {
    navigate("/big-donors/index");
  };

  useEffect(() => {
    const newBigDonor: BigDonor = {
      name: "New Big Donor",
      email: "",
    };
    reset(newBigDonor);
  }, []);

  return (
    <>
      <S.Title>{t(`upsert.${mode}.title`)}</S.Title>
      <form onSubmit={handleSubmit(handleSave)}>
        <S.ContentSection>
          <S.LeftSection>
            <S.Subtitle>{t("attributes.details")}</S.Subtitle>
            <S.SubtitleDescription>
              {t("attributes.name")}
            </S.SubtitleDescription>
            <S.TextInput
              {...register("name", { required: t("upsert.required") })}
            />
            {formState?.errors.name && formState?.errors.name.type && (
              <S.Error>{formState?.errors.name.message}</S.Error>
            )}
            <S.SubtitleDescription>
              {t("attributes.email")}
            </S.SubtitleDescription>
            <S.TextInput
              placeholder="doador@gmail.com"
              {...register("email", { required: t("upsert.required") })}
            />
          </S.LeftSection>
        </S.ContentSection>
        <S.ContentSection>
          <S.ButtonContainer>
            <Button
              type="submit"
              color={neutral[50]}
              backgroundColor={neutral[800]}
              _hover={{ bg: neutral[500] }}
              disabled={!formState?.isValid}
            >
              {t(`upsert.${mode}.save`)}
            </Button>

            <Button
              color={neutral[800]}
              backgroundColor={neutral[50]}
              outlineColor={neutral[800]}
              marginLeft="8px"
              onClick={handleCancel}
            >
              {t(`upsert.${mode}.cancel`)}
            </Button>
          </S.ButtonContainer>
        </S.ContentSection>
      </form>
    </>
  );
}

UpsertBigDonorPage.defaultProps = {
  isEdit: false,
};

export default UpsertBigDonorPage;
