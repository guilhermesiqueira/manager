import { Button, useToast } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import { logError } from "services/crashReport";
import useCauses from "hooks/apiHooks/useCauses";
import Cause from "types/entities/Cause";
import theme from "styles/theme";
import FileUpload from "components/moleculars/FileUpload";
import InfoName from "components/moleculars/infoName";
import ModalImage from "components/moleculars/modals/ModalImage";
import WarningRedIcon from "assets/icons/warning-red-icon.svg";
import Loading from "components/moleculars/Loading";
import Dropdown from "components/atomics/Dropdown";
import useNonProfits from "hooks/apiHooks/useNonProfits";
import { CreateNonProfit } from "types/apiResponses/nonProfit";
import { CreateStory } from "types/apiResponses/story";
import StoriesForm from "./StoriesForm";
import * as S from "./styles";

export type Props = {
  isEdit?: boolean;
};

function UpsertNonProfitPage({ isEdit }: Props) {
  const { t } = useTranslation("translation", {
    keyPrefix: "nonProfits",
  });
  const mode = isEdit ? "edit" : "create";
  const [modalOpen, setModalOpen] = useState(false);
  const [causes, setCauses] = useState<Cause[]>([]);
  const [currentCauseId, setCurrentCauseId] = useState<number>(1);
  const { getCauses } = useCauses();
  const [loading, setLoading] = useState(false);
  const { gray10, gray40, gray30, red30 } = theme.colors;
  const [statusCheckbox, setStatusCheckbox] = useState(true);
  const [stories, setStories] = useState<CreateStory[]>([]);
  const [file, setFile] = useState<string>("");
  const navigate = useNavigate();
  const { id } = useParams();
  const { createNonProfit, getNonProfit, updateNonProfit } = useNonProfits();
  const {
    register,
    getValues: NonProfitObject,
    setValue,
    reset,
    handleSubmit,
    formState,
  } = useForm<CreateNonProfit>({
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const {
    register: registerStory,
    getValues: StoryObject,
    setValue: setValueStory,
    formState: formStateStory,
    control: controlStory,
  } = useForm<CreateStory[]>({ mode: "onChange", reValidateMode: "onChange" });

  const toast = useToast();

  const fetchNonProfit = useCallback(async () => {
    try {
      const nonProfit = await getNonProfit(id);
      reset(nonProfit);
      setStories(nonProfit.stories);
      setCurrentCauseId(nonProfit.cause?.id);
    } catch (e) {
      logError(e);
    }
  }, []);

  const handleSave = async () => {
    function storyObject() {
      const allStories: any = StoryObject();

      const newStories = allStories.storiesAttributes.map((story: any) =>
        story?.image?.includes("http")
          ? {
              id: story.id,
              title: story.title,
              description: story.description,
              position: story.position,
            }
          : story,
      );

      return newStories;
    }

    if (NonProfitObject()) {
      const nonProfitObject = {
        ...NonProfitObject(),
        storiesAttributes: storyObject(),
      };

      try {
        if (isEdit) {
          await updateNonProfit(nonProfitObject);
        } else {
          setModalOpen(false);
          setLoading(true);
          await createNonProfit(nonProfitObject)
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
        }

        navigate("/ngos");
      } catch (e) {
        logError(e);
      }
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
    if (isEdit) {
      fetchNonProfit();
    } else {
      const newNonProfit: CreateNonProfit = {
        name: "New NonProfit",
        walletAddress: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
        status: "active",
        impactDescription: "Impact Description",
        causeId: 1,
      };
      reset(newNonProfit);
    }
  }, []);

  const handleActivityCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { checked } = e.target;
    setValue("status", checked ? "active" : "inactive");
    setStatusCheckbox(!statusCheckbox);
  };

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const logo = e.target.files![0];

    setFile(URL.createObjectURL(logo));
    if (NonProfitObject()) {
      setValue("logo", logo as File);
    }
  };

  const fetchCauses = useCallback(async () => {
    try {
      const allCauses = await getCauses();
      setCauses(allCauses);
    } catch (e) {
      logError(e);
    }
  }, [setCauses]);

  useEffect(() => {
    fetchCauses();
  }, [fetchCauses]);

  const onCauseIdChanged = (causeId: number) => {
    setCurrentCauseId(causeId);
    setValue("causeId", causeId);
  };

  const causeText = (value: any) =>
    causes.find((cause) => cause.id === value)?.name ?? "";

  return (
    <>
      <S.Title>{t(`upsert.${mode}.title`)}</S.Title>
      <form onSubmit={handleSubmit(isEdit ? handleSave : handleOpenModal)}>
        <S.ContentSection>
          <S.LeftSection>
            <S.Subtitle>{t("upsert.activityStatus")}</S.Subtitle>
            <S.CheckboxContainer>
              <S.Checkbox
                name="status"
                type="checkbox"
                onChange={handleActivityCheckboxChange}
                checked={statusCheckbox}
              />
              <S.Span>{NonProfitObject().status}</S.Span>{" "}
            </S.CheckboxContainer>

            <S.Subtitle>{t("upsert.details")}</S.Subtitle>

            <S.DoubleItemSection>
              <S.ItemBox>
                <InfoName hasTranslation>{t("attributes.name")}</InfoName>
                <S.TextInput
                  {...register("name", {
                    required: t("upsert.required"),
                  })}
                />
                {formState?.errors.name && formState?.errors.name.type && (
                  <S.Error>{formState?.errors.name.message}</S.Error>
                )}
              </S.ItemBox>

              <S.ItemBox>
                <InfoName>{t("attributes.cause")}</InfoName>
                <Dropdown
                  values={causes.map((cause) => cause?.id)}
                  onOptionChanged={onCauseIdChanged}
                  valueText={causeText}
                  defaultValue={currentCauseId}
                  containerId="cause-dropdown"
                  name="causeId"
                />
              </S.ItemBox>
            </S.DoubleItemSection>

            <S.DoubleItemSection>
              <S.ItemBox>
                <InfoName hasTranslation>
                  {t("attributes.impactDescription")}
                </InfoName>
                <S.TextInput
                  {...register("impactDescription", {
                    required: t("upsert.required"),
                  })}
                />
                {formState?.errors.name && formState?.errors.name.type && (
                  <S.Error>{formState?.errors.name.message}</S.Error>
                )}
              </S.ItemBox>
              <S.ItemBox>
                <InfoName>{t("attributes.address")}</InfoName>
                <S.TextInput
                  {...register("walletAddress", {
                    required: t("upsert.required"),
                  })}
                />
                {formState?.errors.name && formState?.errors.name.type && (
                  <S.Error>{formState?.errors.name.message}</S.Error>
                )}
              </S.ItemBox>
            </S.DoubleItemSection>
            <StoriesForm
              registerStory={registerStory}
              StoryObject={StoryObject}
              setValueStory={setValueStory}
              stories={stories}
              handleSubmitStory={handleSubmit}
              formStateStory={formStateStory}
              controlStory={controlStory}
            />
          </S.LeftSection>

          <S.RightSection>
            <S.Subtitle>{t("attributes.imagesSection")}</S.Subtitle>

            <S.DoubleItemSection>
              <S.ItemBox>
                <InfoName>{t("attributes.logo")}</InfoName>
                <FileUpload
                  onChange={handleLogoChange}
                  logo={NonProfitObject().logo}
                  value={file}
                />
                <S.ImageRecommendation>
                  {t("attributes.imageRecommendation", { size: "300x300" })}
                </S.ImageRecommendation>
              </S.ItemBox>

              <S.ItemBox>
                <InfoName>{t("attributes.causeCardImage")}</InfoName>
                <FileUpload
                  onChange={handleLogoChange}
                  logo={NonProfitObject().logo}
                  value={file}
                />
                <S.ImageRecommendation>
                  {t("attributes.imageRecommendation", { size: "600x560" })}
                </S.ImageRecommendation>
              </S.ItemBox>
            </S.DoubleItemSection>
          </S.RightSection>
        </S.ContentSection>
        <S.ContentSection>
          <S.ButtonContainer>
            <Button
              type="submit"
              color={gray10}
              backgroundColor={gray40}
              _hover={{ bg: gray30 }}
            >
              {t(`upsert.${mode}.save`)}
            </Button>

            <Button
              color={gray40}
              backgroundColor={gray10}
              borderColor={gray40}
              border="2px"
              marginLeft="8px"
              onClick={handleCancel}
            >
              {t(`upsert.${mode}.cancel`)}
            </Button>
          </S.ButtonContainer>
          {!isEdit && (
            <ModalImage
              title={t("upsert.create.modal.title")}
              body={t("upsert.create.modal.body")}
              visible={modalOpen}
              image={WarningRedIcon}
              primaryButtonText={t("upsert.create.modal.confirmButton")}
              primaryButtonColor={red30}
              primaryButtonCallback={handleSave}
              secondaryButtonText={t("upsert.create.modal.cancelButton")}
              secondaryButtonBorderColor={gray30}
              secondaryButtonCallback={handleCloseModal}
            />
          )}
        </S.ContentSection>
      </form>
      {loading && <Loading />}
    </>
  );
}

export default UpsertNonProfitPage;
