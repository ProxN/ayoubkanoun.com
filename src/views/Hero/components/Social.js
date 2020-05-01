import React from 'react';
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
  return (
    <Container>
      {config.socialLinks.map((e) => (
        <SocialLink target="_blank" href={e.url}>
          {Links[e.name]}
        </SocialLink>
      ))}
    </Container>
  );
};

export default Social;
