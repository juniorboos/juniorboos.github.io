import { styled } from "~stitches";
import { StyledSection } from "~theme/utils";

const StyledProfessional = styled(StyledSection, {
  alignItems: "center",
});

const StyledContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  maxWidth: "100%",
  gap: "$8",

  "@bp2": {
    flexDirection: "row",
  },
});

const CompaniesList = styled("ul", {
  listStyle: "none",
  display: "flex",
  backgroundColor: "$backgroundSecondary",
  overflow: "auto",
  height: "fit-content",

  borderTopWidth: "$line",
  borderTopStyle: "$solid",
  borderTopColor: "$textSecondary",

  "@bp2": {
    borderTopWidth: 0,
    borderLeftWidth: "$line",
    borderLeftStyle: "$solid",
    borderLeftColor: "$textSecondary",

    flexDirection: "column",
    width: "auto",
    overflow: "initial",
  },
});

const CompanyListItem = styled("button", {
  color: "$textSecondary",
  background: "none",
  border: "none",
  width: "100%",

  display: "flex",
  alignItems: "center",
  padding: "$2 $4",
  cursor: "pointer",

  "&:hover": {
    color: "$textPrimary",
  },

  "&:focus": {
    backgroundColor: "$primary",
    color: "$textContrast",
    outline: "none",
  },

  variants: {
    active: {
      true: {
        color: "$textPrimary",
        backgroundColor: "$backgroundAccent",
      },
    },
  },
});

const JobDescription = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$2",
});

const JobDescriptionSkills = styled("ul", {
  display: "flex",
  flexDirection: "column",
  gap: "$4",
  marginTop: "$4",

  "& li": {
    display: "flex",
    gap: "$4",
  },

  "& svg": {
    fill: "$primary",
    minWidth: 24,
    height: 24,
  },
});

const TechnologiesList = styled("ul", {
  display: "flex",
  alignItems: "center",
  gap: "$3",
  transition: "$default",
  flexWrap: "wrap",
  listStyle: "none",

  "& li > a": { display: "flex" },
});

export {
  StyledProfessional,
  StyledContent,
  CompaniesList,
  CompanyListItem,
  JobDescription,
  JobDescriptionSkills,
  TechnologiesList,
};
