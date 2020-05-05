import React from 'react';
import { useSpring } from 'react-spring';
import Social from './components/Social';
import { Section, HeroContent, Subtitle, Title } from './styles';

const Hero = () => {
  const heroAnimation = useSpring({
    config: { duration: 300 },
    transform: 'translateX(0%)',
    delay: 500,
    from: {
      transform: 'translateX(-100%)',
    },
  });

  const titleAnimation = useSpring({
    config: { mass: 1, tension: 170, friction: 14 },
    transform: 'translateX(0%)',
    opacity: 1,
    delay: 800,
    from: {
      opacity: 0,
      transform: 'translateX(-100%)',
    },
  });

  const subTitleAnimation = useSpring({
    config: { mass: 1, tension: 170, friction: 14 },
    transform: 'translateX(0%)',
    opacity: 1,
    delay: 800,
    from: {
      opacity: 0,
      transform: 'translateX(100%)',
    },
  });
  return (
    <Section>
      <HeroContent style={heroAnimation}>
        <Title style={titleAnimation}>
          Hello
          <span aria-label="hello emoji" role="img">
            👋🏻
          </span>
          ,
          <br />
          I&apos;m
          <span> ayoub idelkanoun</span>
        </Title>
        <Subtitle style={subTitleAnimation}>
          I&apos;m a Front-End Developer
          <span>.</span>
        </Subtitle>
        <Social />
      </HeroContent>
    </Section>
  );
};

export default Hero;
