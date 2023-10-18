import { Button } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import { logError } from "services/crashReport";
import theme from "styles/theme";
import FileUpload from "components/moleculars/FileUpload";
import useImpressionCards from "hooks/apiHooks/useImpressionCards";
import ImpressionCard from "types/entities/ImpressionCard";
import impressionCardImg from "assets/images/impression-card-example.png";
import * as S from "./styles";

export type Props = {
  isEdit?: boolean;
};

function UpsertImpressionCardPage({ isEdit }: Props) {
  const { t } = useTranslation("translation", {
    keyPrefix: "impressionCards",
  });

  const mode = isEdit ? "edit" : "create";

  const { neutral } = theme.colors;
  const navigate = useNavigate();
  const { id } = useParams();

  const { createImpressionCard, getImpressionCard, updateImpressionCard } =
    useImpressionCards();

  const { register, setValue, getValues, reset, handleSubmit, formState } =
    useForm<ImpressionCard>({ mode: "onChange", reValidateMode: "onChange" });

  const [file, setFile] = useState<string>("");

  const fetchImpressionCard = useCallback(async () => {
    try {
      const impressionCard = await getImpressionCard(id);
      reset(impressionCard);
    } catch (e) {
      logError(e);
    }
  }, []);

  const handleSave = async () => {
    if (getValues()) {
      const impressionCardObject = {
        ...getValues(),
      };

      try {
        if (isEdit) {
          await updateImpressionCard(impressionCardObject, file);
        } else {
          await createImpressionCard(impressionCardObject, file);
        }
        navigate("/impression-cards");
      } catch (e) {
        logError(e);
      }
    }
  };

  const handleCancel = () => {
    navigate("/impression-cards");
  };

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const image = e.target.files![0];

    setFile(URL.createObjectURL(image));
    if (getValues()) {
      setValue("image", image as File);
    }
  };

  useEffect(() => {
    if (isEdit) {
      fetchImpressionCard();
    } else {
      const newImpressionCard: ImpressionCard = {
        headline: "",
        title: "",
        description: "",
        ctaUrl: "",
        ctaText: "",
        image: null,
      };
      reset(newImpressionCard);
    }
  }, []);

  return (
    <>
      <S.Title>{t(`upsert.${mode}.title`)}</S.Title>
      <form onSubmit={handleSubmit(handleSave)}>
        <S.ContentSection>
          <S.LeftSection>
            <S.Subtitle>{t("details")}</S.Subtitle>
            <div>
              <S.SubtitleDescription>
                {t("attributes.headline")}
              </S.SubtitleDescription>
              <S.TextInput
                {...register("headline", { required: t("upsert.required") })}
              />
              {formState?.errors.headline &&
                formState?.errors.headline.type && (
                  <S.Error>{formState?.errors.headline.message}</S.Error>
                )}
            </div>
            <div>
              <S.SubtitleDescription>
                {t("attributes.title")}
              </S.SubtitleDescription>
              <S.TextInput
                {...register("title", { required: t("upsert.required") })}
              />
              {formState?.errors.title && formState?.errors.title.type && (
                <S.Error>{formState?.errors.title.message}</S.Error>
              )}
            </div>
            <div>
              <S.SubtitleDescription>
                {t("attributes.description")}
              </S.SubtitleDescription>
              <S.TextInput
                {...register("description", { required: t("upsert.required") })}
              />
              {formState?.errors.description &&
                formState?.errors.description.type && (
                  <S.Error>{formState?.errors.description.message}</S.Error>
                )}
            </div>

            <div>
              <S.Subtitle>{t("attributes.image")}</S.Subtitle>
              <FileUpload
                onChange={handleLogoChange}
                logo={getValues().image}
                value={file}
              />
            </div>

            <div>
              <S.SubtitleDescription>
                {t("attributes.videoUrl")}
              </S.SubtitleDescription>
              <S.TextInput
                placeholder="https://www.youtube.com/watch?v=XXXXXXXXXXX"
                {...register("videoUrl")}
              />
              {formState?.errors.videoUrl &&
                formState?.errors.videoUrl.type && (
                  <S.Error>{formState?.errors.videoUrl.message}</S.Error>
                )}
            </div>
            <div>
              <S.SubtitleDescription>
                {t("attributes.ctaText")}
              </S.SubtitleDescription>
              <S.TextInput
                {...register("ctaText", { required: t("upsert.required") })}
              />
              {formState?.errors.ctaText && formState?.errors.ctaText.type && (
                <S.Error>{formState?.errors.ctaText.message}</S.Error>
              )}
            </div>

            <div>
              <S.SubtitleDescription>
                {t("attributes.ctaUrl")}
              </S.SubtitleDescription>
              <S.TextInput
                {...register("ctaUrl", { required: t("upsert.required") })}
              />
              {formState?.errors.ctaUrl && formState?.errors.ctaUrl.type && (
                <S.Error>{formState?.errors.ctaUrl.message}</S.Error>
              )}
            </div>
          </S.LeftSection>
          <S.RightSection>
            <S.Subtitle>{t("instructions.title")}</S.Subtitle>
            <img src={impressionCardImg} alt="Impression card example" />
            <br />
            <S.Subtitle>{t("instructions.usage.title")}</S.Subtitle>
            <ol>
              <li>{t("instructions.usage.youtube")}</li>
              <li>{t("instructions.usage.onlyImage")}</li>
              <li>{t("instructions.usage.noImageAndVideo")}</li>
              <li>{t("instructions.usage.imageAsThumb")}</li>
            </ol>
            <br />
            <S.Subtitle>{t("implementation.title")}</S.Subtitle>
            <p>{t("implementation.description")}</p>
            <br />
            <pre>
              <S.CodeSnippet>
                {`<CampaignCard id="${id || "YOUR_IMPRESSION_CARD_ID"}" />`}
              </S.CodeSnippet>
            </pre>
          </S.RightSection>
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

UpsertImpressionCardPage.defaultProps = {
  isEdit: false,
};

export default UpsertImpressionCardPage;
