import { styled } from "~stitches";

const Typography = styled("p", {
  color: "$textPrimary",
  fontSize: "$m",

  "& span": {
    color: "$textAccent",
    fontWeight: "$bold",
  },

  variants: {
    color: {
      primary: { color: "$textPrimary" },
      secondary: { color: "$textSecondary" },
      accent: { color: "$textAccent" },
    },
    size: {
      s: { fontSize: "$s" },
      m: { fontSize: "$m" },
      l: { fontSize: "$l" },
      xl: {
        fontSize: "$l",

        "@bp1": {
          padding: "$xl",
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
