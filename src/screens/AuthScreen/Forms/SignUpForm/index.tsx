import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FormContainer, Input, Label, Screen } from '../styles';
import { TouchableText, Card } from '../../../../components/';
import { ConfirmButton } from '../ConfirmButton';
import { Title } from '../Title';
import { AuthNavigatorParamList } from '../../../../shared/types';

type SignUpProps = NativeStackScreenProps<AuthNavigatorParamList, 'Login'>;

export const SignUpForm = (props: SignUpProps) => {
  return (
    <Screen>
      <Title />
      <FormContainer>
        <Card>
          <Label>Name</Label>
          <Input placeholder='John Doe' />
          <Label>Email</Label>
          <Input keyboardType='email-address' placeholder='user@mail.com' />
          <Label>Password</Label>
          <Input secureTextEntry placeholder='secret' />
          <TouchableText align='right'>I forgot my password</TouchableText>
          <ConfirmButton
            text='Log In'
            primary
            onPress={() => {}}
            arrowDirection='FRONT'
          />
        </Card>
        <ConfirmButton
          arrowDirection='BACK'
          text='Go back'
          onPress={() => {
            props.navigation.goBack();
          }}
        />
      </FormContainer>
    </Screen>
  );
};
