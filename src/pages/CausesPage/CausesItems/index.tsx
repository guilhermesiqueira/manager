import { Link } from "react-router-dom";
import Cause from "types/entities/Cause";
import infoIcon from "assets/icons/info-icon.svg";
import editIcon from "assets/icons/edit-icon.svg";
import CopyableAddress from "components/atomics/CopyableAddress";
import * as S from "./styles";

type Props = {
  causes: Cause[];
  searchTerm: string;
};

function CauseItems({ causes, searchTerm }: Props) {
  function filterCauses(nonFilteredCauses: any) {
    return nonFilteredCauses.filter((causeData: any) => {
      if (searchTerm === "") {
        return causeData;
      } else if (
        causeData?.person?.customer?.email
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      ) {
        return causeData;
      } else {
        return null;
      }
    });
  }

  function renderCauses() {
    return (
      causes &&
      filterCauses(causes).map((cause: any) => (
        <tr key={cause.id}>
          <th>{cause?.paymentMethod}</th>
          <th>{cause?.person?.customer?.email || "guest"}</th>
          <th>{cause?.offer?.price || "0"}</th>
          <th>
            <th>
              <CopyableAddress text="wallet" />
            </th>
          </th>
          <th>
            <S.ActionsTableCell>
              <Link to="/integrations/">
                <img src={infoIcon} alt="view integration info" />
              </Link>

              <Link to="/integrations//edit">
                <img src={editIcon} alt="edit integration info" />
              </Link>
            </S.ActionsTableCell>
          </th>
        </tr>
      ))
    );
  }

  return <tbody>{renderCauses()}</tbody>;
}

export default CauseItems;
