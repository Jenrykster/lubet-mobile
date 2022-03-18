import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Keyboard } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FormContainer, Input, Label, Screen } from '../styles';
import { Card } from '../../../../components/';
import { ConfirmButton } from '../ConfirmButton';
import { Title } from '../Title';
import { AuthNavigatorParamList } from '../../../../shared/types';
import { register } from '../../../../shared/services';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Colors } from '../../../../constants';
import {
  validateEmail,
  validateName,
  validatePassword,
} from '../../../../shared/utils';

type SignUpProps = NativeStackScreenProps<AuthNavigatorParamList, 'Login'>;

export const SignUpForm = (props: SignUpProps) => {
  const [validity, setValidity] = useState({
    email: false,
    password: false,
    name: false,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [typedEmail, setTypedEmail] = useState('');
  const [typedPassword, setTypedPassword] = useState('');
  const [typedName, setTypedName] = useState('');

  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  useEffect(() => {
    const openKeyboardListener = Keyboard.addListener('keyboardDidShow', () => {
      setIsKeyboardOpen(true);
    });
    const closeKeyboardListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setIsKeyboardOpen(false);
      }
    );

    return () => {
      openKeyboardListener.remove();
      closeKeyboardListener.remove();
    };
  }, []);

  useEffect(() => {
    setValidity((prevState) => {
      return {
        email: validateEmail(typedEmail),
        name: validateName(typedName),
        password: validatePassword(typedPassword),
      };
    });
  }, [typedEmail, typedName, typedPassword]);

  const registerUser = async () => {
    if (!validity.name) {
      Alert.alert('Invalid data', 'Name must have more than 2 letters');
      return;
    }

    if (!validity.email) {
      Alert.alert('Invalid data', 'Please use a valid email address');
      return;
    }

    if (!validity.password) {
      Alert.alert(
        'Invalid data',
        'Password must be AT LEAST 6 characters long'
      );
      return;
    }
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
      Alert.alert(
        'Signed in successfully',
        'Your account was created, please proceed to the login screen',
        [
          {
            text: 'Ok',
            onPress: () => {
              props.navigation.navigate('Login');
            },
          },
        ]
      );
    }

    setIsLoading(false);
  };
  return (
    <KeyboardAwareScrollView>
      <Screen>
        <Title />
        <FormContainer>
          <Card>
            <Label>Name</Label>
            <Input
              placeholder='John Doe'
              value={typedName}
              onChangeText={setTypedName}
              valid={typedName.length === 0 || validity.name}
            />
            <Label>Email</Label>
            <Input
              autoCapitalize='none'
              keyboardType='email-address'
              placeholder='user@mail.com'
              value={typedEmail}
              onChangeText={setTypedEmail}
              valid={typedEmail.length === 0 || validity.email}
            />
            <Label>Password</Label>
            <Input
              secureTextEntry
              placeholder='secret'
              value={typedPassword}
              onChangeText={setTypedPassword}
              valid={typedPassword.length === 0 || validity.password}
            />
            {isLoading && (
              <ActivityIndicator size={60} color={Colors.primary} />
            )}
            {!isLoading && (
              <ConfirmButton
                text='Register'
                primary
                onPress={registerUser}
                arrowDirection='FRONT'
              />
            )}
          </Card>
          {!isKeyboardOpen && (
            <ConfirmButton
              arrowDirection='BACK'
              text='Go back'
              onPress={() => {
                props.navigation.goBack();
              }}
            />
          )}
        </FormContainer>
      </Screen>
    </KeyboardAwareScrollView>
  );
};
