import { styled } from "~stitches";

const AppWrapper = styled("div", {
  backgroundColor: "$background",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "$12",
  overflowX: "hidden",

  padding: "0 1rem",

  "& :is(header, section)": {
    width: "100%",

    "@bp1": {
      maxWidth: 540,
    },

    "@bp2": {
      maxWidth: 720,
    },

    "@bp3": {
      maxWidth: 960,
    },

    "@bp4": {
      maxWidth: 1140,
    },
  },
});

export { AppWrapper };
