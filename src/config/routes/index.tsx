import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import TreasurePage from "pages/dashboard/TreasurePage";
import MainLayout from "layouts/MainLayout";

function RoutesComponent(): JSX.Element {
  return (
    <Switch>
      <Route path="/" exact>
        <Suspense fallback={<div />}>
          <MainLayout>
            <TreasurePage />
          </MainLayout>
        </Suspense>
      </Route>
    </Switch>
  );
}

export default RoutesComponent;
