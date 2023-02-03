import { MdDoubleArrow } from "react-icons/md";
import { SectionTitle } from "~atoms/section-title";
import { Typography } from "~atoms/typography";
import {
  CompaniesList,
  CompanyListItem,
  JobDescription,
  JobDescriptionSkills,
  StyledContent,
  StyledProfessional,
} from "./professional.styles";

const Professional = () => {
  return (
    <StyledProfessional>
      <SectionTitle name="Where I have worked" />
      <StyledContent>
        <CompaniesList>
          <CompanyListItem active>xgeeks</CompanyListItem>
          <CompanyListItem>Cazoo</CompanyListItem>
          <CompanyListItem>Glartek</CompanyListItem>
          <CompanyListItem>Freelancing</CompanyListItem>
        </CompaniesList>
        <JobDescription>
          <Typography size="xl" weight="bold">
            Javascript Engineer <span>@xgeeks</span>
          </Typography>
          <Typography weight="bold">Aug 2021 - Present</Typography>
          <JobDescriptionSkills>
            {[...Array(3)].map((_, idx) => (
              <li key={idx}>
                <MdDoubleArrow />
                <Typography>
                  Write modern, performant, maintainable code for a diverse
                  array of client and internal projects
                </Typography>
              </li>
            ))}
          </JobDescriptionSkills>
        </JobDescription>
      </StyledContent>
    </StyledProfessional>
  );
};

export { Professional };
