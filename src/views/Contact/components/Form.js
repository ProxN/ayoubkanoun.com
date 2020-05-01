import React, { useState } from 'react';
import {
  ContactForm,
  Input,
  TextArea,
  Button,
  InputGroup,
  Label,
} from './Form.styles';

const Form = () => {
  // const [state, setState] = useState({
  //   name: '',
  //   email: '',
  //   message: '',
  // });

  // const handleChange = ({ target }) => {
  //   setState({ [target.name]: target.value });
  // };
  return (
    <ContactForm
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <InputGroup>
        <Label>Full Name</Label>
        <Input placeholder="John Doe" name="name" />
      </InputGroup>
      <InputGroup>
        <Label>Email</Label>
        <Input placeholder="example@gmail.com" name="email" />
      </InputGroup>
      <InputGroup>
        <Label>Message</Label>
        <TextArea placeholder="Type your message here." rows="8" name="message" />
      </InputGroup>
      <Button>Send Message</Button>
    </ContactForm>
  );
};

export default Form;
