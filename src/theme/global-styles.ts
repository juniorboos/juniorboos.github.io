import { globalCss } from "@stitches/react";

const globalStyles = globalCss({
  "*": {
    fontFamily: "Poppins",
    padding: 0,
    margin: 0,
    boxSizing: "border-box",
  },

  /* width */
  "::-webkit-scrollbar": {
    width: 8,
    height: 5,
  },
  /* Track */
  "::-webkit-scrollbar-track": {
    background: "$backgroundSecondary",
  },
  /* Handle */
  "::-webkit-scrollbar-thumb": {
    background: "$scrollThumb",
  },
  /* Handle on hover */
  "::-webkit-scrollbar-thumb:hover": {
    background: "$scrollHover",
  },
});

export { globalStyles };
