import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { generateUrlSignature } from "lib/urlSignature";
import { DAPP_URL } from "utils/constants";
import * as S from "./styles";

function UrlBuilder() {
  const { t } = useTranslation("translation", {
    keyPrefix: "urlBuilder",
  });

  const [urlData, setUrlData] = useState({
    baseUrl: `${DAPP_URL}redirect/`,
    redirectUrl: "",
    utmMedium: "",
    utmSource: "",
    utmCampaign: "",
    eventName: "",
    eventFrom: "",
  });

  const [currentUrl, setCurrentUrl] = useState("");

  const generateUrl = () => {
    const {
      baseUrl,
      redirectUrl,
      utmMedium,
      utmSource,
      utmCampaign,
      eventName,
      eventFrom,
    } = urlData;

    const params = {
      utm_medium: utmMedium,
      utm_source: utmSource,
      utm_campaign: utmCampaign,
      event: eventName,
      from: eventFrom,
      signature: generateUrlSignature(encodeURIComponent(redirectUrl)),
      redirect_url: redirectUrl,
    };

    const nonEmptyParams = Object.fromEntries(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      Object.entries(params).filter(([_, v]) => v !== ""),
    );

    const queryParams = new URLSearchParams(nonEmptyParams).toString();

    setCurrentUrl(`${baseUrl}?${queryParams}`);
  };

  useEffect(() => {
    generateUrl();
  }, [urlData]);

  const setValue = (field: string, value: string) => {
    setUrlData({ ...urlData, [field]: value });
  };

  return (
    <>
      <S.Title>{t("title")}</S.Title>
      <form>
        <S.ContentSection>
          <S.LeftSection>
            <S.Subtitle>{t("attributes.details")}</S.Subtitle>

            <S.Label>{t("attributes.baseUrl")}</S.Label>
            <S.TextInput value={urlData.baseUrl} disabled />

            <S.Label>{t("attributes.redirectUrl")}</S.Label>
            <S.TextInput
              onChange={(e) => setValue("redirectUrl", e.target.value)}
              placeholder={t("attributes.redirectUrlPlaceholder")}
              required
            />

            <S.Label>{t("attributes.utmSource")}</S.Label>
            <S.TextInput
              onChange={(e) => setValue("utmSource", e.target.value)}
            />

            <S.Label>{t("attributes.utmMedium")}</S.Label>
            <S.TextInput
              onChange={(e) => setValue("utmMedium", e.target.value)}
            />

            <S.Label>{t("attributes.utmCampaign")}</S.Label>
            <S.TextInput
              onChange={(e) => setValue("utmCampaign", e.target.value)}
            />

            <S.Label>{t("attributes.eventName")}</S.Label>
            <S.TextInput
              onChange={(e) => setValue("eventName", e.target.value)}
              placeholder="ex: downloadCTA_click"
              required
            />

            <S.Label>{t("attributes.eventFrom")}</S.Label>
            <S.TextInput
              onChange={(e) => setValue("eventFrom", e.target.value)}
              placeholder="ex: instagramAd"
              required
            />
          </S.LeftSection>
          <S.RightSection>
            <S.Label>{t("attributes.generatedUrl")}</S.Label>
            <S.TextArea value={currentUrl} onChange={() => {}} rows={10} />
            <S.TestButton href={currentUrl} target="_blank" rel="noreferrer">
              {t("attributes.openInNewTab")}
            </S.TestButton>
          </S.RightSection>
        </S.ContentSection>
      </form>
    </>
  );
}

export default UrlBuilder;
