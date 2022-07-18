import { Navigate } from "react-router-dom";

const accessToken = localStorage.getItem("token");

function PrivateRoute({ children }: any) {
  return accessToken ? children : <Navigate to="/" />;
}

export default PrivateRoute;
