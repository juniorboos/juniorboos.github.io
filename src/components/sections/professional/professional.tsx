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

import ProfessionalContent from "../../../content/professional";
import { useState } from "react";
import { SectionProps } from "types";

const Professional = (props: SectionProps) => {
  const { title, companies } = ProfessionalContent;
  const [selectedCompany, setSelectedCompany] = useState(companies[0]);

  return (
    <StyledProfessional {...props}>
      <SectionTitle name={title} />
      <StyledContent>
        <CompaniesList>
          {companies.map((company) => (
            <CompanyListItem
              key={company.name}
              active={company.name === selectedCompany.name}
              onClick={() => setSelectedCompany(company)}
            >
              {company.name}
            </CompanyListItem>
          ))}
        </CompaniesList>
        <JobDescription>
          <Typography size="xl" weight="bold">
            {selectedCompany.role}{" "}
            <Typography size="xl" color="accent" as="a">
              @{selectedCompany.name}
            </Typography>
          </Typography>
          <Typography weight="bold">{selectedCompany.period}</Typography>
          <JobDescriptionSkills>
            {selectedCompany.responsabilities.map((responsability, idx) => (
              <li key={idx}>
                <MdDoubleArrow />
                <Typography>{responsability}</Typography>
              </li>
            ))}
          </JobDescriptionSkills>
        </JobDescription>
      </StyledContent>
    </StyledProfessional>
  );
};

export { Professional };
