import { styled, keyframes } from "~stitches";

const StyledIntroWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "4rem",
  minHeight: "100vh",
  position: "relative",
});

const StyledTextWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
});

const woble = keyframes({
  "0%": { transform: "translateY(-50%) rotate(-30deg)" },
  "40%": { transform: "translateY(-50%) rotate(-15deg)" },
  "70%": { transform: "translateY(-50%) rotate(-25deg)" },
  "100%": { transform: "translateY(-50%) rotate(-10deg)" },
});

const StyledRotatingLogo = styled("img", {
  position: "absolute",
  right: "5rem",
  top: "50%",
  opacity: "10%",
  width: "20rem",
  animation: `${woble} 10s ease 0s infinite alternate `,
});

export { StyledIntroWrapper, StyledTextWrapper, StyledRotatingLogo };
