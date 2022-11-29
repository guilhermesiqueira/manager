import { useEffect, useState } from "react";
import { useFieldArray } from "react-hook-form";
import FileUpload from "components/moleculars/FileUpload";
import InfoName from "components/moleculars/infoName";
import { useTranslation } from "react-i18next";
import { CreateStory } from "types/apiResponses/story";
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
  const [file, setFile] = useState<string>("");
  const { t } = useTranslation("translation", {
    keyPrefix: "nonProfits.upsert.storiesForm",
  });
  const { fields, append, remove } = useFieldArray({
    name: "storiesAttributes",
    control: controlStory,
  });

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const image = e.target.files![0];

    setFile(URL.createObjectURL(image));

    if (StoryObject()) {
      setValueStory(`storiesAttributes.${index}.image`, image as File);
    }
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
                  value={file}
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
