import React from "react";
import { BsGithub } from "react-icons/bs";
import { SectionTitle } from "~atoms/section-title";
import {
  StyledCard,
  StyledColumn,
  StyledOverlay,
  StyledProjects,
  StyledRow,
} from "./projects.styles";

const Projects = () => {
  return (
    <StyledProjects>
      <SectionTitle name="Some things I've built" />
      <StyledRow>
        <StyledColumn>
          <StyledCard>
            <h4>Project Name</h4>
            <p>
              Project that was made using this, this and that for this purpose
            </p>
            <StyledOverlay>
              <h4>Project Title</h4>
              <a href="">
                <BsGithub />
              </a>
            </StyledOverlay>
          </StyledCard>
          <StyledCard>
            <h4>Project Name</h4>
            <p>
              Project that was made using this, this and that for this purpose
              Project that was made using this, this and that for this purpose
            </p>
            <StyledOverlay>
              <h4>Project Title</h4>
              <a href="">
                <BsGithub />
              </a>
            </StyledOverlay>
          </StyledCard>
        </StyledColumn>
        <StyledColumn>
          <StyledCard>
            <h4>Project Name</h4>
            <p>
              Project that was made using this, this and that for this purpose
              Project that was made using this, this and that for this purpose
            </p>
            <StyledOverlay>
              <h4>Project Title</h4>
              <a href="">
                <BsGithub />
              </a>
            </StyledOverlay>
          </StyledCard>
          <StyledCard>
            <h4>Project Name</h4>
            <p>
              Project that was made using this, this and that for this purpose
            </p>
            <StyledOverlay>
              <h4>Project Title</h4>
              <a href="">
                <BsGithub />
              </a>
            </StyledOverlay>
          </StyledCard>
        </StyledColumn>
        <StyledColumn>
          <StyledCard>
            <h4>Project Name</h4>
            <p>
              Project that was made using this, this and that for this purpose
            </p>
            <StyledOverlay>
              <h4>Project Title</h4>
              <a href="">
                <BsGithub />
              </a>
            </StyledOverlay>
          </StyledCard>
          <StyledCard>
            <h4>Project Name</h4>
            <p>
              Project that was made using this, this and that for this purpose
              Project that was made using this, this and that for this purpose
            </p>
            <StyledOverlay>
              <h4>Project Title</h4>
              <a href="">
                <BsGithub />
              </a>
            </StyledOverlay>
          </StyledCard>
        </StyledColumn>
      </StyledRow>
    </StyledProjects>
  );
};

export { Projects };
