import { styled } from "~stitches";

const SocialLinksWrapper = styled("div", {
  display: "flex",
  gap: "$4",
  alignItems: "center",
  color: "$textSecondary",

  "& svg": {
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },

  "@bp1": {
    flexDirection: "column",
    position: "fixed",
    left: "$13",
    top: "60vh",
  },
});

const VerticalLine = styled("div", {
  display: "none",
  borderLeftWidth: "$vertical-line",
  borderLeftStyle: "$solid",
  height: "$vertical-line",

  "@bp1": {
    display: "block",
  },
});

export { SocialLinksWrapper, VerticalLine };
