import { createStitches } from "@stitches/react";
export * from "@stitches/react";
export const { styled, css } = createStitches({
  media: {
    bp1: "(min-width: 576px)",
    bp2: "(min-width: 768px)",
    bp3: "(min-width: 992px)",
    bp4: "(min-width: 1200px)",
  },
  theme: {
    colors: {
      textPrimary: "#FFFFFF",
      textSecondary: "#B8A8D1",
      textAccent: "#E964FF",
      textContrast: "#000000",
      primary: "#E964FF",
      background: "#020C1B",
      backgroundSecondary: "#0d1024",
      backgroundTertiary: "#171826",
      backgroundAccent: "#503b8f",
      scrollThumb: "#37256b",
      scrollHover: "#503b8f",
    },
    space: {
      1: "0.25rem",
      2: "0.5rem",
      3: "0.75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.5rem",
      10: "3rem",
      11: "3.5rem",
      12: "4rem",
      13: "5rem",
      14: "6rem",
      15: "8rem",
      16: "12rem",
      17: "18rem",
      18: "24rem",
    },
    fontSizes: {
      s: "0.75rem",
      m: "1rem",
      l: "1.25rem",
      xl: "2rem",
      xxl: "3rem",
    },
    fonts: {
      poppins: "Poppins, apple-system, sans-serif",
    },
    fontWeights: {
      thin: "thin",
      regular: "regular",
      bold: "bold",
    },
    lineHeights: {},
    letterSpacings: {},
    sizes: {
      "vertical-line": "8rem",
      section: "100vh",
      "logo-l": "5rem",
    },
    borderWidths: {
      px: "1px",
      line: "3px",
    },
    borderStyles: {
      solid: "solid",
    },
    radii: {
      1: "5px",
      2: "10px",
    },
    shadows: {
      primary: "#E964FF",
      background: "#020C1B",
      header: "0 0 5px 5px rgba(0, 0, 0, 0.2)",
    },
    zIndices: {
      maximum: 9999,
    },
    transitions: {
      default: "all 0.3s",
      button: "all 0.1s",
    },
  },
});
