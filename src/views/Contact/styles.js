import styled, { css } from 'styled-components';
import { Heading as H2 } from '../../styles/shared.styles';
import media from '../../styles/media.styles';

export const Section = styled.section`
  min-height: 100vh;
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
  min-height: calc(100vh - 150px);
  ${media.thone`
    width:100%;
    border-right:none;
    padding-bottom:100px;

  `};
`;
export const Heading = styled(H2)`
  border: none;
`;
