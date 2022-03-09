import React from 'react';
import { FormContainer, Input, Label } from '../styles';
import { TouchableText, Card } from '../../../../components/';
import { ConfirmButton } from '../ConfirmButton';

export const SignUpForm = () => {
  return (
    <FormContainer>
      <Card>
        <Label>Name</Label>
        <Input placeholder='John Doe' />
        <Label>Email</Label>
        <Input keyboardType='email-address' placeholder='user@mail.com' />
        <Label>Password</Label>
        <Input secureTextEntry placeholder='secret' />
        <TouchableText align='right'>I forgot my password</TouchableText>
        <ConfirmButton text='Log In' primary onPress={() => {}} />
      </Card>
      <ConfirmButton text='Sign Up' onPress={() => {}} />
    </FormContainer>
  );
};
