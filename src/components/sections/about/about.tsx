import { Typography } from "~atoms/typography";
import {
  StyledAboutWrapper,
  StyledContentWrapper,
  StyledPicture,
  StyledTextWrapper,
} from "./about.styles";
import ProfilePicture from "../../../assets/images/profile.png";
import { HorizontalLine } from "~atoms/horizontal-line";
import { SectionTitle } from "~atoms/section-title";

const About = () => {
  return (
    <StyledAboutWrapper>
      <SectionTitle name="About me" />
      <StyledContentWrapper>
        <StyledTextWrapper>
          <Typography>
            I’m a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences for both web and mobile
            platforms.
          </Typography>
          <Typography>
            I’ve had the privilege of working at a start-up, a consultancy
            company, an e-commerce and as a freelancer. My main focus these days
            is building accessible, inclusive products for xgeeks.
          </Typography>
          <Typography>
            Here are a few technologies I’ve been working with recently:
          </Typography>
          <ul>
            <li>JavaScript (ES6+)</li>
            <li>Typescript</li>
            <li>React</li>
            <li>Styled Components</li>
          </ul>
        </StyledTextWrapper>
        <StyledPicture src={ProfilePicture} />
      </StyledContentWrapper>
    </StyledAboutWrapper>
  );
};

export { About };
