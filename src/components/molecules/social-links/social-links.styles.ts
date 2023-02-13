import { styled } from "~stitches";

const SocialMediaWrapper = styled("ul", {
  display: "flex",
  gap: "$4",
  alignItems: "center",
  alignSelf: "center",
  listStyle: "none",

  "& a": {
    display: "flex",
  },

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
