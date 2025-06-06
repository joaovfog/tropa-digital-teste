import type { DefaultTheme } from "styled-components";

const colors = {
  primary: {
    main: "#CC6237",
    light: "#D67548",
    dark: "#A83F1E",
  },
  secondary: {
    main: "#00C1D4",
    light: "#33DFF0",
    dark: "#00848F",
  },
  background: {
    default: "#FFFFFF",
    paper: "#F7F9FC",
    dark: "#1A1A1A",
  },
  text: {
    primary: "#252525",
    secondary: "#9FA3B0",
    disabled: "#9E9E9E",
    inverse: "#FFFFFF",
  },
  error: {
    main: "#FF3B3B",
    light: "#FF6B6B",
    dark: "#CC2E2E",
  },
  success: {
    main: "#4DEF00",
    light: "#39D98A",
    dark: "#048B50",
  },
  warning: {
    main: "#FFAB00",
    light: "#FFB933",
    dark: "#CC8900",
  },
  grey: {
    50: "#F4F6F8",
    100: "#F5F5F5",
    200: "#EEEEEE",
    300: "#E0E0E0",
    400: "#BDBDBD",
    500: "#9E9E9E",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
  },
};

const typography = {
  fontFamily: {
    primary: "'Inter', sans-serif",
    secondary: "'Poppins', sans-serif",
  },
  fontWeights: {
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
  fontSize: {
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    base: "1rem", // 16px
    lg: "1.125rem", // 18px
    xl: "1.25rem", // 20px
    "2xl": "1.5rem", // 24px
    "3xl": "1.875rem", // 30px
    "4xl": "2.25rem", // 36px
    "5xl": "3rem", // 48px
  },
  lineHeight: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
  },
};

const spacing = {
  xs: "0.25rem", // 4px
  sm: "0.5rem", // 8px
  md: "1rem", // 16px
  lg: "1.5rem", // 24px
  xl: "2rem", // 32px
  "2xl": "2.5rem", // 40px
  "3xl": "3rem", // 48px
  "4xl": "4rem", // 64px
  "5xl": "6rem", // 96px
};

const breakpoints = {
  xs: "320px",
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
  "2xl": "1400px",
};

const mediaQueries = {
  xs: `@media (min-width: ${breakpoints.xs})`,
  sm: `@media (min-width: ${breakpoints.sm})`,
  md: `@media (min-width: ${breakpoints.md})`,
  lg: `@media (min-width: ${breakpoints.lg})`,
  xl: `@media (min-width: ${breakpoints.xl})`,
  "2xl": `@media (min-width: ${breakpoints["2xl"]})`,
};

const theme: DefaultTheme = {
  colors,
  typography,
  spacing,
  breakpoints,
  mediaQueries,
};

export default theme;
