import React, { Suspense } from "react";
import TreasurePage from "pages/dashboard/TreasurePage";
import LoginPage from "presentation/pages/Login";
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
        path="/dashboard"
        element={
          <PrivateRoute>
            <Suspense fallback={<div />}>
              <Navigation />
              <TreasurePage />
            </Suspense>
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default RoutesComponent;
