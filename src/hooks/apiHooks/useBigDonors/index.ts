import bigDonorsApi from "services/api/bigDonorsApi";

function useBigDonors() {
  async function getAllBigDonors() {
    const { data: bigDonors } = await bigDonorsApi.getBigDonorsList();

    return bigDonors;
  }

  return {
    getAllBigDonors,
  };
}

export default useBigDonors;
