import { styled } from "~stitches";
import { HorizontalLine } from "./horizontal-line";
import { Typography } from "./typography";

const StyledSectionTitle = styled("div", {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  width: "100%",
  gap: "$6",
});

interface SectionTitleProps {
  name: string;
}

const SectionTitle = ({ name }: SectionTitleProps) => (
  <StyledSectionTitle>
    <Typography size="l" as="h2">
      {name}
    </Typography>
    <HorizontalLine />
  </StyledSectionTitle>
);

export { SectionTitle };
