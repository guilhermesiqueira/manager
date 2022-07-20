import DashboardPage from "presentation/pages/Dashboard";
import LoginPage from "presentation/pages/Login";
import React from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./privateRoute";

function RoutesComponent(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />

      <Route
        path="dashboard"
        element={
          <PrivateRoute>
            <DashboardPage />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default RoutesComponent;
