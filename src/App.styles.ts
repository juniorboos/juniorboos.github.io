import { styled } from "~stitches";

const AppWrapper = styled("div", {
  backgroundColor: "$background",
  padding: "0 $8",

  display: "flex",
  flexDirection: "column",
  gap: "$12",

  "@bp1": {
    padding: "0 $15",
  },

  "@bp2": {
    padding: "0 $16",
  },

  "@bp3": {
    padding: "0 $18",
  },
});

export { AppWrapper };
