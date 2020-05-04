import styled, { css } from 'styled-components';
import { animated } from 'react-spring';
import media from '../../../styles/media.styles';

export const MenuList = styled.ul`
  list-style: none;
  display: flex;
  ${media.tablet`
    display:none;
  `};
`;

export const MenuItem = styled(animated.li)`
  margin: 0 15px;
`;

export const MenuLink = styled.a`
  cursor: pointer;
  font-weight: 500;
  text-transform: uppercase;
  transition: color 0.1s ease-in-out;
  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary};
    color: ${theme.colors.gray.mid};
    font-size: ${theme.fontSizes.regular};

    :hover {
      color: ${theme.colors.yellow.dark};
    }
  `};
`;
