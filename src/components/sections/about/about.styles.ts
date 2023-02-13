import { styled } from "~stitches";
import { StyledSection } from "~theme/utils";

const StyledAboutWrapper = styled(StyledSection, {
  alignItems: "center",
  position: "relative",
});

const StyledContentWrapper = styled("div", {
  display: "flex",
  flexDirection: "column-reverse",
  justifyContent: "center",
  alignItems: "center",
  gap: "$8",

  "@bp3": {
    flexDirection: "row",
  },
});

const StyledTextWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$6",
});

const StyledPicture = styled("img", {
  width: 360,
  height: "auto",
  maxWidth: "100%",
  marginBottom: "$6",
  marginRight: 12,
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
