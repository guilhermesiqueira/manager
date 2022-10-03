import InfoName from "components/moleculars/infoName";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import IntegrationTask from "types/entities/IntegrationTask";
import * as S from "./styles";

export type Props = {
  integrationId?: string;
};

function IntegrationTaskForm({ integrationId }: Props) {
  const { t } = useTranslation("translation", {
    keyPrefix: "integrations.upsertIntegrationPage",
  });

  const [integrationTask, setIntegrationTask] = useState<IntegrationTask>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (integrationTask) {
      setIntegrationTask({ ...integrationTask, [name]: value });
    }
  };

  return (
    <>
      <S.Subtitle>{t("modalInfo")}</S.Subtitle>

      <InfoName
        hasTranslation={integrationTask?.mobilityAttributes?.includes(
          "description",
        )}
      >
        {t("ctaDescription")}
      </InfoName>

      <S.TextInput
        name="description"
        value={integrationTask?.description}
        onChange={handleChange}
        placeholder="Type description"
      />

      <InfoName
        hasTranslation={integrationTask?.mobilityAttributes?.includes("link")}
      >
        {t("ctaLink")}
      </InfoName>

      <S.TextInput
        name="link"
        value={integrationTask?.link}
        onChange={handleChange}
        placeholder="Link name"
      />

      <S.TextInput
        name="linkAddress"
        value={integrationTask?.linkAddress}
        onChange={handleChange}
        placeholder="Link address"
      />
    </>
  );
}

IntegrationTaskForm.defaultProps = {
  integrationId: "1",
};

export default IntegrationTaskForm;
