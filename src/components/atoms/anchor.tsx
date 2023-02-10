import { AnchorHTMLAttributes } from "react";
import { styled } from "~stitches";

const StyledAnchor = styled("a", {
  "& svg": {
    fill: "$textSecondary",
    padding: "$1",
    borderRadius: "$1",

    "&:hover": {
      fill: "$textPrimary",
      backgroundColor: "$backgroundAccent",
      transform: "scale(1.1)",
    },
  },
});

const Anchor = (props: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <StyledAnchor
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    ></StyledAnchor>
  );
};

export default Anchor;
