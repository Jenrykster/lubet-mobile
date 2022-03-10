import React from 'react';
import { FormContainer, Input, Label, Screen } from '../styles';
import { TouchableText, Card } from '../../../../components/';
import { ConfirmButton } from '../ConfirmButton';
import { Title } from '../Title';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthNavigatorParamList } from '../../../../shared/types';

type LoginProps = NativeStackScreenProps<AuthNavigatorParamList, 'Login'>;

export const LoginForm = (props: LoginProps) => {
  return (
    <Screen>
      <Title />
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
            onPress={() => {}}
            arrowDirection='FRONT'
          />
        </Card>
        <ConfirmButton
          arrowDirection='FRONT'
          text='Sign Up'
          onPress={() => props.navigation.navigate('SignUp')}
        />
      </FormContainer>
    </Screen>
  );
};
