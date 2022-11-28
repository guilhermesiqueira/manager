import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useFieldArray } from "react-hook-form";

import FileUpload from "components/moleculars/FileUpload";
import { Button } from "@chakra-ui/react";

import InfoName from "components/moleculars/infoName";
import { useTranslation } from "react-i18next";
import theme from "styles/theme";
import Story from "types/entities/Story";
import * as S from "./styles";

export type Props = {
  registerStory: any;
  StoryObject: any;
  setValueStory: any;
  resetStory: any;
  handleSubmitStory: any;
  formStateStory: any;
  controlStory: any;
};

export type FormValues = {
  stories: Story[];
};

function StoriesForm({
  registerStory,
  StoryObject,
  setValueStory,
  resetStory,
  formStateStory,
  controlStory,
}: Props) {
  const navigate = useNavigate();

  const [file, setFile] = useState<string>("");
  const { gray10, gray40, gray30 } = theme.colors;
  const { t } = useTranslation("translation", {
    keyPrefix: "nonProfits.upsert.storiesForm",
  });
  const { fields, append } = useFieldArray({
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
    resetStory({
      stories: [
        {
          title: "Story",
          description: "Story description",
          image: "...",
          active: true,
          position: "1",
        },
      ],
    });
  }, []);

  const handleCancel = () => {
    navigate("/ngos");
  };

  return (
    <S.Container>
      <S.FormContainer>
        {fields.map((field, index) => (
          <div key={field.id}>
            <S.LeftSection>
              <S.ItemBox>
                <FileUpload
                  onChange={(e) => handleImageChange(e, index)}
                  logo={file}
                  value={file}
                />
              </S.ItemBox>
            </S.LeftSection>

            <S.RightSection>
              <InfoName hasTranslation>{t("title")}</InfoName>
              <S.TextInput
                {...registerStory(`stories.${index}.title`)}
                placeholder={t("title")}
              />

              <div
                {...registerStory(`stories.${index}.active`)}
                placeholder={t("title")}
              />

              <InfoName hasTranslation>{t("description")}</InfoName>

              <S.TextInput
                {...registerStory(`stories.${index}.description`)}
                placeholder={t("description")}
              />

              <S.ButtonContainer>
                <Button
                  type="submit"
                  color={gray10}
                  backgroundColor={gray40}
                  borderColor={gray40}
                  _hover={{ bg: gray30 }}
                  disabled={!formStateStory?.isValid}
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
          </div>
        ))}

        <button
          type="button"
          onClick={() =>
            append({
              title: "Story",
              description: "Story description",
              image: "...",
              active: true,
              position: "1",
            })
          }
        >
          Add Story
        </button>
      </S.FormContainer>
    </S.Container>
  );
}

export default StoriesForm;
