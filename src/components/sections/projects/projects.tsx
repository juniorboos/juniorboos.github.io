import { BsGithub } from "react-icons/bs";
import { SectionTitle } from "~atoms/section-title";
import {
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

interface Project {
  name: string;
  description: string;
  url: string;
  technologies: { Icon: IconType; name: string }[];
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => (
  <StyledCard>
    <Typography weight="bold">{project.name}</Typography>
    <Typography>{project.description}</Typography>
    <StyledOverlay>
      <TitleWrapper>
        <Typography>{project.name}</Typography>
        <a href={project.url}>
          <SiGithub size="1.5rem" aria-hidden />
        </a>
      </TitleWrapper>
      <TechnologiesList>
        {project.technologies.map(({ Icon, name }) => (
          <a href="" aria-label={name}>
            <Icon size="1.5rem" aria-hidden />
          </a>
        ))}
      </TechnologiesList>
    </StyledOverlay>
  </StyledCard>
);

const Projects = () => {
  const { title, projects } = ProjectsContent;
  return (
    <StyledProjects>
      <SectionTitle name={title} />
      <StyledRow>
        {projects.map((column) => (
          <StyledColumn>
            {column.map((project) => (
              <ProjectCard project={project} />
            ))}
          </StyledColumn>
        ))}
      </StyledRow>
    </StyledProjects>
  );
};

export { Projects };
