import { SectionTitle } from "~atoms/section-title";
import { Typography } from "~atoms/typography";
import {
  CompaniesList,
  CompanyListItem,
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
        <div>
          <Typography>
            Javascript Engineer <span>@xgeeks</span>
          </Typography>
          <Typography>Aug 2021 - Present</Typography>
          <ul>
            <li>
              <Typography>
                Write modern, performant, maintainable code for a diverse array
                of client and internal projects
              </Typography>
            </li>
            <li>
              <Typography>
                Write modern, performant, maintainable code for a diverse array
                of client and internal projects
              </Typography>
            </li>
            <li>
              <Typography>
                Write modern, performant, maintainable code for a diverse array
                of client and internal projects
              </Typography>
            </li>
          </ul>
        </div>
      </StyledContent>
    </StyledProfessional>
  );
};

export { Professional };
