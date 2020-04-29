import React from 'react';
import { MenuItem, MenuLink, MenuList } from './Menu.styles';

const Menu = () => {
  return (
    <MenuList>
      <MenuItem>
        <MenuLink>About Me</MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink>Projects</MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink>Contact Me</MenuLink>
      </MenuItem>
    </MenuList>
  );
};

export default Menu;
