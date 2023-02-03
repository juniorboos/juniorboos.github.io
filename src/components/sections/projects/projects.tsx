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

const ProjectCard = ({ long = false }) => (
  <StyledCard>
    <h4>Project Name</h4>
    <p>
      Project that was made using this, this and that for this purpose{" "}
      {long &&
        "Project that was made using this, this and that for this purpose"}
    </p>
    <StyledOverlay>
      <h4>Project Title</h4>
      <a href="">
        <BsGithub />
      </a>
    </StyledOverlay>
  </StyledCard>
);

const Projects = () => {
  return (
    <StyledProjects>
      <SectionTitle name="Some things I've built" />
      <StyledRow>
        <StyledColumn>
          <ProjectCard />
          <ProjectCard long />
        </StyledColumn>
        <StyledColumn>
          <ProjectCard long />
          <ProjectCard />
        </StyledColumn>
        <StyledColumn>
          <ProjectCard />
          <ProjectCard long />
        </StyledColumn>
      </StyledRow>
    </StyledProjects>
  );
};

export { Projects };
