import { styled } from "~stitches";

const StyledAboutWrapper = styled("section", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "$8",
  minHeight: "$section",
  position: "relative",
});

const StyledContentWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "$8",

  "@bp2": {
    flexDirection: "row",
  },
});

const StyledTextWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$6",
  color: "$textPrimary",

  "& ul": {
    listStyle: "none",
    color: "$textAccent",
  },
});

const StyledPicture = styled("img", {
  width: 360,
  maxWidth: "100%",
  marginBottom: "$6",
  borderRadius: "$2",
  borderWidth: "calc(2 * $px)",
  borderStyle: "$solid",
  borderColor: "$primary",
  boxShadow: "12px 12px 0 1px $background, 12px 12px 0 3px $primary",
});

export {
  StyledAboutWrapper,
  StyledContentWrapper,
  StyledPicture,
  StyledTextWrapper,
};
