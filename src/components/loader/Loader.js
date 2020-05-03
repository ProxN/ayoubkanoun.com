import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import anime from 'animejs';
import Logo from '../../assets/logo.svg';
import { LoaderContainer, LoaderWrapper } from './styles';

const Loader = ({ finish }) => {
  const animate = () => {
    const loader = anime.timeline({
      complete: () => finish(),
    });
    loader
      .add({
        targets: '#logo path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1500,
      })
      .add({
        targets: '#logo #A',
        duration: 500,
        easing: 'easeInOutQuart',
        opacity: 1,
      })
      .add({
        targets: '.loader',
        easing: 'easeInOutSine',
        duration: 300,
        delay: 200,
        opacity: 0,
        zIndex: -1,
      });
  };
  useEffect(() => {
    animate();
  });
  return (
    <LoaderContainer className="loader">
      <LoaderWrapper>
        <Logo ig="logo" />
      </LoaderWrapper>
    </LoaderContainer>
  );
};

Loader.propTypes = {
  finish: PropTypes.func.isRequired,
};

export default Loader;
