import { Typography } from "~atoms/typography";
import {
  StyledAboutWrapper,
  StyledContentWrapper,
  StyledPicture,
  StyledTextWrapper,
} from "./about.styles";
import { SectionTitle } from "~atoms/section-title";
import AboutContent from "../../../content/about";

const About = () => {
  const { description, profilePicture, skills, title } = AboutContent;

  return (
    <StyledAboutWrapper>
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
        <StyledPicture src={profilePicture} />
      </StyledContentWrapper>
    </StyledAboutWrapper>
  );
};

export { About };
