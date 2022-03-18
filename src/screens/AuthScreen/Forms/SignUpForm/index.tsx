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

type SignUpProps = NativeStackScreenProps<AuthNavigatorParamList, 'Login'>;

export const SignUpForm = (props: SignUpProps) => {
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
