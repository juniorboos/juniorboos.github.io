import { styled } from "~stitches";

const Typography = styled("p", {
  color: "$textPrimary",
  fontSize: "$m",
  textDecoration: "none",
  wordBreak: "break-word",
  background: "none",
  border: "none",

  "& span": {
    color: "$textAccent",
    fontWeight: "$bold",
  },

  variants: {
    color: {
      primary: { color: "$textPrimary" },
      secondary: { color: "$textSecondary" },
      accent: { color: "$textAccent" },
      contrast: { color: "$textContrast" },
    },
    size: {
      s: { fontSize: "$s" },
      m: { fontSize: "$m" },
      l: { fontSize: "$l" },
      xl: { fontSize: "$xl" },
      xxl: {
        fontSize: "$xl",

        "@bp1": {
          padding: "$xxl",
        },
      },
    },
    weight: {
      regular: { fontWeight: "$regular" },
      thin: { fontWeight: "$thin" },
      bold: { fontWeight: "$bold" },
    },
  },
});

export { Typography };
