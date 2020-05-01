import styled, { css } from 'styled-components';

export const Section = styled.section`
  height: 100vh;
  padding-top: 150px;
`;

export const ContactContent = styled.div`
  ${({ theme }) => css`
    width: 50%;
    background: ${theme.colors.primary.dark};
    border: 5px solid ${theme.colors.primary.light};
    height: 100%;
  `};
  border-left: none;
  border-bottom: none;
`;
export const Heading = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.larges};
    color: ${theme.colors.gray.mid};
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
