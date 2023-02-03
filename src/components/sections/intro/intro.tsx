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
import { SocialLinks } from "~molecules/social-links";

const Intro = () => {
  return (
    <StyledIntroWrapper>
      <StyledTextWrapper>
        <Typography color="accent">Hi, my name is</Typography>
        <div>
          <Typography size="xxl" weight="bold" as="h1">
            Milton Boos Junior.
          </Typography>
          <Typography size="xxl" color="secondary" weight="bold">
            I judge a website by its cover...
          </Typography>
        </div>
        <Typography color="secondary">
          Because if the cover does not impress you, what else can?
        </Typography>
        <SocialLinks />
        <Button>Download my CV</Button>
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
