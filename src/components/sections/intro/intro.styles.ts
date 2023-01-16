import { styled, keyframes } from "~stitches";

const StyledIntroWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "$8",
  minHeight: "$section",
  position: "relative",

  "@bp1": {
    gap: "$12",
    alignItems: "flex-start",
  },
});

const StyledTextWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$8",
});

const woble = keyframes({
  "0%": { transform: "translateY(-50%) rotate(-30deg)" },
  "40%": { transform: "translateY(-50%) rotate(-15deg)" },
  "70%": { transform: "translateY(-50%) rotate(-25deg)" },
  "100%": { transform: "translateY(-50%) rotate(-10deg)" },
});

const StyledRotatingLogo = styled("img", {
  position: "absolute",
  right: "-$15",
  top: "$15",
  opacity: "10%",
  width: "$logo-l",
  animation: `${woble} 10s ease 0s infinite alternate `,

  "@bp1": {
    right: "$13",
    top: "50%",
  },
});

export { StyledIntroWrapper, StyledTextWrapper, StyledRotatingLogo };
