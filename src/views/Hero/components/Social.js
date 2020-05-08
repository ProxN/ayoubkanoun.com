import React from 'react';
import { useSpring } from 'react-spring';
import config from '../../../constants/config';
import Github from '../../../assets/Github.svg';
import Linkdin from '../../../assets/Linkdin.svg';
import Twitter from '../../../assets/Twitter.svg';
import { Social as Container, SocialLink } from './Social.styles';

const Social = () => {
  const Links = {
    Github: <Github />,
    Linkedin: <Linkdin />,
    Twitter: <Twitter />,
  };

  const socialAnimation = useSpring({
    config: { mass: 1, tension: 170, friction: 16 },
    transform: 'translateY(0px)',
    opacity: 1,
    delay: 800,
    from: {
      opacity: 0,
      transform: 'translateY(200px)',
    },
  });
  return (
    <Container style={socialAnimation}>
      {config.socialLinks.map((e) => (
        <SocialLink key={e.name} target="_blank" href={e.url}>
          {Links[e.name]}
        </SocialLink>
      ))}
    </Container>
  );
};

export default Social;
