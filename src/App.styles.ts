import { styled } from "~stitches";

const AppWrapper = styled("div", {
  background:
    "radial-gradient(circle at 90% 70vh, rgba(80, 59, 143, 0.2), rgba(255, 255, 255, 0) 3%), radial-gradient(circle at 80% 40vh, rgba(80, 59, 143, 0.5), rgba(255, 255, 255, 0) 5%), radial-gradient(circle at 0% 40vh, rgba(80, 59, 143, 0.3), rgba(255, 255, 255, 0) 4%), linear-gradient(180deg, #020C1B 10%, #140535 25%, #020C1B 35%, #120827 55%, #10021B 70%, #020C1B 85%, #110211 100%)",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "$12",
  overflowX: "hidden",

  padding: "0 1rem",

  "& :is(header, section)": {
    width: "100%",
    minHeight: "$section",

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
