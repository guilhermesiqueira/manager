import { Button } from "@chakra-ui/react";
import useApiIntegrations from "hooks/apiHooks/useApiIntegrations";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router";
import { logError } from "services/crashReport";
import Integration from "types/entities/Integration";
import theme from "styles/theme";
import FileUpload from "components/moleculars/FileUpload";
import * as S from "./styles";
import NgoLogo from "./assets/ngo-logo.svg";

export type Props = {
  isEdit?: boolean;
};

function UpsertIntegrationPage({ isEdit }: Props) {
  const { t } = useTranslation("translation", {
    keyPrefix: "integrations.upsertIntegrationPage",
  });

  const mode = isEdit ? "edit" : "create";

  const { lightGray, darkGray, gray } = theme.colors;
  const navigate = useNavigate();
  const { id } = useParams();

  const { createApiIntegration, getApiIntegration, updateApiIntegration } =
    useApiIntegrations();
  const [integration, setIntegration] = useState<Integration>();
  const [file, setFile] = useState<string>("");

  const fetchIntegration = useCallback(async () => {
    try {
      const apiIntegration = await getApiIntegration(id);
      setIntegration(apiIntegration);
    } catch (e) {
      logError(e);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (integration) {
      setIntegration({ ...integration, [name]: value });
    }
  };

  const handleActivityCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { checked } = e.target;
    if (integration) {
      setIntegration({
        ...integration,
        status: checked ? "active" : "inactive",
      });
    }
  };

  const handleTicketAvailabilityCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { checked } = e.target;

    if (integration) {
      setIntegration({
        ...integration,
        ticketAvailabilityInMinutes: checked ? null : 0,
      });
    }
  };

  const handleSave = async () => {
    if (integration) {
      try {
        if (isEdit) {
          await updateApiIntegration(integration, file);
        } else {
          await createApiIntegration(integration, file);
        }
        navigate("/integrations");
      } catch (e) {
        logError(e);
      }
    }
  };

  const getColorByCheboxStatus = () => {
    if (integration) {
      return integration?.ticketAvailabilityInMinutes === null
        ? gray
        : darkGray;
    }
    return darkGray;
  };

  const handleCancel = () => {
    navigate("/integrations");
  };

  const handleLogoChange = (e: any) => {
    const logo = e.target.files[0];

    setFile(URL.createObjectURL(logo));
    if (integration) {
      setIntegration({
        ...integration,
        logo: logo as File,
      });
    }
  };

  useEffect(() => {
    if (isEdit) {
      fetchIntegration();
    } else {
      const newIntegration: Integration = {
        name: "New Integration",
        status: "active",
        ticketAvailabilityInMinutes: null,
      };

      setIntegration(newIntegration);
    }
  }, []);

  return (
    <>
      <S.Title>{t(`${mode}.title`)}</S.Title>
      <S.Subtitle>{t("activityStatus")}</S.Subtitle>
      <S.Checkbox
        type="checkbox"
        checked={integration?.status === "active"}
        value={integration?.status}
        name="status"
        onChange={handleActivityCheckboxChange}
      />
      <S.Span>
        {integration?.status} {t("integration")}
      </S.Span>{" "}
      <br />
      <S.Subtitle>{t("details")}</S.Subtitle>
      <S.TextInput
        name="name"
        data-testid="name"
        value={integration?.name}
        onChange={handleChange}
      />
      <S.Subtitle>{t("integrationLogo")}</S.Subtitle>
      <FileUpload
        onChange={handleLogoChange}
        logo={integration?.logo ?? NgoLogo}
        value={file}
      />
      <S.Subtitle>{t("ticketAvailability")}</S.Subtitle>
      <S.TicketAvailabilityContainer color={getColorByCheboxStatus()}>
        {t("every")}
        <S.NumberInput
          value={integration?.ticketAvailabilityInMinutes || ""}
          placeholder="000"
          type="number"
          name="ticketAvailabilityInMinutes"
          onChange={handleChange}
          disabled={integration?.ticketAvailabilityInMinutes === null}
        />
        {t("minutesAfterReceived")}
      </S.TicketAvailabilityContainer>
      <br />
      <S.Checkbox
        type="checkbox"
        checked={integration?.ticketAvailabilityInMinutes === null}
        name="ticketAvailability"
        onChange={handleTicketAvailabilityCheckboxChange}
      />
      <S.Span>{t("everydayAtMidnight")}</S.Span> <br />
      <S.ButtonContainer>
        <Button
          color={lightGray}
          backgroundColor={darkGray}
          onClick={handleSave}
        >
          {t(`${mode}.save`)}
        </Button>

        <Button
          color={darkGray}
          backgroundColor={lightGray}
          outlineColor={darkGray}
          marginLeft="8px"
          onClick={handleCancel}
        >
          {t(`${mode}.cancel`)}
        </Button>
      </S.ButtonContainer>
    </>
  );
}

UpsertIntegrationPage.defaultProps = {
  isEdit: false,
};

export default UpsertIntegrationPage;
