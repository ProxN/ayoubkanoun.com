import React from 'react';
import PropTypes from 'prop-types';
import { MenuMobileContainer, MenuLinks, MenuLink } from './MenuMobile.styles';

const MenuMobile = ({ handleToggle }) => {
  return (
    <MenuMobileContainer>
      <MenuLinks>
        <MenuLink onClick={handleToggle} href="#projects">
          Projects
        </MenuLink>
      </MenuLinks>
      <MenuLinks>
        <MenuLink onClick={handleToggle} href="#contact">
          Contact Me
        </MenuLink>
      </MenuLinks>
    </MenuMobileContainer>
  );
};

MenuMobile.propTypes = {
  handleToggle: PropTypes.func.isRequired,
};

export default MenuMobile;
