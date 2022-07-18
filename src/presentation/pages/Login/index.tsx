import { useAuthentication } from "contexts/authenticationContext";
import ButtonSecondary from "presentation/components/atomics/Buttons/ButtonSecondary";
import { GoogleIcon } from "presentation/components/icons/googleIcon";
import RibonIcon from "../../components/icons/ribon-icon.svg";
import * as S from "./styles";

function LoginPage(): JSX.Element {
  const { signInWithGoogle, allowed } = useAuthentication();
  return (
    <S.Container>
      <img src={RibonIcon} alt="Ribon" />
      <S.Title>Dapp Manager</S.Title>
      <ButtonSecondary
        text="Login com o Google"
        onClick={() => signInWithGoogle()}
        leftIcon={<GoogleIcon />}
      />

      {!allowed && (
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
