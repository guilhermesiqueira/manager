import { gapi } from "gapi-script";
import { useEffect } from "react";
import { useAuthentication } from "contexts/authenticationContext";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import RibonIcon from "assets/icons/ribon-icon.svg";
import { GoogleLogin } from "react-google-login";
import { Button } from "@chakra-ui/react";
import { GoogleIcon } from "assets/icons/googleIcon";
import * as S from "./styles";

function LoginPage(): JSX.Element {
  const { allowed, accessToken, signInManagerWithGoogle, signInWithFirebase } =
    useAuthentication();

  const navigate = useNavigate();
  const { state } = useLocation();
  const { t } = useTranslation("translation", {
    keyPrefix: "login",
  });

  useEffect(() => {
    const initClient = async () => {
      await gapi.client.init({
        clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  });

  useEffect(() => {
    if (accessToken) {
      navigate("dashboard");
    }
  }, [accessToken, navigate]);

  const onSuccess = async (response: any) => {
    signInManagerWithGoogle(response);
  };

  const loginButton = () => {
    if (process.env.REACT_APP_NODE_ENV === "production") {
      return (
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID!}
          buttonText={t("buttonText")}
          onSuccess={onSuccess}
          cookiePolicy="single_host_origin"
          isSignedIn
        />
      );
    } else {
      return (
        <Button leftIcon={<GoogleIcon />} onClick={signInWithFirebase}>
          {t("buttonText")}
        </Button>
      );
    }
  };

  return (
    <S.Container>
      <img src={RibonIcon} alt="Ribon" />
      <S.Title>{t("title")}</S.Title>

      {loginButton()}

      {!allowed && !!state && (
        <>
          <S.TitleError>{t("errorText")}</S.TitleError>
          <S.SubTitleError>{t("errorDescription")}</S.SubTitleError>
        </>
      )}
    </S.Container>
  );
}
export default LoginPage;
