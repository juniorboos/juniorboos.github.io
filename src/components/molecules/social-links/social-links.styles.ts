import { styled } from "~stitches";

const SocialMediaWrapper = styled("div", {
  display: "flex",
  gap: "$4",
  alignItems: "center",
  alignSelf: "center",

  "& a > svg": {
    fill: "$textSecondary",
    padding: "$1",
    borderRadius: "$1",

    "&:hover": {
      fill: "$textPrimary",
      backgroundColor: "$backgroundAccent",
      transform: "scale(1.1)",
    },
  },

  "@bp1": {
    alignSelf: "auto",
  },
});

export { SocialMediaWrapper };
