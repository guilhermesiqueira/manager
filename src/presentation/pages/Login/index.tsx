import { useAuthentication } from "contexts/authenticationContext";
import ButtonSecondary from "presentation/components/atomics/Buttons/ButtonSecondary";
import { GoogleIcon } from "presentation/components/icons/googleIcon";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import RibonIcon from "../../components/icons/ribon-icon.svg";
import * as S from "./styles";

function LoginPage(): JSX.Element {
  const { signInWithGoogle, allowed, accessToken } = useAuthentication();
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    if (accessToken) {
      navigate("dashboard");
    }
  }, [accessToken, navigate]);

  return (
    <S.Container>
      <img src={RibonIcon} alt="Ribon" />
      <S.Title>Dapp Manager</S.Title>
      <ButtonSecondary
        text="Login com o Google"
        onClick={() => signInWithGoogle()}
        leftIcon={<GoogleIcon />}
      />

      {!allowed && !!state && (
        <>
          <S.TitleError>Login failed</S.TitleError>
          <S.SubTitleError>
            Make sure your e-mail domain is @ribon.io
          </S.SubTitleError>
        </>
      )}
    </S.Container>
  );
}
export default LoginPage;
