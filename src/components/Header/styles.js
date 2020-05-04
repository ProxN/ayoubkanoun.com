import styled from 'styled-components';
import { Link } from 'gatsby';
import { animated } from 'react-spring';
import media from '../../styles/media.styles';

export const HeaderContainer = styled.header`
  height: 60px;
  display: flex;
  align-items: center;
  position: relative;
`;

export const NavBar = styled.nav`
  padding: 0 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${media.tablet`
    padding:0 25px;
  `};
`;

export const LogoWrapper = styled(animated.div)``;

export const LogoLink = styled(Link)`
  cursor: pointer;
`;
