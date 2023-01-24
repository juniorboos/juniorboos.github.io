import { styled } from "~stitches";

const VerticalLine = styled("div", {
  display: "none",
  borderLeftWidth: "$line",
  borderLeftStyle: "$solid",
  height: "$vertical-line",

  "@bp1": {
    display: "block",
  },
});

export { VerticalLine };
