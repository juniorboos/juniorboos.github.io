import { styled } from "~stitches";

const Button = styled("button", {
  borderRadius: "$2",
  padding: "$3 $10",
  fontSize: "$m",
  textDecoration: "none",
  transition: "$button",

  "&:hover": {
    fontWeight: "$bold",
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: "$background",
        borderColor: "$primary",
        borderWidth: "$px",
        borderStyle: "$solid",
        color: "$textAccent",

        "&:hover": {
          backgroundColor: "$primary",
          color: "$textContrast",
        },
      },
      secondary: {
        backgroundColor: "$backgroundAccent",
        border: "none",
        color: "$textPrimary",

        "&:hover": {
          backgroundColor: "$backgroundSecondary",
        },
      },
    },
  },

  defaultVariants: {
    variant: "primary",
  },
});

export { Button };
