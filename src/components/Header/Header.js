import React, { useState } from 'react';
import { useSpring } from 'react-spring';
import Menu from './components/Menu';
import Hamburger from './components/HamburgerBar';
import Logo from '../../assets/logo.svg';
import MenuMobile from './components/MenuMobile';
import { HeaderContainer, NavBar, LogoLink, LogoWrapper } from './styles';

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  const logoSpring = useSpring({
    config: { mass: 1, tension: 170, friction: 14 },
    opacity: 1,
    delay: 250,
    transform: 'translateY(0px)',
    from: {
      opacity: 0,
      transform: 'translateY(-50px)',
    },
  });
  return (
    <HeaderContainer>
      <NavBar>
        <LogoWrapper style={logoSpring}>
          <LogoLink to="/">
            <Logo />
          </LogoLink>
        </LogoWrapper>
        <Menu />
        <Hamburger open={toggle} handleToggle={handleToggle} />
        {toggle && <MenuMobile handleToggle={handleToggle} />}
      </NavBar>
    </HeaderContainer>
  );
};

export default Header;
