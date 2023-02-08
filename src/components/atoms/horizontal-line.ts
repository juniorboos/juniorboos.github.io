import { styled } from "~stitches";

const HorizontalLine = styled("div", {
  borderTopWidth: "$line",
  borderTopStyle: "$solid",
  borderColor: "$textSecondary",
  flexGrow: 1,

  variants: {
    small: {
      true: {
        borderTopWidth: "$px",
        opacity: "20%",
      },
    },
  },
});

export { HorizontalLine };
