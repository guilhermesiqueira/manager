import { Suspense } from "react";
import DashboardPage from "pages/DashboardPage";
import LoginPage from "pages/LoginPage";
import IntegrationsPage from "pages/integrations/IntegrationsPage";
import IntegrationDetailsPage from "pages/integrations/IntegrationDetailsPage";
import UpsertIntegrationPage from "pages/integrations/UpsertIntegrationPage";
import PurchasesPage from "pages/PurchasesPage";
import { Routes, Route } from "react-router-dom";
import MainLayout from "layouts/MainLayout";
import CausesPage from "pages/causes/CausesPage";
import CausesDetailsPage from "pages/causes/CausesDetailsPage";
import UpsertCausePage from "pages/causes/UpsertCausePage";
import NonProfitsPage from "pages/NonProfitsPage";
import UpsertNonProfitPage from "pages/NonProfitsPage/UpsertNonProfitPage";
import OfferDetailsPage from "pages/offers/offerDetailsPage";
import OffersPage from "pages/offers/OffersPage";
import UpsertOfferPage from "pages/offers/UpsertOfferPage";
import SettingsPage from "pages/SettingsPage";
import EditSettingsPage from "pages/SettingsPage/EditSettingsPage";
import NonProfitsDetailsPage from "pages/NonProfitsPage/NonProfitsDetailsPage";
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

      <Route
        path="/integrations/new"
        element={
          <PrivateRoute>
            <Suspense fallback={<div />}>
              <Navigation />
              <MainLayout>
                <UpsertIntegrationPage />
              </MainLayout>
            </Suspense>
          </PrivateRoute>
        }
      />

      <Route
        path="/integrations/:id"
        element={
          <PrivateRoute>
            <Suspense fallback={<div />}>
              <Navigation />
              <MainLayout>
                <IntegrationDetailsPage />
              </MainLayout>
            </Suspense>
          </PrivateRoute>
        }
      />

      <Route
        path="/integrations/:id/edit"
        element={
          <PrivateRoute>
            <Suspense fallback={<div />}>
              <Navigation />
              <MainLayout>
                <UpsertIntegrationPage isEdit />
              </MainLayout>
            </Suspense>
          </PrivateRoute>
        }
      />

      <Route
        path="/purchases"
        element={
          <PrivateRoute>
            <Suspense fallback={<div />}>
              <Navigation />
              <MainLayout>
                <PurchasesPage />
              </MainLayout>
            </Suspense>
          </PrivateRoute>
        }
      />

      <Route
        path="/causes"
        element={
          <PrivateRoute>
            <Suspense fallback={<div />}>
              <Navigation />
              <MainLayout>
                <CausesPage />
              </MainLayout>
            </Suspense>
          </PrivateRoute>
        }
      />

      <Route
        path="/causes/new"
        element={
          <PrivateRoute>
            <Suspense fallback={<div />}>
              <Navigation />
              <MainLayout>
                <UpsertCausePage />
              </MainLayout>
            </Suspense>
          </PrivateRoute>
        }
      />

      <Route
        path="/causes/:id"
        element={
          <PrivateRoute>
            <Suspense fallback={<div />}>
              <Navigation />
              <MainLayout>
                <CausesDetailsPage />
              </MainLayout>
            </Suspense>
          </PrivateRoute>
        }
      />

      <Route
        path="/causes/:id/edit"
        element={
          <PrivateRoute>
            <Suspense fallback={<div />}>
              <Navigation />
              <MainLayout>
                <UpsertCausePage isEdit />
              </MainLayout>
            </Suspense>
          </PrivateRoute>
        }
      />

      <Route
        path="/ngos"
        element={
          <PrivateRoute>
            <Suspense fallback={<div />}>
              <Navigation />
              <MainLayout>
                <NonProfitsPage />
              </MainLayout>
            </Suspense>
          </PrivateRoute>
        }
      />

      <Route
        path="/ngos/new"
        element={
          <PrivateRoute>
            <Suspense fallback={<div />}>
              <Navigation />
              <MainLayout>
                <UpsertNonProfitPage />
              </MainLayout>
            </Suspense>
          </PrivateRoute>
        }
      />

      <Route
        path="/ngos/:id"
        element={
          <PrivateRoute>
            <Suspense fallback={<div />}>
              <Navigation />
              <MainLayout>
                <NonProfitsDetailsPage />
              </MainLayout>
            </Suspense>
          </PrivateRoute>
        }
      />

      <Route
        path="/ngos/:id/edit"
        element={
          <PrivateRoute>
            <Suspense fallback={<div />}>
              <Navigation />
              <MainLayout>
                <UpsertNonProfitPage isEdit />
              </MainLayout>
            </Suspense>
          </PrivateRoute>
        }
      />

      <Route
        path="/offers"
        element={
          <PrivateRoute>
            <Suspense fallback={<div />}>
              <Navigation />
              <MainLayout>
                <OffersPage />
              </MainLayout>
            </Suspense>
          </PrivateRoute>
        }
      />

      <Route
        path="/offers/:id"
        element={
          <PrivateRoute>
            <Suspense fallback={<div />}>
              <Navigation />
              <MainLayout>
                <OfferDetailsPage />
              </MainLayout>
            </Suspense>
          </PrivateRoute>
        }
      />

      <Route
        path="/offers/new"
        element={
          <PrivateRoute>
            <Suspense fallback={<div />}>
              <Navigation />
              <MainLayout>
                <UpsertOfferPage />
              </MainLayout>
            </Suspense>
          </PrivateRoute>
        }
      />

      <Route
        path="/offers/:id/edit"
        element={
          <PrivateRoute>
            <Suspense fallback={<div />}>
              <Navigation />
              <MainLayout>
                <UpsertOfferPage isEdit />
              </MainLayout>
            </Suspense>
          </PrivateRoute>
        }
      />

      <Route
        path="/settings"
        element={
          <PrivateRoute>
            <Suspense fallback={<div />}>
              <Navigation />
              <MainLayout>
                <SettingsPage />
              </MainLayout>
            </Suspense>
          </PrivateRoute>
        }
      />

      <Route
        path="/settings/edit"
        element={
          <PrivateRoute>
            <Suspense fallback={<div />}>
              <Navigation />
              <MainLayout>
                <EditSettingsPage />
              </MainLayout>
            </Suspense>
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default RoutesComponent;
