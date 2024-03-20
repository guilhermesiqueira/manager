import { AxiosResponse } from "axios";
import Report from "types/entities/Report";
import { apiGet, apiPost, apiPut } from "..";

const reportsApi = {
  getReportsList: (): Promise<AxiosResponse<Report>> =>
    apiGet("reports"),
  getReport: (id: any): Promise<AxiosResponse<Report>> =>
    apiGet(`reports/${id}`),
  createReport: (data: any): Promise<AxiosResponse<Report>> =>
    apiPost("reports", data),
  updateReport: (
    id: any,
    data: Report,
  ): Promise<AxiosResponse<Report>> =>
    apiPut(`reports/${id}`, data),
};

export default reportsApi;
