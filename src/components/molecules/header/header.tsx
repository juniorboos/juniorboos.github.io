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
import { useAnalyticsEventTracker } from "../../../hooks/useAnalytics";

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleToggle = () => setIsExpanded((prevIsExpanded) => !prevIsExpanded);

  const eventTracker = useAnalyticsEventTracker("Header");

  const handleNavigation = (sectionName: string) =>
    eventTracker("navigate", sectionName);

  const { logo, navToggle, nav } = NavbarContent;

  return (
    <StyledHeader>
      <NavLogo href={logo.url} aria-label="Return to homepage">
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
                as="a"
                href={navItem.id}
                onClick={() => handleNavigation(navItem.name)}
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
