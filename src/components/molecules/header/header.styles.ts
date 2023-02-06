import { Typography } from "~atoms/typography";
import { styled } from "~stitches";

const StyledHeader = styled("nav", {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
  padding: 0,
  backgroundColor: "$background",
  boxShadow: "$default",

  transition: "$default",

  position: "fixed",
  top: 0,
  right: 0,
  left: 0,
  zIndex: 1030,

  "@bp3": {
    padding: "0.5rem 1rem",
    flexFlow: "row nowrap",
    justifyContent: "flex-start",
  },
});

const NavLogo = styled("a", {
  height: 80,
  display: "flex",
  alignItems: "center",
  marginRight: "$4",
  fontSize: "1.25rem",
  lineHeight: "inherit",
  whiteSpace: "nowrap",

  "& img": {
    width: 75,
    filter: "drop-shadow(1px 2px 25px rgba(206, 212, 218, 0.9))",
  },
});

const NavToggler = styled("button", {
  padding: "$1 $3",
  fontSize: "1.25rem",
  lineHeight: 1,
  background: "none",
  border: "none",

  "& svg": {
    display: "inline-block",
    width: "1.5em",
    height: "1.5em",
    verticalAlign: "middle",
    fill: "$textPrimary",
  },

  "@bp1": {
    display: "none",
  },
});

const StyledNav = styled("nav", {
  display: "none",
  flexBasis: "100%",
  flexGrow: 1,
  alignItems: "center",

  "@bp1": {
    display: "flex",
    flexBasis: "auto",
  },

  variants: {
    isExpanded: {
      true: {
        display: "block",
        marginBottom: "$4",
        "@bp1": { display: "flex", flexBasis: "auto", margin: 0 },
      },
    },
  },
});

const NavList = styled("ul", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginLeft: "auto",
  paddingLeft: 0,
  marginBottom: 0,
  listStyle: "none",

  "@bp1": {
    flexDirection: "row",
  },
});

const NavListItem = styled("li", {
  padding: 0,

  [`& ${Typography}`]: {
    display: "block",
    padding: "$2 $4",
    fontSize: 13,
    fontWeight: "bold",
    margin: "0 $3",
    transition: "$default",
    textDecoration: "none",

    "&:hover": {
      color: "$textAccent",
    },
  },

  "@bp1": {
    [`& ${Typography}`]: {
      padding: "0 $2",
    },
  },
});

export { StyledNav, StyledHeader, NavLogo, NavToggler, NavList, NavListItem };
