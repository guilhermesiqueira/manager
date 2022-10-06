import { useState } from "react";
import { networks } from "config/networks";

export function useNetwork() {
  const [currentNetwork] = useState(networks[1]);

  return {
    currentNetwork,
  };
}
