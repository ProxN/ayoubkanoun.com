import React from 'react';
import { Section, Heading, AboutContent, Text } from './styles';

const About = () => {
  return (
    <Section>
      <AboutContent>
        <Heading>
          About Me<span>.</span>
        </Heading>
        <Text>
          Hello! I'm ayoub, a front-end developer based in Casablanca, Morocco, I
          love creating beautiful & modern web applications. In my spare time I'm
          usually building things and searching for new skills to learn.
        </Text>
      </AboutContent>
    </Section>
  );
};

export default About;
