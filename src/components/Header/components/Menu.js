import React from 'react';
import { useTrail } from 'react-spring';

import { MenuItem, MenuLink, MenuList } from './Menu.styles';

const Menu = () => {
  const links = [
    {
      href: '#projects',
      name: 'Projects',
    },
    {
      href: '#contact',
      name: 'Contact Me',
    },
  ];

  const animationLinks = useTrail(links.length, {
    config: { mass: 1, tension: 170, friction: 14 },
    delay: 250,
    opacity: 1,
    transform: 'translateY(0px)',
    from: {
      opacity: 0,
      transform: 'translateY(-50px)',
    },
  });
  return (
    <MenuList>
      {animationLinks.map((propStyles, index) => (
        <MenuItem key={links[index].name} style={propStyles}>
          <MenuLink href={links[index].href}>{links[index].name}</MenuLink>
        </MenuItem>
      ))}
      {/* <MenuItem>
        <MenuLink href="#projects">Projects</MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink href="#contact">Contact Me</MenuLink>
      </MenuItem> */}
    </MenuList>
  );
};

export default Menu;
