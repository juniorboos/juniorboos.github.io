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
          <Typography size="l" weight="bold">
            Javascript Engineer <span>@xgeeks</span>
          </Typography>
          <Typography weight="bold">Aug 2021 - Present</Typography>
          <JobDescriptionSkills>
            <li>
              <MdDoubleArrow />
              <Typography>
                Write modern, performant, maintainable code for a diverse array
                of client and internal projects Write modern, performant,
                maintainable code for a diverse array of client and internal
                projects
              </Typography>
            </li>
            <li>
              <MdDoubleArrow />
              <Typography>
                Write modern, performant, maintainable code for a diverse array
                of client and internal projects
              </Typography>
            </li>
            <li>
              <MdDoubleArrow />
              <Typography>
                Write modern, performant, maintainable code for a diverse array
                of client and internal projects
              </Typography>
            </li>
          </JobDescriptionSkills>
        </JobDescription>
      </StyledContent>
    </StyledProfessional>
  );
};

export { Professional };
