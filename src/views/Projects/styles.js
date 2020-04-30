import styled, { css } from 'styled-components';

export const Section = styled.section`
  height: 100vh;
  padding: 100px 0;
`;

export const Heading = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.larges};
    color: ${theme.colors.gray.mid};
    border: 5px solid ${theme.colors.primary.light};
    background: ${theme.colors.primary.dark};
    span {
      color: ${theme.colors.yellow.dark};
    }
  `};
  display: block;
  text-align: center;
  line-height: 9px;
  border-left: none;
  margin-bottom: 30px;
  padding: 25px 20px;
`;

export const ProjectsList = styled.div`
  padding: 0 50px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(200px, auto));
`;

export const ProjectItem = styled.div`
  ${({ theme }) => css`
    border: 5px solid ${theme.colors.primary.light};
    background: ${theme.colors.primary.dark};
    span {
      color: ${theme.colors.yellow.dark};
    }
  `};
`;

export const ProjectImg = styled.div`
  img {
    height: auto;
    max-width: 100%;
  }
`;

export const ProjectContent = styled.div`
  padding: 10px 20px;
`;

export const ProjectName = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.gray.dark};
    font-size: ${theme.fontSizes.medium};
  `};
  line-height: 1.2;
  margin-bottom: 10px;
`;

export const ProjectDescription = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.xsmall};
    color: ${theme.colors.gray.dark};
  `};
  font-weight: 400;
  line-height: 1.5;
`;

export const ProjectTechList = styled.div`
  display: flex;
  margin-top: 15px;
`;

export const ProjectsTechItem = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray.dark};
    font-size: ${theme.fontSizes.xsmall};
    span {
      color: ${theme.colors.yellow.dark};
    }
  `};
  :not(:last-child) {
    margin-right: 15px;
  }
`;

export const ProjectLinks = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ProjectLink = styled.a`
  ${({ theme }) => css`
    border: 5px solid ${theme.colors.primary.light};
    color: ${theme.colors.gray.dark};
    font-size: ${theme.fontSizes.small};
  `};
  padding: 5px 20px;
  cursor: pointer;
  font-weight: 400;
  border-bottom: none;
  :last-child {
    border-right: none;
  }
  :not(:last-child) {
    margin-right: 15px;
  }
`;
