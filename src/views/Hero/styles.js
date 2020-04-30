import styled, { css } from 'styled-components';

export const Section = styled.section`
  height: calc(100% - 60px);
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
`;

export const Social = styled.div`
  margin-top: 10px;
`;

export const SocialLink = styled.a`
  cursor: pointer;
  svg {
    width: 20px;
    height: 20px;
  }
  :not(:last-child) {
    margin-right: 15px;
  }
`;
