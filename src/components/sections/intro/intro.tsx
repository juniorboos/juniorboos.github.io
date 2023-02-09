import { Button } from "~atoms/button";
import { Typography } from "~atoms/typography";
import {
  StyledIntroWrapper,
  StyledProfilePicture,
  StyledPictureWrapper,
  StyledRectangle,
  StyledTextWrapper,
  StyledRotatingLogo,
} from "./intro.styles";
import PortfolioLogo from "../../../assets/icons/portfolio-logo.svg";
import ProfilePicture from "../../../assets/images/profile-transparent.webp";
import RectAbove from "../../../assets/images/rect-above.svg";
import RectBelow from "../../../assets/images/rect-below.svg";
import { SocialMedia } from "~molecules/social-links";
import IntroContent from "../../../content/intro";
import { SectionProps } from "types";
import useImagePreloader from "../../../hooks/useImagePreloader";

const Intro = (props: SectionProps) => {
  const { pretitle, title, subtitle, description, social_media, cv } =
    IntroContent;
  const { imagesPreloaded } = useImagePreloader([ProfilePicture]);

  return (
    <StyledIntroWrapper {...props}>
      <StyledTextWrapper>
        <Typography color="accent">{pretitle}</Typography>
        <div>
          <Typography size="xxl" weight="bold" as="h1">
            {title}
          </Typography>
          <Typography size="xxl" color="secondary" weight="bold">
            {subtitle}
          </Typography>
        </div>
        <Typography color="secondary">{description}</Typography>
        <SocialMedia links={social_media} />
        <Button as="a" href={cv.url}>
          {cv.text}
        </Button>
      </StyledTextWrapper>
      <StyledPictureWrapper>
        <StyledRotatingLogo src={PortfolioLogo} aria-hidden />
        <StyledRectangle src={RectBelow} below aria-hidden />
        <StyledRectangle src={RectAbove} aria-hidden />
        {imagesPreloaded && (
          <StyledProfilePicture src={ProfilePicture} aria-hidden />
        )}
      </StyledPictureWrapper>
    </StyledIntroWrapper>
  );
};

export { Intro };
