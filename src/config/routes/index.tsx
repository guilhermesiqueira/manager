import DashboardPage from "presentation/pages/Dashboard";
import LoginPage from "presentation/pages/Login";
import TestPage from "presentation/pages/TestPage";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import PrivateRoute from "./privateRoute";

function RoutesComponent(): JSX.Element {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navigation />
            <LoginPage />
          </>
        }
      />

      <Route
        path="test"
        element={
          <>
            <Navigation />
            <TestPage />
          </>
        }
      />

      <Route
        path="dashboard"
        element={
          <PrivateRoute>
            <Navigation />
            <DashboardPage />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default RoutesComponent;
