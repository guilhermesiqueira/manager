import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { logError } from "services/crashReport";
import ModalImage from "components/moleculars/modals/ModalImage";
import useStories from "hooks/apiHooks/useStories";
import FileUpload from "components/moleculars/FileUpload";
import { Button, useToast } from "@chakra-ui/react";
import WarningRedIcon from "assets/icons/warning-red-icon.svg";
import InfoName from "components/moleculars/infoName";
import Loading from "components/moleculars/Loading";
import { useTranslation } from "react-i18next";
import theme from "styles/theme";
import Story from "types/entities/Story";
import * as S from "./styles";

export type Props = {
  nonProfitId: string | undefined;
  isEdit?: boolean;
};

function StoriesForm({ nonProfitId, isEdit }: Props) {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { createStory } = useStories();
  const toast = useToast();
  const [file, setFile] = useState<string>("");
  const { gray10, gray40, gray30, red30 } = theme.colors;
  const { t } = useTranslation("translation", {
    keyPrefix: "nonProfitsPage.upsertNonProfitPage.storiesForm",
  });
  const {
    register,
    getValues: StoryObject,
    setValue,
    reset,
    handleSubmit,
    setError,
    clearErrors,
    formState,
  } = useForm<Story>({ mode: "onChange", reValidateMode: "onChange" });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const image = e.target.files![0];

    setFile(URL.createObjectURL(image));

    if (StoryObject()) {
      setValue("image", image as File);
    }
  };

  const validateForm = () => {
    if (
      (!!StoryObject("title") || !!StoryObject("description")) &&
      !StoryObject("description")
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

  const handleSave = async () => {
    try {
      setModalOpen(false);
      setLoading(true);
      await createStory(StoryObject(), file)
        .then((response) => {
          reset(response?.data);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          toast({
            description: error.response.data.formatted_message,
            status: "error",
          });
          throw Error(error.response.data.formatted_message);
        });
      navigate("/ngos");
    } catch (e) {
      logError(e);
    }
  };

  const handleCancel = () => {
    navigate("/ngos");
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    setValue("nonProfitId", Number(nonProfitId));
    setValue("active", true);
    setValue("position", String(1));
  }, [nonProfitId]);

  return (
    <S.Container>
      <S.FormContainer
        onSubmit={handleSubmit(isEdit ? handleSave : handleOpenModal)}
      >
        <S.LeftSection>
          <S.ItemBox>
            <FileUpload onChange={handleImageChange} logo={file} value={file} />
          </S.ItemBox>
        </S.LeftSection>

        <S.RightSection>
          <InfoName hasTranslation>{t("title")}</InfoName>
          <S.TextInput
            {...register("title", {
              onChange: () => {
                validateForm();
              },
            })}
            placeholder={t("title")}
          />

          <InfoName hasTranslation>{t("description")}</InfoName>

          <S.TextInput
            {...register("description", {
              onChange: () => {
                validateForm();
              },
            })}
            placeholder={t("description")}
          />
          {formState.errors.description &&
            formState.errors.description.types && (
              <S.Error>{formState.errors.description.types.required}</S.Error>
            )}

          <S.ButtonContainer>
            <Button
              type="submit"
              color={gray10}
              backgroundColor={gray40}
              borderColor={gray40}
              _hover={{ bg: gray30 }}
              disabled={!formState?.isValid}
            >
              {t("save")}
            </Button>

            <Button
              color={gray40}
              backgroundColor={gray10}
              borderColor={gray40}
              border="2px"
              marginLeft="8px"
              onClick={handleCancel}
            >
              {t("cancel")}
            </Button>
          </S.ButtonContainer>
        </S.RightSection>
      </S.FormContainer>

      {!isEdit && (
        <ModalImage
          title={t("modal.title")}
          body={t("modal.body")}
          visible={modalOpen}
          image={WarningRedIcon}
          primaryButtonText={t("modal.confirmButton")}
          primaryButtonColor={red30}
          primaryButtonCallback={handleSave}
          secondaryButtonText={t("modal.cancelButton")}
          secondaryButtonBorderColor={gray30}
          secondaryButtonCallback={handleCloseModal}
        />
      )}

      {loading && <Loading />}
    </S.Container>
  );
}

StoriesForm.defaultProps = {
  isEdit: false,
};

export default StoriesForm;
