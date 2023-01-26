import { styled } from "~stitches";

const StyledProfessional = styled("section", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "$8",
  minHeight: "$section",
});

const StyledContent = styled("section", {
  display: "flex",
  flexDirection: "column",
  maxWidth: "100%",
  gap: "$4",
});

const CompaniesList = styled("ul", {
  listStyle: "none",
  display: "flex",

  borderTopWidth: "$line",
  borderTopStyle: "$solid",
  borderTopColor: "$textSecondary",
});

const CompanyListItem = styled("li", {
  color: "$textSecondary",

  display: "flex",
  alignItems: "center",
  padding: "$2 $4",
  cursor: "pointer",

  variants: {
    active: {
      true: {
        borderTopColor: "$primary",
        backgroundColor: "rgba(187, 100, 255, 0.2)",
        fontWeight: "$bold",
      },
    },
  },
});

export { StyledProfessional, StyledContent, CompaniesList, CompanyListItem };
