import { useEffect, useState } from "react";
import { useFieldArray } from "react-hook-form";
import FileUpload from "components/moleculars/FileUpload";
import InfoName from "components/moleculars/infoName";
import { useTranslation } from "react-i18next";
import { CreateStory } from "types/apiResponses/story";
// import useNonProfits from "hooks/apiHooks/useNonProfits";
import { useUploadFile } from "hooks/apiHooks/useUploadFile";
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
  const [files, setFiles] = useState<string[]>([]);
  const { t } = useTranslation("translation", {
    keyPrefix: "nonProfits.upsert.storiesForm",
  });
  const { fields, append, remove } = useFieldArray({
    name: "storiesAttributes",
    control: controlStory,
  });

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
    files[index] = URL.createObjectURL(image);
    setFiles(files);
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

  return (
    <S.Container>
      <S.FormContainer>
        <button
          type="button"
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
          Add Story
        </button>
        {fields.map((field, index) => (
          <div key={field.id}>
            <S.LeftSection>
              <S.ItemBox>
                <FileUpload
                  onChange={(e) => handleImageChange(e, index)}
                  logo={StoryObject(`storiesAttributes.${index}.image`)}
                  value={files[index]}
                />
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
              <button type="button" onClick={() => remove(index)}>
                Delete
              </button>
            </S.RightSection>
          </div>
        ))}
      </S.FormContainer>
    </S.Container>
  );
}

export default StoriesForm;
