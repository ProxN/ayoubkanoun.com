import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { Zoom } from 'react-reveal';
import Project from './Project';
import Projects from './ProjectsList.styles';

const ProjectsList = () => (
  <StaticQuery
    query={graphql`
      {
        projects: allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/content/" } }
        ) {
          edges {
            node {
              frontmatter {
                stack
                title
                demo
                source
                image {
                  childImageSharp {
                    fluid(
                      maxWidth: 700
                      quality: 90
                      traceSVG: { color: "#191E25" }
                    ) {
                      ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                  }
                }
              }
              html
            }
          }
        }
      }
    `}
    render={(data) => {
      const {
        projects: { edges },
      } = data;
      return (
        <Projects>
          {edges.map(({ node }, i) => {
            const { frontmatter, html } = node;
            return (
              <Zoom duration={1000} delay={i * 200}>
                <Project key={frontmatter.title} data={frontmatter} html={html} />
              </Zoom>
            );
          })}
        </Projects>
      );
    }}
  />
);

export default ProjectsList;
