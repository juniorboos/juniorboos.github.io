import { BsGithub } from "react-icons/bs";
import { SectionTitle } from "~atoms/section-title";
import {
  HorizontalLine,
  StyledCard,
  StyledColumn,
  StyledOverlay,
  StyledProjects,
  StyledRow,
  TechnologiesList,
  TitleWrapper,
} from "./projects.styles";
import ProjectsContent from "../../../content/projects";
import { IconType } from "react-icons/lib";
import { SiGithub } from "react-icons/si";
import { Typography } from "~atoms/typography";
import Anchor from "~atoms/anchor";
import { SectionProps } from "types";

interface Project {
  name: string;
  description: string;
  url: string;
  technologies: {
    Icon: IconType;
    name: string;
    url: string;
  }[];
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => (
  <StyledCard>
    <Typography weight="bold">{project.name}</Typography>
    <HorizontalLine />
    <Typography>{project.description}</Typography>
    <StyledOverlay>
      <TitleWrapper>
        <Typography weight="bold">{project.name}</Typography>
        <Anchor href={project.url}>
          <SiGithub size="1.5rem" aria-hidden />
        </Anchor>
      </TitleWrapper>
      <TechnologiesList>
        {project.technologies.map(({ Icon, name, url }, idx) => (
          <Anchor
            href={url}
            aria-label={name}
            target="_blank"
            key={`${project.name}-${name}`}
          >
            <Icon size="1.5rem" aria-hidden />
          </Anchor>
        ))}
      </TechnologiesList>
    </StyledOverlay>
  </StyledCard>
);

const Projects = (props: SectionProps) => {
  const { title, projects } = ProjectsContent;
  return (
    <StyledProjects {...props}>
      <SectionTitle name={title} />
      <StyledRow>
        {projects.map((column, idx) => (
          <StyledColumn key={`project-column-${idx}`}>
            {column.map((project) => (
              <ProjectCard project={project} key={project.name} />
            ))}
          </StyledColumn>
        ))}
      </StyledRow>
    </StyledProjects>
  );
};

export { Projects };
