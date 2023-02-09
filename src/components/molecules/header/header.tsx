import { Typography } from "~atoms/typography";
import {
  StyledNav,
  StyledHeader,
  NavLogo,
  NavToggler,
  NavList,
  NavListItem,
} from "./header.styles";
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";
import { useState } from "react";
import NavbarContent from "../../../content/navbar";
import { scrollIntoView } from "../../../hooks/scrollIntoView";

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleToggle = () => setIsExpanded((prevIsExpanded) => !prevIsExpanded);

  const { logo, navToggle, nav } = NavbarContent;

  return (
    <StyledHeader>
      <NavLogo
        onClick={() => scrollIntoView("intro-section")}
        aria-label="Return to homepage"
      >
        <img src={logo.imgUrl} width={36} height={36} aria-hidden />
      </NavLogo>
      <NavToggler
        onClick={handleToggle}
        aria-expanded={isExpanded}
        aria-label={navToggle.label}
      >
        <GiHamburgerMenu aria-hidden />
      </NavToggler>
      <StyledNav isExpanded={isExpanded}>
        <NavList>
          {nav.map((navItem) => (
            <NavListItem key={navItem.name}>
              <Typography
                as="button"
                onClick={() => scrollIntoView(navItem.id)}
              >
                {navItem.name}
              </Typography>
            </NavListItem>
          ))}
        </NavList>
      </StyledNav>
    </StyledHeader>
  );
};

export { Header };
