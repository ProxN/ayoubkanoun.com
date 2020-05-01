import React from 'react';
import ProjectsList from './components/ProjectsList';
import { Section, Heading } from './styles';

const Projects = () => {
  return (
    <Section>
      <Heading>
        Projects
        <span>.</span>
      </Heading>
      <ProjectsList />
    </Section>
  );
};

export default Projects;
