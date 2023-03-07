import { SectionTitle } from "~atoms/section-title";
import {
  HorizontalLine,
  StyledCard,
  StyledColumn,
  StyledOverlay,
  StyledRow,
  TechnologiesList,
  TitleWrapper,
} from "./projects.styles";
import ProjectsContent from "../../../content/projects";
import { IconType } from "@react-icons/all-files/lib";
import { SiGithub } from "@react-icons/all-files/si/SiGithub";
import { Typography } from "~atoms/typography";
import Anchor from "~atoms/anchor";
import { SectionProps } from "types";
import { StyledSection, USE_IN_VIEW_THRESHOLD } from "~theme/utils";
import { useInView } from "react-intersection-observer";

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
        <Anchor href={project.url} aria-label="Go to repository">
          <SiGithub size="2rem" aria-hidden />
        </Anchor>
      </TitleWrapper>
      <TechnologiesList>
        {project.technologies.map(({ Icon, name, url }) => (
          <li key={`${project.name}-${name}`}>
            <Anchor href={url} aria-label={name} target="_blank">
              <Icon size="2rem" aria-hidden title={name} />
            </Anchor>
          </li>
        ))}
      </TechnologiesList>
    </StyledOverlay>
  </StyledCard>
);

const Projects = (props: SectionProps) => {
  const { title, projects } = ProjectsContent;
  const { ref, inView } = useInView({
    threshold: USE_IN_VIEW_THRESHOLD,
  });
  return (
    <StyledSection {...props} ref={ref} inView={inView}>
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
    </StyledSection>
  );
};

export { Projects };
