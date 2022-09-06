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

const theme: ThemeType = {
  grid: {},
  border: {},
  font: {
    family: "Inter",
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {},
  },
  colors: {
    white: "#FFFFFF",
    light_red: "#FDEBFF",
    medium_red: "#F2A9C3",
    red: "#FF6B6F",
    light_green: "#D1FFDB",
    medium_green: "#8CE0BE",
    green: "#00DA93",
    dark_green: "#025B37",
    light_orange: "#FFD5BF",
    medium_orange: "#FF9661",
    orange: "#FA7203",
    dark_orange: "#AF5333",
    light_yellow: "#F0E8C2",
    medium_yellow: "#FFEB7A",
    dark_yellow: "#775B33",
    yellow: "#FFCE00",
    mediumGray: "#D4CEC3",
    gray: "#867F70",
    lightGray: "#F2F2F0",
    darkGray: "#28241C",

    lightShadow: "rgba(24, 86, 105, 0.15)",
    darkShadow: "rgba(40, 36, 28, 0.15)",
  },
  spacings: {},
  breakpoints: {
    mobile: "0px",
    mobileMedium: "374px",
    pad: "600px",
    desktop: "1024px",
  },
};

export default theme;
