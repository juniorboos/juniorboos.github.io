import { Typography } from "~atoms/typography";
import PortfolioLogo from "../../../assets/icons/portfolio-logo.svg";
import {
  StyledNav,
  StyledHeader,
  NavLogo,
  NavToggler,
  NavList,
  NavListItem,
} from "./header.styles";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleToggle = () => setIsExpanded((prevIsExpanded) => !prevIsExpanded);

  return (
    <StyledHeader>
      <NavLogo href="#">
        <img src={PortfolioLogo} width={36} height={36} />
      </NavLogo>
      <NavToggler onClick={handleToggle}>
        <GiHamburgerMenu
          type="button"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        />
      </NavToggler>
      <StyledNav isExpanded={isExpanded}>
        <NavList>
          <NavListItem>
            <Typography as="a" href="/">
              About
            </Typography>
          </NavListItem>
          <NavListItem>
            <Typography as="a" href="/">
              Experience
            </Typography>
          </NavListItem>
          <NavListItem>
            <Typography as="a" href="/">
              Work
            </Typography>
          </NavListItem>
          <NavListItem>
            <Typography as="a" href="/">
              Contact
            </Typography>
          </NavListItem>
        </NavList>
      </StyledNav>
    </StyledHeader>
  );
};

export { Header };
