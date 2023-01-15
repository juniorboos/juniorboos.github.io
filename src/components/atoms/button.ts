import { styled } from "~stitches";

const Button = styled("button", {
  background: "none",
  border: "1px solid #E964FF",
  borderRadius: "10px",
  color: "#E964FF",
  padding: "0.75rem 3rem",
  cursor: "pointer",
  fontSize: "1rem",

  "&:hover": {
    backgroundColor: "#E964FF",
    color: "black",
    fontWeight: "bold",
  },
});

export { Button };
