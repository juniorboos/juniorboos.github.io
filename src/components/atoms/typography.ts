import { styled } from "~stitches";

const Typography = styled("p", {
  color: "#FFFFFF",
  fontSize: "1rem",

  variants: {
    color: {
      primary: {
        color: "#FFFFFF",
      },
      secondary: {
        color: "#B8A8D1",
      },
      accent: {
        color: "#E964FF",
      },
    },
    size: {
      xl: { fontSize: "3rem" },
      l: { fontSize: "2rem" },
      m: { fontSize: "1rem" },
      s: { fontSize: "0.75rem" },
    },
    weight: {
      bold: { fontWeight: "bold" },
      regular: { fontWeight: "regular" },
      thin: { fontWeight: "thin" },
    },
  },
});

export { Typography };
