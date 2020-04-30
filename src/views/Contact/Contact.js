import React from 'react';
import {
  Section,
  ContactContent,
  Heading,
  ContactForm,
  Input,
  TextArea,
  Button,
  InputGroup,
  Label,
} from './styles';

const Contact = () => {
  return (
    <Section>
      <ContactContent>
        <Heading>
          Get In Touch<span>.</span>
        </Heading>
        <ContactForm>
          <InputGroup>
            <Label>Full Name</Label>
            <Input placeholder="John Doe" />
          </InputGroup>
          <InputGroup>
            <Label>Email</Label>
            <Input placeholder="example@gmail.com" />
          </InputGroup>
          <InputGroup>
            <Label>Message</Label>
            <TextArea placeholder="Type your message here." rows="8" />
          </InputGroup>
          <Button>Send Message</Button>
        </ContactForm>
      </ContactContent>
    </Section>
  );
};

export default Contact;
