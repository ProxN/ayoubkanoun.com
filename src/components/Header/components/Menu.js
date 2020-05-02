import React from 'react';
import { MenuItem, MenuLink, MenuList } from './Menu.styles';

const Menu = () => {
  return (
    <MenuList>
      <MenuItem>
        <MenuLink href="#projects">Projects</MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink href="#contact">Contact Me</MenuLink>
      </MenuItem>
    </MenuList>
  );
};

export default Menu;
