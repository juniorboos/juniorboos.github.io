import { styled } from "~stitches";

const Button = styled("button", {
  background: "none",
  borderWidth: "$px",
  borderStyle: "$solid",
  borderColor: "$primary",
  borderRadius: "$2",
  color: "$textAccent",
  padding: "$3 $10",
  cursor: "pointer",
  fontSize: "$m",

  "&:hover": {
    backgroundColor: "$primary",
    color: "$textContrast",
    fontWeight: "$bold",
  },
});

export { Button };
