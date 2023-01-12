import { Button } from "~atoms/button";
import { Typography } from "~atoms/typography";
import { StyledIntroWrapper, StyledTextWrapper } from "./intro.styles";

const Intro = () => {
  return (
    <StyledIntroWrapper>
      <StyledTextWrapper>
        <Typography color="accent">Hi, my name is</Typography>
        <div>
          <Typography size="xl" weight="bold">
            Milton Boos Junior.
          </Typography>
          <Typography size="l" color="secondary" weight="bold">
            I judge a website by its cover...
          </Typography>
        </div>
        <Typography color="secondary">
          Because if the cover does not impress you, what else can?
        </Typography>
      </StyledTextWrapper>
      <Button>Download my CV</Button>
    </StyledIntroWrapper>
  );
};

export { Intro };
