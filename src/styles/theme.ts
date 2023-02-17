import brandColors from "./colors/brand";
import feedbackColors from "./colors/feedback";
import neutralColors from "./colors/neutral";

export interface Breakpoint {
  mobile: string;
  mobileMedium: string;
  pad: string;
  desktop: string;
}

interface ThemeType {
  breakpoints: Breakpoint;
  [key: string]: any;
}

const getSpacing = (space: number): string => {
  const spacings = [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 112];

  if (!spacings.includes(space)) {
    return "0px";
  }
  return `${space}px`;
};

const theme: ThemeType = {
  grid: {},
  border: {},
  font: {
    family: "Inter",
    sizes: {},
  },
  colors: {
    neutral10: "#FFFFFF",
    green30: "#00DA93",
    green40: "#025B37",
    orange10: "#FFD5BF",
    orange20: "#FF9661",
    orange30: "#FA7203",
    orange40: "#AF5333",
    yellow10: "#F0E8C2",
    yellow20: "#FFEB7A",
    yellow30: "#FFCE00",
    yellow40: "#775B33",
    gray10: "#F2F2F0",
    gray20: "#D4CEC3",
    gray30: "#867F70",
    gray40: "#28241C",
    brand: brandColors,
    feedback: feedbackColors,
    neutral: neutralColors,
    defaultShadow: "rgba(40, 36, 28, 0.15)",
    backgroundOverlay: "rgba(40, 36, 28, 0.60)",
  },
  zindex: {
    base: 0,
    above: 1,
    below: -1,
    dropdown: 2,
    navbar: 3,
    modal: 4,
    toast: 5,
    tooltip: 6,
    loading: 7,
  },
  spacing: (top: number, right?: number, bottom?: number, left?: number) =>
    `${
      getSpacing(top) +
      (typeof right === "number" ? ` ${getSpacing(right)}` : "") +
      (typeof bottom === "number" ? ` ${getSpacing(bottom)}` : "") +
      (typeof left === "number" ? ` ${getSpacing(left)}` : "")
    }`,
  breakpoints: {
    mobile: "0px",
    mobileMedium: "374px",
    pad: "600px",
    desktop: "1024px",
  },
};

export default theme;
