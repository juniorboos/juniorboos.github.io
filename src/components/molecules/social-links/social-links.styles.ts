import { styled } from "~stitches";

const SocialLinksWrapper = styled("div", {
  display: "flex",
  gap: "$4",
  alignItems: "center",
  color: "$textSecondary",
  alignSelf: "center",

  "& svg": {
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.1)",
      fill: "$textPrimary",
    },
  },

  "@bp1": {
    alignSelf: "auto",
  },
});

export { SocialLinksWrapper };
