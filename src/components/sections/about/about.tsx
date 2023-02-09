import { Typography } from "~atoms/typography";
import {
  StyledAboutWrapper,
  StyledContentWrapper,
  StyledPicture,
  StyledTextWrapper,
} from "./about.styles";
import { SectionTitle } from "~atoms/section-title";
import AboutContent from "../../../content/about";
import { SectionProps } from "types";

const About = (props: SectionProps) => {
  const { description, profilePicture, skills, title } = AboutContent;

  return (
    <StyledAboutWrapper {...props}>
      <SectionTitle name={title} />
      <StyledContentWrapper>
        <StyledTextWrapper>
          {description.map((sentence, idx) => (
            <Typography key={idx}>{sentence}</Typography>
          ))}
          <ul>
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </StyledTextWrapper>
        <StyledPicture src={profilePicture} loading="lazy" aria-hidden />
      </StyledContentWrapper>
    </StyledAboutWrapper>
  );
};

export { About };
