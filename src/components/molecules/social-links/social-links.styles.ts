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

export { SocialLinksWrapper };
