import React from 'react';
import PropTypes from 'prop-types';
import {
  ProjectItem,
  ProjectImgContainer,
  ProjectImage,
  ProjectLink,
  ProjectLinks,
  ProjectName,
  ProjectTechItem,
  ProjectContent,
  ProjectDescription,
  ProjectTechList,
} from './Project.styles';

const Project = ({ data, html }) => {
  const { title, demo, source, image, stack } = data;
  return (
    <ProjectItem>
      <ProjectImgContainer href={demo} target="_blank">
        <ProjectImage fluid={image.childImageSharp.fluid} alt={title} />
      </ProjectImgContainer>
      <ProjectContent>
        <ProjectName>{title}</ProjectName>
        <ProjectDescription dangerouslySetInnerHTML={{ __html: html }} />
        <ProjectTechList>
          {stack.map((el) => (
            <ProjectTechItem key={el}>
              <span>#</span>
              {el}
            </ProjectTechItem>
          ))}
        </ProjectTechList>
      </ProjectContent>
      <ProjectLinks>
        <ProjectLink target="_blank" href={demo}>
          Demo
        </ProjectLink>
        <ProjectLink target="_blank" href={source}>
          Source
        </ProjectLink>
      </ProjectLinks>
    </ProjectItem>
  );
};

Project.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    demo: PropTypes.string,
    source: PropTypes.string,
    image: PropTypes.object,
    stack: PropTypes.array,
  }).isRequired,
  html: PropTypes.string.isRequired,
};

export default Project;
