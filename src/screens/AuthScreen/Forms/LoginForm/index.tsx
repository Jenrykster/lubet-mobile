import React from 'react';
import { FormContainer, Input, Label } from '../styles';
import { TouchableText, Card } from '../../../../components/';
import { ConfirmButton } from '../ConfirmButton';
import { useNavigation } from '@react-navigation/native';

export const LoginForm = () => {
  const navigator = useNavigation();

  return (
    <FormContainer>
      <Card>
        <Label>Email</Label>
        <Input keyboardType='email-address' placeholder='user@mail.com' />
        <Label>Password</Label>
        <Input secureTextEntry placeholder='secret' />
        <TouchableText align='right'>I forgot my password</TouchableText>
        <ConfirmButton
          text='Log In'
          primary
          onPress={() => {
            console.log('Login');
          }}
        />
      </Card>
      <ConfirmButton
        text='Sign Up'
        onPress={() => {
          console.log('Sign up');
        }}
      />
    </FormContainer>
  );
};