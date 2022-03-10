import React, { useState } from 'react';
import { FormContainer, Input, Label, Screen } from '../styles';
import { TouchableText, Card } from '../../../../components/';
import { ConfirmButton } from '../ConfirmButton';
import { Title } from '../Title';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthNavigatorParamList } from '../../../../shared/types';
import { login } from '../../../../shared/services';
import { ActivityIndicator, Alert } from 'react-native';
import { Colors } from '../../../../constants';

type LoginProps = NativeStackScreenProps<AuthNavigatorParamList, 'Login'>;

export const LoginForm = (props: LoginProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [typedEmail, setTypedEmail] = useState('');
  const [typedPassword, setTypedPassword] = useState('');

  const loginUser = async () => {
    setIsLoading(true);

    const result = await login(typedEmail, typedPassword);
    if (result.status !== 200) {
      Alert.alert('Error', result.data.message, [
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
          <TouchableText
            align='right'
            onPress={() => props.navigation.navigate('ResetPassword')}
          >
            I forgot my password
          </TouchableText>
          {isLoading ? (
            <ActivityIndicator size={60} color={Colors.primary} />
          ) : (
            <ConfirmButton
              text='Log In'
              primary
              onPress={loginUser}
              arrowDirection='FRONT'
            />
          )}
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
