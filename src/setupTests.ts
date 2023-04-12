import "@testing-library/jest-dom";
import "jest-canvas-mock";

export const mockLogErrorFunction = jest.fn();

jest.mock("react-chartjs-2", () => ({
  Bar: () => null,
}));

jest.mock("services/crashReport", () => ({
  __esModule: true,
  logError: mockLogErrorFunction,
}));
