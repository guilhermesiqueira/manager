import { Link } from "react-router-dom";
import Cause from "types/entities/Cause";
import infoIcon from "assets/icons/info-icon.svg";
import editIcon from "assets/icons/edit-icon.svg";
import CopyableAddress from "components/atomics/CopyableAddress";
import { useCallback, useEffect, useState } from "react";
import usePools from "hooks/apiTheGraphHooks/usePools";
import { logError } from "services/crashReport";
import { formatFromDecimals } from "lib/web3Helpers/etherFormatters";
import Pool from "types/apiResponses/pool";
import * as S from "./styles";

type Props = {
  causes: Cause[];
  searchTerm: string;
};

function CauseItems({ causes, searchTerm }: Props) {
  const { getAllPools } = usePools();

  const [pools, setPools] = useState<Pool[]>();

  function filterCauses(nonFilteredCauses: any) {
    return nonFilteredCauses.filter((causeData: any) => {
      if (searchTerm === "") {
        return causeData;
      } else if (
        causeData?.name.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return causeData;
      } else {
        return null;
      }
    });
  }

  const fetchApiPools = useCallback(async () => {
    try {
      const apiPools = await getAllPools();
      setPools(apiPools.pools);
    } catch (e) {
      logError(e);
    }
  }, [pools]);

  useEffect(() => {
    fetchApiPools();
  }, []);

  const handleBalance = (address: string) => {
    const pool = pools?.find((p) => p.id === address);
    if (pool) {
      return formatFromDecimals(pool.balance).toFixed(2);
    }
    return 0;
  };

  function renderCauses() {
    return (
      causes &&
      filterCauses(causes).map((cause: any) => (
        <tr key={cause.id}>
          <th>{cause?.name}</th>
          <th>{cause?.pools[0].token.name || "-"}</th>
          <th>{handleBalance(cause.pools[0].address)}</th>
          <th>
            <CopyableAddress text={cause.pools[0].address || "-"} />
          </th>
          <th>
            <S.ActionsTableCell>
              <Link to={`/causes/${cause.id}`}>
                <img src={infoIcon} alt="view integration info" />
              </Link>

              <Link to={`/causes/${cause.id}/edit`}>
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
