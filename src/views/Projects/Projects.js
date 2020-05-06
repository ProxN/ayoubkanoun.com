import React from 'react';
import { Zoom } from 'react-reveal';
import ProjectsList from './components/ProjectsList';
import { Section, Heading } from '../../styles/shared.styles';

const Projects = () => {
  return (
    <Section id="projects">
      <Zoom>
        <Heading>
          Projects
          <span>.</span>
        </Heading>
      </Zoom>
      <ProjectsList />
    </Section>
  );
};

export default Projects;
