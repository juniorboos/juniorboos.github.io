import { styled } from "~stitches";

const StyledProjects = styled("section", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "$8",
});

const StyledRow = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  gap: "$4",

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
  background: "rgba(255, 122, 87, 1)",
  position: "absolute",
  left: 0,
  top: 0,
  width: "calc(100% - 2rem)",
  height: "calc(100% - 2rem)",
  zIndex: "9",
  visibility: "hidden",
  opacity: "0",
  transition: "$default",

  padding: "$4",

  color: "#fff",

  "& a": {
    textDecoration: "none",

    "&:hover, svg": {
      fill: "#FFF",
    },
  },
});

const StyledCard = styled("div", {
  position: "relative",
  borderRadius: "$1",
  overflow: "hidden",
  display: "block",
  color: "$textPrimary",
  padding: "$4",
  backgroundColor: "#171826",

  "&:hover": {
    [`& ${StyledOverlay}`]: {
      bottom: 0,
      visibility: "visible",
      opacity: 1,
    },
  },
});

export { StyledProjects, StyledRow, StyledColumn, StyledCard, StyledOverlay };
