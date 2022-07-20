import { useLocation } from "react-router-dom";
import DashboardIconOn from "./assets/dashboardIconOn.svg";
import DashboardIconOff from "./assets/dashboardIconOff.svg";
import IntegrationsIconOff from "./assets/integrationsIconOff.svg";
import IntegrationsIconOn from "./assets/integrationsIconOn.svg";
import * as S from "./styles";
import NavigationLink from "./NavigationLink";

function Navigation(): JSX.Element {
  const location = useLocation();

  function isInPath(path: string) {
    return [path].includes(location.pathname);
  }

  const routes = [
    {
      path: "/",
      iconOn: DashboardIconOn,
      iconOff: DashboardIconOff,
      title: "Dashboard",
    },
    {
      path: "/test",
      iconOn: IntegrationsIconOn,
      iconOff: IntegrationsIconOff,
      title: "Integrations",
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
