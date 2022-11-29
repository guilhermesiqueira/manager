import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import linkIcon from "./assets/link-icon.svg";
import * as S from "./styles";

export type Props = {
  text: string;
  page: any;
  icon?: string;
};

function LinkPage({ page, text, icon }: Props): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "link",
  });
  const navigate = useNavigate();

  return (
    <S.Container onClick={() => navigate(page)}>
      <>
        <img src={icon || linkIcon} alt={t("copyText")} />
        <span>{text}</span>
      </>
    </S.Container>
  );
}

export default LinkPage;
