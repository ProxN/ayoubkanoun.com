import React, { useState } from 'react';
import { Link } from 'gatsby';
import Menu from './components/Menu';
import Hamburger from './components/HamburgerBar';
import Logo from '../../assets/logo.svg';
import { HeaderContainer, NavBar, LogoLink } from './styles';
import MenuMobile from './components/MenuMobile';

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <HeaderContainer>
      <NavBar>
        <LogoLink as={Link} to="/">
          <Logo />
        </LogoLink>
        <Menu />
        <Hamburger open={toggle} handleToggle={handleToggle} />
        {toggle && <MenuMobile handleToggle={handleToggle} />}
      </NavBar>
    </HeaderContainer>
  );
};

export default Header;
