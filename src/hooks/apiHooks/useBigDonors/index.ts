import bigDonorsApi from "services/api/bigDonorsApi";
import BigDonor from "types/entities/BigDonor";

function useBigDonors() {
  async function getAllBigDonors() {
    const { data: bigDonors } = await bigDonorsApi.getBigDonorsList();

    return bigDonors;
  }

  async function createBigDonor(data: BigDonor) {
    const bigDonor = bigDonorsApi.createBigDonor(data);

    return bigDonor;
  }

  return {
    getAllBigDonors,
    createBigDonor,
  };
}

export default useBigDonors;
