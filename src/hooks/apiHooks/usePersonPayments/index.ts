
import { useCallback, useState } from "react";
import personPaymentsApi from "services/api/personPaymentsApi";
import { CreateBigDonation } from "types/apiResponses/BigDonation";



function usePersonPayments() {
 
  const [perPage, setPerPage] = useState(10);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [status, setStatus] = useState<string[]>([]);
  const getPersonPayments = useCallback(async () => {
    
    const { data: allPersonPayments } =
      await personPaymentsApi.getPersonPaymentsList({page, perPage: 10, searchTerm, status});
      
    return allPersonPayments;
  }, [page, perPage, setPage, searchTerm, status]);


  function updatePage(newPage: number) {
    setPage(newPage);
  }

  function updateSearchTerm(newSearchTerm: string) {
    setSearchTerm(newSearchTerm);
  }


  async function createBigDonation(data: CreateBigDonation) {
    const bigDonation = personPaymentsApi.createBigDonation(data);

    return bigDonation;
  }

  async function getBigDonorsPayments() {
    const { data: bigDonorsPayments } =
      await personPaymentsApi.getBigDonorsPayments();

    return bigDonorsPayments;
  }

  async function getBigDonorPersonPayment(id: string) {
    const { data: bigDonorPersonPayment } =
      await personPaymentsApi.getBigDonorPersonPayment(id);

    return bigDonorPersonPayment;
  }

  return {
    status,
    setStatus,
    searchTerm,
    setSearchTerm,
    updateSearchTerm,
    updatePage,
    setPerPage,
    setPage,
    getPersonPayments,
    getBigDonorsPayments,
    createBigDonation,
    getBigDonorPersonPayment,
  };
}

export default usePersonPayments;
