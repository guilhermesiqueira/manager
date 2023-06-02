import { useEffect } from "react";
import { useAuthentication } from "contexts/authenticationContext";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import RibonIcon from "assets/icons/ribon-icon.svg";
import { GoogleLogin } from "@react-oauth/google";
import * as S from "./styles";

function LoginPage(): JSX.Element {
  const { allowed, accessToken, signInManagerWithGoogle } = useAuthentication();

  const navigate = useNavigate();
  const { state } = useLocation();
  const { t } = useTranslation("translation", {
    keyPrefix: "login",
  });

  useEffect(() => {
    if (accessToken) {
      navigate("dashboard");
    }
  }, [accessToken, navigate]);

  const onSuccess = async (response: any) => {
    signInManagerWithGoogle(response);
  };

  const onFailure = () => {
    console.log("Login failed: ");
  };

  const loginButton = () => (
    <GoogleLogin
      text={t("buttonText")}
      onSuccess={onSuccess}
      onError={onFailure}
      state_cookie_domain="single_host_origin"
    />
  );

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
