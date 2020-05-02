import styled, { css } from 'styled-components';
import { Heading as H2 } from '../../styles/shared.styles';

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
export const Heading = styled(H2)`
  border: none;
`;
