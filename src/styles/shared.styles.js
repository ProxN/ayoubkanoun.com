import styled, { css } from 'styled-components';

export const Section = styled.section`
  height: 100vh;
  padding: 150px 0;
`;

export const Heading = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.large};
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
  border-right: none;
`;
