import { styled } from "~stitches";

const SocialMediaWrapper = styled("div", {
  display: "flex",
  gap: "$4",
  alignItems: "center",
  alignSelf: "center",

  "& a > svg": {
    cursor: "pointer",
    fill: "$textSecondary",
    "&:hover": {
      transform: "scale(1.1)",
      fill: "$textPrimary",
    },
  },

  "@bp1": {
    alignSelf: "auto",
  },
});

export { SocialMediaWrapper };
