import { Navigate } from "react-router-dom";
import { TOKEN_KEY } from "utils/constants";

function PrivateRoute({ children }: any) {
  const accessToken = localStorage.getItem(TOKEN_KEY);

  return accessToken ? children : <Navigate to="/" />;
}

export default PrivateRoute;
