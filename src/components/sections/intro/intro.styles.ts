import { Button } from "~atoms/button";
import { styled, keyframes } from "~stitches";

const StyledIntroWrapper = styled("header", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "relative",

  "@bp1": {
    gap: "$12",
  },
});

const StyledTextWrapper = styled("div", {
  display: "flex",
  alignItems: "flex-start",
  flexDirection: "column",
  gap: "$8",

  position: "relative",
  zIndex: 4,

  [`& ${Button}`]: {
    marginTop: "$8",
    alignSelf: "center",
    "@bp1": {
      alignSelf: "auto",
    },
  },

  "@bp2": {
    minWidth: 420,
  },
});

const woble = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "40%": { transform: "rotate(-15deg)" },
  "70%": { transform: "rotate(-10deg)" },
  "100%": { transform: "rotate(0deg)" },
});

const StyledRotatingLogo = styled("img", {
  position: "absolute",
  right: 0,
  bottom: 0,
  zIndex: 3,
  animation: `${woble} 4s ease 0s infinite alternate-reverse `,
  boxShadow: "0px 4px 10px $background",

  "@bp1": {
    top: 0,
    width: "$logo-l",
  },
});

const StyledPictureWrapper = styled("div", {
  position: "relative",
  height: 300,
  display: "flex",

  "@bp2": {
    minWidth: "50%",
  },
});

const StyledProfilePicture = styled("img", {
  zIndex: 4,
  position: "absolute",
  right: 0,
  display: "none",
  filter: "drop-shadow(black 1px 2px 25px)",

  "@bp2": {
    display: "block",
    width: 500,
  },

  "@bp3": {
    maxWidth: "100%",
  },
});

const StyledRectangle = styled("img", {
  width: "200vw",
  position: "absolute",
  right: 0,
  zIndex: 2,
  opacity: "50%",

  animation: `${woble} 10s ease 0s infinite alternate `,

  "@bp2": {
    width: 540,
    opacity: "100%",
  },

  variants: {
    below: {
      true: {
        zIndex: 1,
        top: "10%",

        animation: `${woble} 10s ease-in 0s infinite alternate `,

        "@bp1": {
          top: "30%",
        },
      },
    },
  },
});

export {
  StyledIntroWrapper,
  StyledTextWrapper,
  StyledRotatingLogo,
  StyledProfilePicture,
  StyledRectangle,
  StyledPictureWrapper,
};
