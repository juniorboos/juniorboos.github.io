import { styled } from "~stitches";

const StyledHeader = styled("header", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "1rem 24rem",
  fontSize: "1rem",
  position: "fixed",
  right: 0,
  left: 0,
  top: 0,
  zIndex: 9999,
});

const StyledNav = styled("nav", {
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  "& a": {
    textDecoration: "none",
  },
});

export { StyledNav, StyledHeader };
