import { styled } from "~stitches";

const StyledSection = styled("section", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "$8",

  opacity: 0,
  transform: "translateX(-4rem)",
  transition: "opacity 0.5s ease 0.5s, transform 0.5s ease 0.5s",

  variants: {
    inView: {
      true: {
        opacity: 1,
        transform: "translateX(0)",
      },
    },
  },
});

const USE_IN_VIEW_THRESHOLD = 0;

export { StyledSection, USE_IN_VIEW_THRESHOLD };
