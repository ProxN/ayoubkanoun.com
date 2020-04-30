import React from 'react';
import { FooterContainer, FooterContent, FooterText } from './styles';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterText>Ayoub Idelkanoun © 2020</FooterText>
        <FooterText>Made with Gatsby and Hosted on Netlify.</FooterText>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
