import React from 'react';
import { Slide } from 'react-reveal';
import { FooterContainer, FooterContent, FooterText } from './styles';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Slide right>
          <FooterText>Ayoub Idelkanoun © 2020</FooterText>
          <FooterText>Made with Gatsby and Hosted on Netlify.</FooterText>
        </Slide>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
