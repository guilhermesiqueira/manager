import { Suspense } from "react";
import DashboardPage from "pages/DashboardPage";
import LoginPage from "pages/LoginPage";
import IntegrationsPage from "pages/IntegrationsPage";
import { Routes, Route } from "react-router-dom";
import MainLayout from "layouts/MainLayout";
import Navigation from "./Navigation";
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
              <Navigation />
              <MainLayout>
                <DashboardPage />
              </MainLayout>
            </Suspense>
          </PrivateRoute>
        }
      />

      <Route
        path="/integrations"
        element={
          <PrivateRoute>
            <Suspense fallback={<div />}>
              <Navigation />
              <MainLayout>
                <IntegrationsPage />
              </MainLayout>
            </Suspense>
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default RoutesComponent;
