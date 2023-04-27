import poolsApi from "services/api/poolsApi";

function usePools() {
  async function getPools() {
    const { data: allPools } = await poolsApi.getPools();

    return allPools;
  }

  return {
    getPools,
  };
}

export default usePools;
