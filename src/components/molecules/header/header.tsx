import React from "react";
import PortfolioLogo from "../../../assets/icons/portfolio-logo.svg";
import { StyledAnchorList, StyledHeader } from "./header.styles";

const Header = () => {
  return (
    <StyledHeader>
      <img src={PortfolioLogo} width={36} height={36} />
      <StyledAnchorList>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Experience</a>
        </li>
        <li>
          <a href="/">Work</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </StyledAnchorList>
    </StyledHeader>
  );
};

export { Header };
