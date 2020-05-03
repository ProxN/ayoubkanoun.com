import styled, { css } from 'styled-components';
import media from '../../../styles/media.styles';

export const MenuMobileContainer = styled.div`
  position: absolute;
  top: 70px;
  right: 0;
  display: none;
  ${media.tablet`
    display:block;
  `};
`;

export const MenuLinks = styled.div``;

export const MenuLink = styled.a`
  cursor: pointer;
  font-weight: 500;
  text-transform: uppercase;
  transition: color 0.1s ease-in-out;
  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary};
    color: ${theme.colors.gray.mid};
    font-size: ${theme.fontSizes.regular};
    background: ${theme.colors.primary.dark};
    border: 5px solid ${theme.colors.primary.light};

    :hover {
      color: ${theme.colors.yellow.dark};
    }
  `};
  padding: 10px;
  display: block;
  border-right: none;
  :first-child {
    margin-bottom: 10px;
  }
`;
