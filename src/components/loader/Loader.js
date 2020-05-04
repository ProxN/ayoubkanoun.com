import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import anime from 'animejs';
import Logo from '../../assets/logo.svg';
import { LoaderContainer, LoaderWrapper } from './styles';

const Loader = ({ finish }) => {
  const [isMounted, setIsMounted] = useState(false);

  const animate = () => {
    const loader = anime.timeline({
      complete: () => finish(),
    });
    loader
      .add({
        targets: '#logo path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1300,
      })
      .add({
        targets: '#logo #A',
        duration: 500,
        easing: 'easeInOutQuart',
        opacity: 1,
      })
      .add({
        targets: '#logo',
        duration: 300,
        easing: 'easeInOutQuart',
        scale: 0,
      })
      .add({
        targets: '.loader',
        easing: 'easeInOutSine',
        duration: 100,
        delay: 0,
        opacity: 0,
        zIndex: -1,
      });
  };
  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    animate();
    return () => clearTimeout(timeout);
  });
  return (
    <LoaderContainer className="loader">
      <LoaderWrapper isMounted={isMounted}>
        <Logo id="logo" />
      </LoaderWrapper>
    </LoaderContainer>
  );
};

Loader.propTypes = {
  finish: PropTypes.func.isRequired,
};

export default Loader;
