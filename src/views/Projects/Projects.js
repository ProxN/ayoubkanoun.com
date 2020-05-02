import React from 'react';
import ProjectsList from './components/ProjectsList';
import { Section, Heading } from '../../styles/shared.styles';

const Projects = () => {
  return (
    <Section id="projects">
      <Heading>
        Projects
        <span>.</span>
      </Heading>
      <ProjectsList />
    </Section>
  );
};

export default Projects;
