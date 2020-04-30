import React from 'react';
import Github from '../../assets/Github.svg';
import Linkdin from '../../assets/Linkdin.svg';
import Twitter from '../../assets/Twitter.svg';

import { Section, HeroContent, Subtitle, Title, Social, SocialLink } from './styles';

const Hero = () => {
  return (
    <Section>
      <HeroContent>
        <Title>
          Hello 👋🏻,
          <br />
          I'm <span>ayoub idelkanoun</span>
        </Title>
        <Subtitle>
          I'm a Front-End Developer<span>.</span>
        </Subtitle>
        <Social>
          <SocialLink>
            <Github />
          </SocialLink>
          <SocialLink>
            <Linkdin />
          </SocialLink>
          <SocialLink>
            <Twitter />
          </SocialLink>
        </Social>
      </HeroContent>
    </Section>
  );
};

export default Hero;
