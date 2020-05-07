import styled, { css } from 'styled-components';
import Img from 'gatsby-image';

export const ProjectItem = styled.div`
  ${({ theme }) => css`
    border: 5px solid ${theme.colors.primary.light};
    background: ${theme.colors.primary.dark};
    span {
      color: ${theme.colors.yellow.dark};
    }
  `};
`;

export const ProjectImgContainer = styled.a`
  cursor: pointer;
`;

export const ProjectImage = styled(Img)`
  height: 250px;
  filter: grayscale(80%);
  max-width: 100%;
  transition: all 0.4s ease-in-out;
  :hover {
    filter: grayscale(10%);
  }
`;

export const ProjectContent = styled.div`
  padding: 10px 20px;
`;

export const ProjectName = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.gray.mid};
    font-size: ${theme.fontSizes.medium};
  `};
  line-height: 1.2;
  margin-bottom: 10px;
  margin-top: 10px;
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

export const ProjectTechItem = styled.div`
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
