import React from 'react';
import Social from './components/Social';
import { Section, HeroContent, Subtitle, Title } from './styles';

const Hero = () => {
  return (
    <Section>
      <HeroContent>
        <Title>
          Hello
          <span aria-label="hello emoji" role="img">
            👋🏻
          </span>
          ,
          <br />
          I&apos;m
          <span> ayoub idelkanoun</span>
        </Title>
        <Subtitle>
          I&apos;m a Front-End Developer
          <span>.</span>
        </Subtitle>
        <Social />
      </HeroContent>
    </Section>
  );
};

export default Hero;
