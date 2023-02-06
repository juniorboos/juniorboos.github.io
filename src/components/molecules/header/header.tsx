import { Typography } from "~atoms/typography";
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
import NavbarContent from "../../../content/navbar";

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleToggle = () => setIsExpanded((prevIsExpanded) => !prevIsExpanded);

  const { logo, navToggle, nav } = NavbarContent;

  return (
    <StyledHeader>
      <NavLogo href="#">
        <img src={logo.imgUrl} width={36} height={36} />
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
              <Typography as="a" href={navItem.url}>
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
