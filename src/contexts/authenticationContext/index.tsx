import { createContext, useContext, useEffect, useMemo, useState } from "react";

import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import firebaseApp from "services/firebase";
import { useNavigate } from "react-router-dom";
import useUsers from "hooks/useUsers";
import User from "types/entities/user";

export interface IAuthenticationContext {
  signInWithGoogle: () => void;
  isAuthorized: (email: string) => boolean;
  user: User | undefined;
  allowed: boolean;
}

export type Props = {
  children: JSX.Element[] | JSX.Element;
};

export const AuthenticationContext = createContext<IAuthenticationContext>(
  {} as IAuthenticationContext,
);

function AuthenticationProvider({ children }: Props) {
  const firebaseAuth = getAuth(firebaseApp);
  const navigate = useNavigate();
  const { findOrCreateUser } = useUsers();
  const [user, setUser] = useState<User>();
  const [allowed, setAllowed] = useState(true);

  function isAuthorized(email: string) {
    if (!email) return false;
    return email.includes("@ribon.io");
  }

  function signInWithGoogle() {
    const provider = new GoogleAuthProvider();

    signInWithPopup(firebaseAuth, provider)
      .then(async (result) => {
        if (!isAuthorized(result.user.email ?? "")) {
          const token = await result.user.getIdToken();
          localStorage.setItem("token", token);
          setAllowed(false);
          navigate("/");
        } else {
          setAllowed(true);
          const currentUser = await findOrCreateUser(result.user.email ?? "");
          console.log(currentUser);
          setUser(currentUser);
          console.log(user);
          navigate("dashboard");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const accessToken = () => localStorage.getItem("token");

  useEffect(() => {
    if (!accessToken || !isAuthorized(user?.email ?? "")) {
      navigate("/");
      setAllowed(false);
    }
  }, [user]);

  const authenticationObject: IAuthenticationContext = useMemo(
    () => ({ signInWithGoogle, user, allowed, isAuthorized }),
    [user, allowed],
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
