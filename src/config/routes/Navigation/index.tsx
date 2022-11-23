import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import DashboardIconOn from "./assets/dashboardIconOn.svg";
import DashboardIconOff from "./assets/dashboardIconOff.svg";
import IntegrationsIconOff from "./assets/integrationsIconOff.svg";
import IntegrationsIconOn from "./assets/integrationsIconOn.svg";
import PurchasesIconOff from "./assets/purchasesIconOff.svg";
import PurchasesIconOn from "./assets/purchasesIconOn.svg";
import CausesIconOff from "./assets/causesIconOff.svg";
import CausesIconOn from "./assets/causesIconOn.svg";
import NgosIconOn from "./assets/ngosIconOn.svg";
import NgosIconOff from "./assets/ngosIconOff.svg";
import OffersIconOn from "./assets/offersIconOn.svg";
import OffersIconOff from "./assets/offersIconOff.svg";
import SettingsIconOff from "./assets/settingsIconOff.svg";
import SettingsIconOn from "./assets/settingsIconOn.svg";

import * as S from "./styles";
import NavigationLink from "./NavigationLink";

function Navigation(): JSX.Element {
  const location = useLocation();
  const { t } = useTranslation("translation", {
    keyPrefix: "menu",
  });

  function isInPath(path: string) {
    return [path].includes(location.pathname);
  }

  const routes = [
    {
      path: "/dashboard",
      iconOn: DashboardIconOn,
      iconOff: DashboardIconOff,
      title: t("dashboardLabel"),
    },
    {
      path: "/integrations",
      iconOn: IntegrationsIconOn,
      iconOff: IntegrationsIconOff,
      title: t("integrationsLabel"),
    },
    {
      path: "/purchases",
      iconOn: PurchasesIconOn,
      iconOff: PurchasesIconOff,
      title: t("purchasesLabel"),
    },
    {
      path: "/causes",
      iconOn: CausesIconOn,
      iconOff: CausesIconOff,
      title: t("causesLabel"),
    },
    {
      path: "/ngos",
      iconOn: NgosIconOn,
      iconOff: NgosIconOff,
      title: t("ngosLabel"),
    },
    {
      path: "/offers",
      iconOn: OffersIconOn,
      iconOff: OffersIconOff,
      title: t("offersLabel"),
    },
    {
      path: "/settings",
      iconOn: SettingsIconOn,
      iconOff: SettingsIconOff,
      title: t("settingsLabel"),
    },
  ];

  return (
    <S.Container>
      {routes.map((route) => (
        <NavigationLink
          key={route.path}
          to={{ pathname: route.path }}
          icon={isInPath(route.path) ? route.iconOn : route.iconOff}
          title={route.title}
          enabled={isInPath(route.path)}
          onClick={() => {}}
        />
      ))}
    </S.Container>
  );
}

export default Navigation;
