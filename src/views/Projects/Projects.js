import React from 'react';
import {
  Section,
  Heading,
  ProjectsList,
  ProjectItem,
  ProjectImg,
  ProjectName,
  ProjectDescription,
  ProjectContent,
  ProjectTechList,
  ProjectsTechItem,
  ProjectLinks,
  ProjectLink,
} from './styles';

const Projects = () => {
  return (
    <Section>
      <Heading>Projects.</Heading>
      <ProjectsList>
        <ProjectItem>
          <ProjectImg>
            <img
              src="https://www.ayoubkanoun.com/static/f46a9b3989940df6f8753a05b8d2b8c0/78e7a/anime_chart.webp"
              alt="test"
            />
          </ProjectImg>
          <ProjectContent>
            <ProjectName>Anime Chart</ProjectName>
            <ProjectDescription>
              A Anime Chart made with Next.js,This was my first Project after
              finishing a react cours. It fetches information from an API, and
              displays list of animes of each season.
            </ProjectDescription>
            <ProjectTechList>
              <ProjectsTechItem>
                <span>#</span>React
              </ProjectsTechItem>
              <ProjectsTechItem>
                <span>#</span>Next.js
              </ProjectsTechItem>
              <ProjectsTechItem>
                <span>#</span>AniList API
              </ProjectsTechItem>
            </ProjectTechList>
          </ProjectContent>
          <ProjectLinks>
            <ProjectLink>Demo</ProjectLink>
            <ProjectLink>Source</ProjectLink>
          </ProjectLinks>
        </ProjectItem>
        <ProjectItem>
          <ProjectImg>
            <img
              src="https://www.ayoubkanoun.com/static/f46a9b3989940df6f8753a05b8d2b8c0/78e7a/anime_chart.webp"
              alt="test"
            />
          </ProjectImg>
          <ProjectContent>
            <ProjectName>Anime Chart</ProjectName>
            <ProjectDescription>
              A Anime Chart made with Next.js,This was my first Project after
              finishing a react cours. It fetches information from an API, and
              displays list of animes of each season.
            </ProjectDescription>
            <ProjectTechList>
              <ProjectsTechItem>
                <span>#</span>React
              </ProjectsTechItem>
              <ProjectsTechItem>
                <span>#</span>Next.js
              </ProjectsTechItem>
              <ProjectsTechItem>
                <span>#</span>AniList API
              </ProjectsTechItem>
            </ProjectTechList>
          </ProjectContent>
          <ProjectLinks>
            <ProjectLink>Demo</ProjectLink>
            <ProjectLink>Source</ProjectLink>
          </ProjectLinks>
        </ProjectItem>{' '}
        <ProjectItem>
          <ProjectImg>
            <img
              src="https://www.ayoubkanoun.com/static/f46a9b3989940df6f8753a05b8d2b8c0/78e7a/anime_chart.webp"
              alt="test"
            />
          </ProjectImg>
          <ProjectContent>
            <ProjectName>Anime Chart</ProjectName>
            <ProjectDescription>
              A Anime Chart made with Next.js,This was my first Project after
              finishing a react cours. It fetches information from an API, and
              displays list of animes of each season.
            </ProjectDescription>
            <ProjectTechList>
              <ProjectsTechItem>
                <span>#</span>React
              </ProjectsTechItem>
              <ProjectsTechItem>
                <span>#</span>Next.js
              </ProjectsTechItem>
              <ProjectsTechItem>
                <span>#</span>AniList API
              </ProjectsTechItem>
            </ProjectTechList>
          </ProjectContent>
          <ProjectLinks>
            <ProjectLink>Demo</ProjectLink>
            <ProjectLink>Source</ProjectLink>
          </ProjectLinks>
        </ProjectItem>
      </ProjectsList>
    </Section>
  );
};

export default Projects;
