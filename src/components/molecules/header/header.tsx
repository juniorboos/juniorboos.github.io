import { Typography } from "~atoms/typography";
import PortfolioLogo from "../../../assets/icons/portfolio-logo.svg";
import { StyledAnchorList, StyledHeader } from "./header.styles";

const Header = () => {
  return (
    <StyledHeader>
      <img src={PortfolioLogo} width={36} height={36} />
      <StyledAnchorList>
        <li>
          <Typography as="a" href="/">
            About
          </Typography>
        </li>
        <li>
          <Typography as="a" href="/">
            Experience
          </Typography>
        </li>
        <li>
          <Typography as="a" href="/">
            Work
          </Typography>
        </li>
        <li>
          <Typography as="a" href="/">
            Contact
          </Typography>
        </li>
      </StyledAnchorList>
    </StyledHeader>
  );
};

export { Header };
