import styled, { css } from 'styled-components';

export const Section = styled.section`
  height: 100vh;
  padding: 100px 0;
`;

export const Heading = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.medium};
    color: ${theme.colors.gray.mid};
    span {
      color: ${theme.colors.yellow.dark};
    }
  `};
  display: inline-block;
  line-height: 9px;
  border-left: none;
  margin-bottom: 20px;
`;

export const AboutContent = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.primary.dark};
    border: 5px solid ${theme.colors.primary.light};
  `};
  width: 100%;
  padding: 30px 100px;
  border-left: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray.dark};
    font-size: ${theme.fontSizes.small};
  `};
  line-height: 1.4;
  font-weight: 400;
  margin-bottom: 15px;
  max-width: 500px;
`;
