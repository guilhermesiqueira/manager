import reportsApi from "services/api/reportsApi";
import Report from "types/entities/Report";

function useReports() {
  async function getAllReports() {
    const { data: reports } =
      await reportsApi.getReportsList();

    return reports;
  }

  async function getReport(id: any) {
    const { data: report } = await reportsApi.getReport(
      id,
    );

    return report;
  }

  async function createReport(create: Report) {
    const { data: report } = await reportsApi.createReport(create);

    return report;
  }

  async function updateReport(data: Report) {
    const { data: report } = await reportsApi.updateReport(data.id, data);

    return report;
  }

  return {
    createReport,
    getAllReports,
    getReport,
    updateReport,
  };
}

export default useReports;
