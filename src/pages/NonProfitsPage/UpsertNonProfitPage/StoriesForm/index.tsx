import { useEffect, useState } from "react";
import { useFieldArray } from "react-hook-form";
import { Button } from "@chakra-ui/react";
import FileUpload from "components/moleculars/FileUpload";
import InfoName from "components/moleculars/infoName";
import { useTranslation } from "react-i18next";
import { CreateStory } from "types/apiResponses/story";
import useStories from "hooks/apiHooks/useStories";
import { useUploadFile } from "hooks/apiHooks/useUploadFile";
import theme from "styles/theme";
import * as S from "./styles";

export type Props = {
  registerStory: any;
  StoryObject: any;
  setValueStory: any;
  handleSubmitStory: any;
  formStateStory: any;
  controlStory: any;
  stories: CreateStory[];
};

function StoriesForm({
  registerStory,
  StoryObject,
  setValueStory,
  controlStory,
  stories,
}: Props) {
  const [files, setFiles] = useState<any>({});
  const { t } = useTranslation("translation", {
    keyPrefix: "nonProfits.upsert.storiesForm",
  });
  const { fields, append, remove } = useFieldArray({
    name: "storiesAttributes",
    control: controlStory,
  });
  const { deleteStory } = useStories();
  const { gray10, gray40, gray30 } = theme.colors;

  const handleUploadStoryImage = (image: File, index: number) => {
    try {
      const upload = useUploadFile(image);

      upload.create((error: Error, blob: any) => {
        if (error) {
          console.log(error);
        } else {
          setValueStory(`storiesAttributes.${index}.image`, blob.signed_id);
        }
      });
    } catch (e) {
      console.log(e);
    }
  };

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const image = e.target.files![0];
    setFiles({ ...files, [index]: URL.createObjectURL(image) });
    handleUploadStoryImage(image, index);
  };

  useEffect(() => {
    if (fields.length === 0) {
      // eslint-disable-next-line array-callback-return
      stories.map((story) => {
        append(story);
      });
    }
  }, [stories]);

  function handleDeleteStory(index: number) {
    remove(index);

    if (StoryObject(`storiesAttributes.${index}.id`)) {
      deleteStory(StoryObject(`storiesAttributes.${index}.id`));
    }
  }

  return (
    <S.Container>
      <S.FormContainer>
        <S.ButtonContainer>
          <Button
            type="button"
            color={gray40}
            backgroundColor={gray10}
            borderColor={gray40}
            border="2px"
            _hover={{ bg: gray30 }}
            onClick={() =>
              append({
                title: "Story",
                description: "Story description",
                image: null,
                active: true,
                position: fields.length + 1,
              })
            }
          >
            + Add Story
          </Button>
        </S.ButtonContainer>

        {fields.map((field, index) => (
          <div key={field.id}>
            <S.LeftSection>
              <S.ItemBox>
                {files && (
                  <FileUpload
                    onChange={(e) => handleImageChange(e, index)}
                    logo={StoryObject(`storiesAttributes.${index}.image`)}
                    value={files[index]}
                  />
                )}
              </S.ItemBox>
            </S.LeftSection>

            <S.RightSection>
              <InfoName hasTranslation>{t("title")}</InfoName>
              <S.TextInput
                {...registerStory(`storiesAttributes.${index}.title`)}
                placeholder={t("title")}
              />

              <InfoName hasTranslation>{t("description")}</InfoName>
              <S.TextInput
                {...registerStory(`storiesAttributes.${index}.description`)}
                placeholder={t("description")}
              />

              <InfoName hasTranslation>{t("position")}</InfoName>
              <S.TextInput
                {...registerStory(`storiesAttributes.${index}.position`)}
                placeholder={t("position")}
              />

              <S.ButtonContainer>
                <Button
                  type="button"
                  color={gray10}
                  backgroundColor={gray40}
                  _hover={{ bg: gray30 }}
                  onClick={() => handleDeleteStory(index)}
                >
                  Delete Story
                </Button>
              </S.ButtonContainer>
            </S.RightSection>
          </div>
        ))}
      </S.FormContainer>
    </S.Container>
  );
}

export default StoriesForm;
