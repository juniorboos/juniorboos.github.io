import { styled } from "~stitches";

const StyledRow = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  gap: "$4",
  marginBottom: "$4",

  "@bp1": {
    flexWrap: "nowrap",
    gap: "$4",
  },
});

const StyledColumn = styled("div", {
  position: "relative",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "$4",

  "@bp1": {
    flex: 1,
    gap: "$4",
  },
});

const StyledOverlay = styled("div", {
  background: "$backgroundAccent",
  position: "absolute",
  left: 0,
  top: 0,
  width: "100%",
  height: "100%",
  zIndex: "9",
  visibility: "hidden",
  opacity: "0",
  transition: "$default",
  display: "flex",
  flexDirection: "column",

  padding: "$4",
  gap: "$4",

  color: "$textPrimary",

  "& a": {
    textDecoration: "none",
    height: "2rem",

    "& svg": {
      fill: "$textPrimary",
    },

    "&:hover > svg": {
      backgroundColor: "$primary",
    },
  },
});

const StyledCard = styled("div", {
  position: "relative",
  borderRadius: "$1",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  padding: "$4",
  backgroundColor: "$backgroundTertiary",

  "& > :first-child": {
    marginBottom: "$2",
  },

  "&:hover": {
    [`& ${StyledOverlay}`]: {
      bottom: 0,
      visibility: "visible",
      opacity: 1,
    },
  },
});

const TechnologiesList = styled("ul", {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  gap: "$3",
  flexGrow: 1,

  "& li": { display: "flex" },

  "@bp2": {
    gap: "$4",
  },
});

const TitleWrapper = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "nowrap",
  gap: "$2",
});

const HorizontalLine = styled("hr", {
  width: "90%",
  borderColor: "$neutral",
  opacity: "10%",
  alignSelf: "center",
  marginBottom: "$2",
});

export {
  StyledRow,
  StyledColumn,
  StyledCard,
  StyledOverlay,
  TechnologiesList,
  TitleWrapper,
  HorizontalLine,
};
