import React from 'react';
import { Slide } from 'react-reveal';
import ContactForm from './components/Form';
import { Section, ContactContent, Heading } from './styles';

const Contact = () => {
  return (
    <Section id="contact">
      <Slide left>
        <ContactContent>
          <Heading>
            Get In Touch
            <span>.</span>
          </Heading>
          <ContactForm />
        </ContactContent>
      </Slide>
    </Section>
  );
};

export default Contact;
