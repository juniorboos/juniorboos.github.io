import { Typography } from "~atoms/typography";
import PortfolioLogo from "../../../assets/icons/portfolio-logo.svg";
import { StyledNav, StyledHeader } from "./header.styles";

const Header = () => {
  return (
    <StyledHeader>
      <img src={PortfolioLogo} width={36} height={36} />
      <StyledNav>
        <Typography as="a" href="/">
          About
        </Typography>
        <Typography as="a" href="/">
          Experience
        </Typography>
        <Typography as="a" href="/">
          Work
        </Typography>
        <Typography as="a" href="/">
          Contact
        </Typography>{" "}
      </StyledNav>
    </StyledHeader>
  );
};

export { Header };
