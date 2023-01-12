import { styled } from "@stitches/react";

const StyledHeader = styled("nav", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "1rem 4rem",
  backgroundColor: "#020C1B",
  fontSize: "1rem",
});

const StyledAnchorList = styled("ul", {
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  "& *": {
    color: "white",
    textDecoration: "none",
    listStyle: "none",
  },
});

export { StyledAnchorList, StyledHeader };
