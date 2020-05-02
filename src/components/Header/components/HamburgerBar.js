import React from 'react';
import PropTypes from 'prop-types';
import { Hamburger, Bar } from './HamburgerBar.styles';

const HamburgerBar = ({ open, handleToggle }) => {
  return (
    <Hamburger open={open} onClick={handleToggle}>
      <Bar className={open ? 'forward' : 'backward'} />
      <Bar className={open ? 'forward' : 'backward'} />
      <Bar className={open ? 'forward' : 'backward'} />
    </Hamburger>
  );
};

HamburgerBar.propTypes = {
  open: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
};

export default HamburgerBar;
