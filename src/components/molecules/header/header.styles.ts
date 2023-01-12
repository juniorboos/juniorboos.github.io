import { styled } from "@stitches/react";

const StyledHeader = styled("nav", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "1rem 24rem",
  fontSize: "1rem",
  position: "fixed",
  right: 0,
  left: 0,
  top: 0,
});

const StyledAnchorList = styled("ul", {
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  "& *": {
    textDecoration: "none",
    listStyle: "none",
  },
});

export { StyledAnchorList, StyledHeader };
