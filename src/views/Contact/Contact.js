import React from 'react';
import ContactForm from './components/Form';
import { Section, ContactContent, Heading } from './styles';

const Contact = () => {
  return (
    <Section>
      <ContactContent>
        <Heading>
          Get In Touch
          <span>.</span>
        </Heading>
        <ContactForm />
      </ContactContent>
    </Section>
  );
};

export default Contact;
