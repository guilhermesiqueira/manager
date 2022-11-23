import { Button, useToast } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import { logError } from "services/crashReport";
import useCauses from "hooks/apiHooks/useCauses";
import useStories from "hooks/apiHooks/useStories";
import NonProfit from "types/entities/NonProfit";
import Cause from "types/entities/Cause";
import theme from "styles/theme";
import FileUpload from "components/moleculars/FileUpload";
import InfoName from "components/moleculars/infoName";
import ModalImage from "components/moleculars/modals/ModalImage";
import WarningRedIcon from "assets/icons/warning-red-icon.svg";
import Loading from "components/moleculars/Loading";
import Dropdown from "components/atomics/Dropdown";
import useNonProfits from "hooks/apiHooks/useNonProfits";
import Story from "types/entities/Story";
import { CreateNonProfit } from "types/apiResponses/nonProfit";
import StoriesForm from "./StoriesForm";
import * as S from "./styles";
import StoriesCard from "./StoriesCard";

export type Props = {
  isEdit?: boolean;
};

function UpsertNonProfitPage({ isEdit }: Props) {
  const { t } = useTranslation("translation", {
    keyPrefix: "nonProfitsPage.upsertNonProfitPage",
  });
  const mode = isEdit ? "edit" : "create";
  const [modalOpen, setModalOpen] = useState(false);
  const [causes, setCauses] = useState<Cause[]>([]);
  const [currentCauseId, setCurrentCauseId] = useState<number>(1);
  const { getCauses } = useCauses();
  const [loading, setLoading] = useState(false);
  const { gray10, gray40, gray30, red30 } = theme.colors;
  const [statusCheckbox, setStatusCheckbox] = useState(true);
  const [file, setFile] = useState<string>("");
  const navigate = useNavigate();
  const { id } = useParams();
  const { createNonProfit, getNonProfit, updateNonProfit } = useNonProfits();
  const { getStories } = useStories();
  const [stories, setStories] = useState<Story[]>([]);
  const {
    register,
    getValues: NonProfitObject,
    setValue,
    reset,
    handleSubmit,
    formState,
  } = useForm<NonProfit>({ mode: "onChange", reValidateMode: "onChange" });
  const { reset: resetStories } = useForm<Story[]>({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const toast = useToast();

  const fetchNonProfit = useCallback(async () => {
    try {
      const nonProfit = await getNonProfit(id);
      reset(nonProfit);
    } catch (e) {
      logError(e);
    }
  }, []);

  const fetchNonProfitStories = useCallback(async () => {
    try {
      const allStories = await getStories(String(id));
      setStories(allStories);

      resetStories(allStories);
    } catch (e) {
      logError(e);
    }
  }, []);

  const handleSave = async () => {
    try {
      if (isEdit) {
        await updateNonProfit(NonProfitObject(), file);
      } else {
        setModalOpen(false);
        setLoading(true);
        await createNonProfit(NonProfitObject(), file)
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

  useEffect(() => {
    fetchNonProfitStories();
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
  };

  const currencyText = (value: any) => value;

  return (
    <>
      <S.Title>{t(`${mode}.title`)}</S.Title>
      <form onSubmit={handleSubmit(isEdit ? handleSave : handleOpenModal)}>
        <S.ContentSection>
          <S.LeftSection>
            <S.Subtitle>{t("activityStatus")}</S.Subtitle>
            <S.CheckboxContainer>
              <S.Checkbox
                name="status"
                type="checkbox"
                onChange={handleActivityCheckboxChange}
                checked={statusCheckbox}
              />
              <S.Span>{NonProfitObject().status}</S.Span>{" "}
            </S.CheckboxContainer>

            <S.Subtitle>{t("details")}</S.Subtitle>

            <S.DoubleItemSection>
              <S.ItemBox>
                <InfoName hasTranslation>{t("nonProfitName")}</InfoName>
                <S.TextInput
                  {...register("name", { required: t("required") })}
                />
                {formState?.errors.name && formState?.errors.name.type && (
                  <S.Error>{formState?.errors.name.message}</S.Error>
                )}
              </S.ItemBox>

              <S.ItemBox>
                <InfoName>{t("nonProfitCause")}</InfoName>
                <Dropdown
                  values={causes.map((cause) => cause?.id)}
                  onOptionChanged={onCauseIdChanged}
                  valueText={currencyText}
                  defaultValue={currentCauseId}
                  containerId="currencies-dropdown"
                  {...register("causeId", {
                    required: t("required"),
                  })}
                />
              </S.ItemBox>
            </S.DoubleItemSection>

            <S.DoubleItemSection>
              <S.ItemBox>
                <InfoName hasTranslation>
                  {t("nonProfitImpactDescription")}
                </InfoName>
                <S.TextInput
                  {...register("impactDescription", {
                    required: t("required"),
                  })}
                />
                {formState?.errors.name && formState?.errors.name.type && (
                  <S.Error>{formState?.errors.name.message}</S.Error>
                )}
              </S.ItemBox>
              <S.ItemBox>
                <InfoName>{t("nonProfitAddress")}</InfoName>
                <S.TextInput
                  {...register("walletAddress", { required: t("required") })}
                />
                {formState?.errors.name && formState?.errors.name.type && (
                  <S.Error>{formState?.errors.name.message}</S.Error>
                )}
              </S.ItemBox>
            </S.DoubleItemSection>
          </S.LeftSection>

          <S.RightSection>
            <S.Subtitle>{t("imagesSection")}</S.Subtitle>

            <S.DoubleItemSection>
              <S.ItemBox>
                <InfoName>{t("nonProfitLogo")}</InfoName>
                <FileUpload
                  onChange={handleLogoChange}
                  logo={NonProfitObject().logo}
                  value={file}
                />
                <S.ImageRecommendation>
                  {t("imageRecommendation", { size: "300x300" })}
                </S.ImageRecommendation>
              </S.ItemBox>

              <S.ItemBox>
                <InfoName>{t("nonProfitCauseCardImage")}</InfoName>
                <FileUpload
                  onChange={handleLogoChange}
                  logo={NonProfitObject().logo}
                  value={file}
                />
                <S.ImageRecommendation>
                  {t("imageRecommendation", { size: "600x560" })}
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
              disabled={!formState?.isValid}
            >
              {t(`${mode}.save`)}
            </Button>

            <Button
              color={gray40}
              backgroundColor={gray10}
              borderColor={gray40}
              border="2px"
              marginLeft="8px"
              onClick={handleCancel}
            >
              {t(`${mode}.cancel`)}
            </Button>
          </S.ButtonContainer>
          {!isEdit && (
            <ModalImage
              title={t("create.modal.title")}
              body={t("create.modal.body")}
              visible={modalOpen}
              image={WarningRedIcon}
              primaryButtonText={t("create.modal.confirmButton")}
              primaryButtonColor={red30}
              primaryButtonCallback={handleSave}
              secondaryButtonText={t("create.modal.cancelButton")}
              secondaryButtonBorderColor={gray30}
              secondaryButtonCallback={handleCloseModal}
            />
          )}
        </S.ContentSection>
      </form>
      {stories.map((story) => (
        <StoriesCard
          title={story.title}
          description={story.description}
          image={story?.image}
        />
      ))}
      <StoriesForm nonProfitId={id} isEdit={isEdit} />
      {loading && <Loading />}
    </>
  );
}

UpsertNonProfitPage.defaultProps = {
  isEdit: false,
};

export default UpsertNonProfitPage;
