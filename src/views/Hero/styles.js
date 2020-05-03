import styled, { css } from 'styled-components';
import media from '../../styles/media.styles';

export const Section = styled.section`
  min-height: calc(100% - 60px);
  padding: 100px 0px;
`;

export const HeroContent = styled.div`
  display: flex;
  width: max-content;
  padding: 30px 100px;
  flex-direction: column;
  ${({ theme }) => css`
    background: ${theme.colors.primary.dark};
    border: 5px solid ${theme.colors.primary.light};
  `};
  border-left: none;
  ${media.tablet`
    padding:50px;
  `};
  ${media.thone`
    width:100%;
    border-right:none;
  `};
  ${media.phablet`
    padding:25px;
  `};
`;

export const Title = styled.h1`
  line-height: 1.2;
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.xlarge};
    color: ${theme.colors.gray.mid};
  `};
  span {
    font-size: ${({ theme }) => theme.fontSizes.large};
    text-transform: capitalize;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.yellow.dark};
  }
  ${media.tablet`
    font-size:56px;
  `};
  ${media.phablet`
    font-size:40px;
    span{
      font-size:26px;
    }
  `};
  ${media.tiny`
    span{
      font-size:20px;

    }
  `};
`;

export const Subtitle = styled.h4`
  ${({ theme }) => css`
    font-weight: 400;
    line-height: 1.2;
    font-size: ${theme.fontSizes.large};
    span {
      color: ${theme.colors.yellow.dark};
    }
  `};
  ${media.tablet`
    font-size:26px;
  `};
  ${media.tiny`
    font-size:20px;
  `};
`;
