import { styled } from "~stitches";

const StyledIntroWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "4rem",
  minHeight: "100vh",
});

const StyledTextWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
});

export { StyledIntroWrapper, StyledTextWrapper };
