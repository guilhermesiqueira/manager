import { renderHook } from "@testing-library/react-hooks";
import reportsApi from "services/api/reportsApi";
import useReport from ".";

describe("useReport", () => {
  let hook: ReturnType<typeof useReport>;

  beforeEach(() => {
    const { result } = renderHook(() => useReport());
    hook = result.current;
  });

  describe("#getAllReport", () => {
    beforeEach(() => {
      reportsApi.getReportsList = jest.fn(() => ({} as any));
    });

    it("calls getAllReports with correct params", () => {
      hook.getAllReports();

      expect(reportsApi.getReportsList).toHaveBeenCalled();
    });
  });

  describe("#getReport", () => {
    const id = 1;
    beforeEach(() => {
      reportsApi.getReport = jest.fn(() => ({} as any));
    });

    it("calls getReport with correct params", () => {
      hook.getReport(id);

      expect(reportsApi.getReport).toHaveBeenCalled();
      expect(reportsApi.getReport).toHaveBeenCalledWith(id);
    });
  });

  describe("#createReport", () => {
    const data = {
      id: 1,
      headline: "MAKE YOUR DONATION",
      title: "Donate $10,00",
      description: "And help us to help others",
      videoUrl: "https://www.youtube.com/watch?v=1",
      ctaText: "Donate now",
      ctaUrl: "https://ribon.io/donate",
      image: "https://ribon.io/donate.jpg",
      active: true,
      client: "web",
    };

    const file = "";

    beforeEach(() => {
      reportsApi.createReport = jest.fn(() => ({} as any));
    });

    // it("calls createReport with correct params", () => {
    //   hook.createReport(data);

    //   expect(reportsApi.createReport).toHaveBeenCalled();
    //   expect(reportsApi.createReport).toHaveBeenCalledWith(
    //     data,
    //   );
    // });
  });

  // describe("#updateReport", () => {
  //   const id = 1;
  //   const data = {
  //     id: 1,
  //     headline: "MAKE YOUR DONATION",
  //     title: "Donate $10,00",
  //     description: "And help us to help others",
  //     videoUrl: "https://www.youtube.com/watch?v=1",
  //     ctaText: "Donate now",
  //     ctaUrl: "https://ribon.io/donate",
  //     image: "https://ribon.io/donate.jpg",
  //     active: true,
  //     client: "web",
  //   };

  //   beforeEach(() => {
  //     reportsApi.updateReport = jest.fn(() => ({} as any));
  //   });

  //   it("calls updateReport with correct params", () => {
  //     hook.updateReport(data);

  //     expect(reportsApi.updateReport).toHaveBeenCalled();
  //     expect(reportsApi.updateReport).toHaveBeenCalledWith(
  //       id,
  //       data,
  //     );
  //   });
  // });
});
