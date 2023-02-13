import { Typography } from "~atoms/typography";
import { styled } from "~stitches";
import { StyledSection } from "~theme/utils";

const StyledContact = styled(StyledSection, {
  position: "relative",
});

const StyledCard = styled("div", {
  borderRadius: "$1",
  boxShadow: "$default",
  maxWidth: "100%",
  display: "flex",
  margin: "0 auto",
  zIndex: 99,
  background: "$backgroundLight",

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

  [`& ${Typography}`]: {
    color: "$textContrast",
  },

  "@bp2": {
    width: "fit-content",
  },

  "@bp3": {
    width: 860,
  },
});

const FormWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$6",
  flexGrow: 1,
  padding: "$5",
  width: 450,
  maxWidth: "100%",

  "& form": {
    display: "flex",
    flexDirection: "column",
    gap: "$4",

    "& input, textarea": {
      color: "$textConstrast",
      backgroundColor: "$backgroundLight",
      border: "1px solid $neutral",
      borderRadius: "$1",
      transition: "$default",
      padding: "$3",
      resize: "vertical",
    },
  },

  "@bp1": {
    padding: "$8",
  },
});

const ContactInfo = styled("div", {
  display: "none",
  alignSelf: "center",
  minWidth: 350,
  padding: "$8",
  gap: "$6",
  borderLeft: "1px solid $neutral",

  "@bp2": {
    display: "flex",
    flexDirection: "column",
  },
});

const ContactInfoItem = styled("div", {
  display: "flex",
  alignItems: "center",
  flexWrap: "nowrap",
  gap: "$4",

  "& svg": {
    fontSize: "$m",
    color: "$primary",
  },

  "& div": {
    flexGrow: 1,
  },
});

const WavesSvgWrapper = styled("div", {
  position: "absolute",
  bottom: 0,
  left: "50%",
  transform: "translateX(-50%) rotate(180deg)",
  margin: 0,
  minWidth: 960,
  width: "100vw",
  overflow: "hidden",
  lineHeight: 0,
});

const WavesSvg = styled("svg", {
  position: "relative",
  display: "block",
  width: "100%",
  height: 120,
  transform: "rotateY(180deg)",

  "& path": {
    fill: "$primary",
  },
});

export {
  StyledContact,
  StyledCard,
  FormWrapper,
  ContactInfo,
  ContactInfoItem,
  WavesSvgWrapper,
  WavesSvg,
};
