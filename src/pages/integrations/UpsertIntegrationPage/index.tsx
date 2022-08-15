import { Button } from "@chakra-ui/react";
import useApiIntegrations from "hooks/apiHooks/useApiIntegrations";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router";
import { logError } from "services/crashReport";
import Integration from "types/entities/Integration";
import theme from "styles/theme";
import * as S from "./styles";

export type Props = {
  isEdit?: boolean;
};

function UpsertIntegrationPage({ isEdit }: Props) {
  const { t } = useTranslation("translation", {
    keyPrefix: `integrations.upsertIntegrationPage.${
      isEdit ? "edit" : "create"
    }`,
  });

  const { bgGray, ribonBlack, darkGray } = theme.colors;
  const navigate = useNavigate();
  const { id } = useParams();

  const { createApiIntegration, getApiIntegration, updateApiIntegration } =
    useApiIntegrations();
  const [integration, setIntegration] = useState<Integration>();

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

  const handleActivityCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    if (integration) {
      setIntegration({
        ...integration,
        status: checked ? "active" : "inactive",
      });
    }
  };

  const handleTicketAvailabilityCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;

    if(integration) {
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
          await updateApiIntegration(integration.id, integration);
        } else {
          await createApiIntegration(integration);
        }
        navigate("/integrations");
      } catch (e) {
        logError(e);
      }
    }
  };

  const getColorByCheboxStatus = () => {
    if(integration) {
      return integration?.ticketAvailabilityInMinutes === null ? darkGray : ribonBlack;
    }
    return ribonBlack;
  }

  const handleCancel = () => {
    navigate("/integrations");
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
      <S.Title>{t("title")}</S.Title>
      <S.Subtitle>Activity Status</S.Subtitle>
      <S.Checkbox
        type="checkbox"
        checked={integration?.status === "active"}
        value={integration?.status}
        name="status"
        onChange={handleActivityCheckboxChange}
      />
      <S.Span>{integration?.status} integration</S.Span> <br />
      <S.Subtitle>Details</S.Subtitle>
      <S.TextInput
        name="name"
        value={integration?.name}
        onChange={handleChange}
      />
      
      <S.Subtitle>Ticket availability</S.Subtitle>
      <S.TicketAvailabilityContainer color={getColorByCheboxStatus()}>
        Every
        <S.NumberInput
          value={integration?.ticketAvailabilityInMinutes || ""}
          placeholder="000"
          type="number"
          name="ticketAvailabilityInMinutes"
          onChange={handleChange}
          disabled={integration?.ticketAvailabilityInMinutes === null}
        />
        minutes after received
      </S.TicketAvailabilityContainer>
      <br />
      <S.Checkbox
        type="checkbox"
        checked={integration?.ticketAvailabilityInMinutes === null}
        name="ticketAvailability"
        onChange={handleTicketAvailabilityCheckboxChange}
      />
      <S.Span>Everyday at midnight</S.Span> <br />
      <S.ButtonContainer>
        <Button
          color={bgGray}
          backgroundColor={ribonBlack}
          onClick={handleSave}
        >
          {t("save")}
        </Button>

        <Button
          color={ribonBlack}
          backgroundColor={bgGray}
          outlineColor={ribonBlack}
          marginLeft="8px"
          onClick={handleCancel}
        >
          {t("cancel")}
        </Button>
      </S.ButtonContainer>
    </>
  );
}

UpsertIntegrationPage.defaultProps = {
  isEdit: false,
};

export default UpsertIntegrationPage;
