import { MdArrowForward } from "@react-icons/all-files/md/MdArrowForward";
import { SectionTitle } from "~atoms/section-title";
import { Typography } from "~atoms/typography";
import {
  CompaniesList,
  CompanyListItem,
  JobDescription,
  JobDescriptionSkills,
  StyledContent,
  StyledProfessional,
  TechnologiesList,
} from "./professional.styles";

import ProfessionalContent from "../../../content/professional";
import { useState } from "react";
import { SectionProps } from "types";
import Anchor from "~atoms/anchor";
import { HorizontalLine } from "~atoms/horizontal-line";

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
            <Typography
              size="xl"
              color="accent"
              as="a"
              href={selectedCompany.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              @{selectedCompany.name}
            </Typography>
          </Typography>
          <Typography weight="bold">{selectedCompany.period}</Typography>
          <HorizontalLine small css={{ my: "1rem" }} />
          <TechnologiesList aria-label="Technologies">
            {selectedCompany.technologies.map(({ Icon, name, url }) => (
              <li key={`${selectedCompany.name}-${name}`}>
                <Anchor href={url} aria-label={name}>
                  <Icon size={32} title={name} aria-hidden />
                </Anchor>
              </li>
            ))}
          </TechnologiesList>
          <JobDescriptionSkills aria-label="Responsabilities">
            {selectedCompany.responsabilities.map((responsability, idx) => (
              <li key={idx}>
                <MdArrowForward />
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