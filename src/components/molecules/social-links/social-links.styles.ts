import { styled } from "~stitches";

const SocialLinksWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$4",
  alignItems: "center",
  position: "fixed",
  left: "$13",
  top: "60vh",
  color: "$textSecondary",

  "& svg": {
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
});

const VerticalLine = styled("div", {
  borderLeftWidth: "$vertical-line",
  borderLeftStyle: "$solid",
  height: "$vertical-line",
});

export { SocialLinksWrapper, VerticalLine };
