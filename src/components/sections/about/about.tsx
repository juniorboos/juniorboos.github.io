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
import { useInView } from "react-intersection-observer";
import { USE_IN_VIEW_THRESHOLD } from "~theme/utils";

const About = (props: SectionProps) => {
  const { description, profilePicture, title } = AboutContent;
  const { ref, inView } = useInView({
    threshold: USE_IN_VIEW_THRESHOLD,
  });

  return (
    <StyledAboutWrapper {...props} inView={inView} ref={ref}>
      <SectionTitle name={title} />
      <StyledContentWrapper>
        <StyledTextWrapper>
          {description.map((sentence, idx) => (
            <Typography key={idx}>{sentence}</Typography>
          ))}
        </StyledTextWrapper>
        <StyledPicture
          src={profilePicture}
          loading="lazy"
          aria-hidden
          width={360}
          height={360}
        />
      </StyledContentWrapper>
    </StyledAboutWrapper>
  );
};

export { About };
