import React from 'react';
import { MenuItem, MenuLink, MenuList } from './Menu.styles';

const Menu = () => {
  return (
    <MenuList>
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
