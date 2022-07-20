import React, { Suspense } from "react";
import TreasurePage from "pages/dashboard/TreasurePage";
import MainLayout from "layouts/MainLayout";
import LoginPage from "presentation/pages/Login";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./privateRoute";

function RoutesComponent(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />

      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Suspense fallback={<div />}>
              <MainLayout>
                <TreasurePage />
              </MainLayout>
            </Suspense>
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default RoutesComponent;
