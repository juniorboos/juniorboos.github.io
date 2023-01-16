import { styled } from "~stitches";

const StyledHeader = styled("header", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "$4 $8",
  fontSize: "$m",
  position: "fixed",
  right: 0,
  left: 0,
  top: 0,
  zIndex: "$maximum",

  "@bp1": {
    padding: "$4 $15",
  },

  "@bp2": {
    padding: "$4 $16",
  },

  "@bp3": {
    padding: "$4 $18",
  },
});

const StyledNav = styled("nav", {
  display: "none",
  alignItems: "center",
  gap: "$4",

  "& a": {
    textDecoration: "none",
  },

  "@bp1": {
    display: "flex",
  },
});

export { StyledNav, StyledHeader };
