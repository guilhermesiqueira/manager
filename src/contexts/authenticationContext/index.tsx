import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { User } from "firebase/auth";
import userManagerApi from "services/api/userManagerApi";
import { useNavigate } from "react-router-dom";
import { REFRESH_TOKEN_KEY, TOKEN_KEY } from "utils/constants";
import { getCookiesItem, removeCookiesItem, setCookiesItem } from "lib/cookies";

export interface IAuthenticationContext {
  signInManagerWithGoogle: (response: any) => void;
  signInWithEmailAndPassword: (email: string, password: string) => void;
  accessToken: string | null;
  isAuthorized: (email: string) => boolean;
  user: User | undefined;
  setUser: (user: User) => void;
  allowed: boolean;
  logout: () => void;
}

export type Props = {
  children: JSX.Element[] | JSX.Element;
};

export const AuthenticationContext = createContext<IAuthenticationContext>(
  {} as IAuthenticationContext,
);

function AuthenticationProvider({ children }: Props) {
  const navigate = useNavigate();

  const [user, setUser] = useState<User>();
  const [accessToken, setAccessToken] = useState(getCookiesItem(TOKEN_KEY));

  function isAuthorized(email: string) {
    if (!email) return false;
    return email.includes("@ribon.io");
  }

  const allowed = useMemo(() => isAuthorized(user?.email ?? ""), [user]);

  async function signInManagerWithGoogle(response: any) {
    try {
      const userManagerResponse = await userManagerApi.postUserManager(
        { idToken: response.credential },
        {
          headers: {
            Authorization: `Bearer ${response.credential}`,
            "Content-Type": "application/json",
            access_token: `${response.credential}`,
          },
        },
      );
      const token = userManagerResponse.headers["access-token"];
      const refreshToken = userManagerResponse.headers["refresh-token"];
      setCookiesItem(TOKEN_KEY, token);
      setCookiesItem(REFRESH_TOKEN_KEY, refreshToken);
      setAccessToken(token);
      navigate("dashboard");
    } catch (error) {
      navigate("/", { state: { error } });
    }
  }

  const signInWithEmailAndPassword = async (
    email: string,
    password: string,
  ) => {
    try {
      const userManagerResponse = await userManagerApi.postPasswordAuthManager(
        email,
        password,
      );
      const token = userManagerResponse.headers["access-token"];
      const refreshToken = userManagerResponse.headers["refresh-token"];
      setCookiesItem(TOKEN_KEY, token);
      setCookiesItem(REFRESH_TOKEN_KEY, refreshToken);
      setAccessToken(token);
      navigate("dashboard");
    } catch (error) {
      navigate("/", { state: { error } });
    }
  };

  function logout() {
    removeCookiesItem(TOKEN_KEY);
    removeCookiesItem(REFRESH_TOKEN_KEY);
    setUser(undefined);
    navigate("/");
  }

  useEffect(() => {
    if (!accessToken) {
      logout();
    }
  }, [accessToken]);

  const authenticationObject: IAuthenticationContext = useMemo(
    () => ({
      user,
      setUser,
      allowed,
      isAuthorized,
      logout,
      accessToken,
      signInManagerWithGoogle,
      signInWithEmailAndPassword,
    }),
    [user, allowed, accessToken],
  );

  return (
    <AuthenticationContext.Provider value={authenticationObject}>
      {children}
    </AuthenticationContext.Provider>
  );
}

export default AuthenticationProvider;

export const useAuthentication = () => {
  const context = useContext(AuthenticationContext);

  if (!context) {
    throw new Error(
      "useAuthentication must be used within AuthenticationProvider",
    );
  }

  return context;
};
