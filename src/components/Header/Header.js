import React from 'react';
import { Link } from 'gatsby';
import Menu from './components/Menu';
import Logo from '../../assets/logo.svg';
import { HeaderContainer, NavBar, LogoLink } from './styles';

const Header = () => {
  return (
    <HeaderContainer>
      <NavBar>
        <LogoLink as={Link} to="/">
          <Logo />
        </LogoLink>
        <Menu />
      </NavBar>
    </HeaderContainer>
  );
};

export default Header;
