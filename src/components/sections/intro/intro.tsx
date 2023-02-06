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
import ProfilePicture from "../../../assets/images/profile-transparent.png";
import RectAbove from "../../../assets/images/rect-above.svg";
import RectBelow from "../../../assets/images/rect-below.svg";
import { SocialMedia } from "~molecules/social-links";
import IntroContent from "../../../content/intro";

const Intro = () => {
  const { pretitle, title, subtitle, description, social_media, cv } =
    IntroContent;
  return (
    <StyledIntroWrapper>
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
        <StyledRotatingLogo src={PortfolioLogo} />
        <StyledRectangle src={RectBelow} below />
        <StyledRectangle src={RectAbove} />
        <StyledProfilePicture src={ProfilePicture} />
      </StyledPictureWrapper>
    </StyledIntroWrapper>
  );
};

export { Intro };
