import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import EditIcon from "assets/icons/editIcon";
import infoIcon from "assets/icons/info-icon.svg";
import editIcon from "assets/icons/edit-icon.svg";
import useReports from "hooks/apiHooks/useReports";

import { Button } from "@chakra-ui/react";
import theme from "styles/theme";

import { useCallback, useEffect, useState } from "react";
import { logError } from "services/crashReport";

import * as S from "./styles";

function ReportsPage(): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "reports",
  });
  const { neutral } = theme.colors;
  const [reports, setReports] = useState<any>([]);
  const { getAllReports } = useReports();

  const reportsMock = [
    {
      "id": 1,
      "name": "Março/2024",
      "link": "https://projetos.ribon.io/relatorios/2024/mar",
      "status": "Active"
    },
    {
      "id": 2,
      "name": "Fevereiro/2024",
      "link": "https://projetos.ribon.io/relatorios/2024/feb",
      "status": "Active"
    }
  ]

  const fetchReports = useCallback(async () => {
    try {
      const allReports = await getAllReports();
      setReports(allReports);
    } catch (e) {
      logError(e);
    }
  }, []);
  
  useEffect(() => {
    fetchReports();
  }, []);

  function renderTableRows() {
    console.log({reports});
    return reportsMock?.map((item: any) => (
      <tr key={item.id}>
        <th>{item.name}</th>
        <th>{item.link}</th>
        <th>
          <S.StatusTableCell
            // style={{ color: statusColors[item.active ? "active" : "inactive"] }}
          >
            {item.status}
          </S.StatusTableCell>
        </th>
        <th>
          <S.ActionsTableCell>
            <Link to={`/impression-cards/${item?.id}`}>
              <img src={infoIcon} alt="view impression card info" />
            </Link>

            <Link to={`/impression-cards/${item.id}/edit`}>
              <img src={editIcon} alt="edit impression card info" />
            </Link>
          </S.ActionsTableCell>
        </th>
      </tr>
    ));
  }

  return (
    <S.Content>
      <S.Title>{t("title")}</S.Title>

      <S.Content>
        <Link to="edit">
          <Button
            color={neutral[50] as string}
            background={neutral[800]}
            _hover={{ bg: neutral[500] }}
            leftIcon={<EditIcon />}
          >
            {t("addButton")}
          </Button>
        </Link>

        <S.Subtitle>{t("title")}</S.Subtitle>

      <S.Container>
        <S.Table>
          <thead>
            <tr>
              <th>{t("table.name")}</th>
              <th>{t("table.link")}</th>
              <th>{t("table.link")}</th>
            </tr>
          </thead>
          <tbody>{renderTableRows()}</tbody>
        </S.Table>
      </S.Container>
      </S.Content>
    </S.Content>
  );
}

export default ReportsPage;
