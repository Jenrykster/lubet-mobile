import React, { useState } from 'react';
import { Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FormContainer, Input, Label, Screen } from '../styles';
import { Card } from '../../../../components/';
import { ConfirmButton } from '../ConfirmButton';
import { Title } from '../Title';
import { AuthNavigatorParamList } from '../../../../shared/types';
import { register } from '../../../../shared/services';

type SignUpProps = NativeStackScreenProps<AuthNavigatorParamList, 'Login'>;

export const SignUpForm = (props: SignUpProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [typedEmail, setTypedEmail] = useState('');
  const [typedPassword, setTypedPassword] = useState('');
  const [typedName, setTypedName] = useState('');

  const registerUser = async () => {
    setIsLoading(true);

    const result = await register(typedName, typedEmail, typedPassword);
    if (result.status === 400) {
      Alert.alert('Error', result.data.error.message, [
        { text: 'Ok', style: 'destructive' },
      ]);
    } else if (result.status !== 400 && result.status !== 200) {
      Alert.alert('Error', 'Please use a valid e-mail', [
        { text: 'Ok', style: 'destructive' },
      ]);
    } else {
      // Loga o usuário aqui
      console.log(result.data.token);
    }

    setIsLoading(false);
  };
  return (
    <Screen>
      <Title />
      <FormContainer>
        <Card>
          <Label>Name</Label>
          <Input
            placeholder='John Doe'
            value={typedName}
            onChangeText={setTypedName}
          />
          <Label>Email</Label>
          <Input
            autoCapitalize='none'
            keyboardType='email-address'
            placeholder='user@mail.com'
            value={typedEmail}
            onChangeText={setTypedEmail}
          />
          <Label>Password</Label>
          <Input
            secureTextEntry
            placeholder='secret'
            value={typedPassword}
            onChangeText={setTypedPassword}
          />
          <ConfirmButton
            text='Register'
            primary
            onPress={registerUser}
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
