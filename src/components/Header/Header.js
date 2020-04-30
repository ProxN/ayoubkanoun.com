import React from 'react';
import Menu from './components/Menu';
import Logo from '../../assets/logo.svg';
import { HeaderContainer, NavBar, LogoLink } from './styles';

const Header = () => {
  return (
    <HeaderContainer>
      <NavBar>
        <LogoLink>
          <Logo />
        </LogoLink>
        <Menu />
      </NavBar>
    </HeaderContainer>
  );
};

export default Header;
