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
  return (
    <ContactForm
      action="https://getform.io/f/1f1830d1-9a47-4fe0-99ec-70dd84b64e48"
      method="POST"
    >
      <InputGroup>
        <Label>Full Name</Label>
        <Input placeholder="John Doe" name="name" type="text" />
      </InputGroup>
      <InputGroup>
        <Label>Email</Label>
        <Input placeholder="example@gmail.com" name="email" type="email" />
      </InputGroup>
      <InputGroup>
        <Label>Message</Label>
        <TextArea
          placeholder="Type your message here."
          rows="8"
          type="text"
          name="message"
        />
      </InputGroup>
      <Button>Send Message</Button>
    </ContactForm>
  );
};

export default Form;
