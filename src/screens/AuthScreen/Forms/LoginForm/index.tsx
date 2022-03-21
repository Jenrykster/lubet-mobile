import React, { useEffect, useState } from 'react';
import { FormContainer, Input, Label, Screen } from '../styles';
import { TouchableText, Card } from '../../../../components/';
import { ConfirmButton } from '../ConfirmButton';
import { Title } from '../Title';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthNavigatorParamList } from '../../../../shared/types';
import { login } from '../../../../shared/services';
import { ActivityIndicator, Alert, Keyboard } from 'react-native';
import { Colors } from '../../../../constants';
import { useDispatch } from 'react-redux';
import { loginUserAction } from '../../../../store';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

type LoginProps = NativeStackScreenProps<AuthNavigatorParamList, 'Login'>;

export const LoginForm = (props: LoginProps) => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [typedEmail, setTypedEmail] = useState('');
  const [typedPassword, setTypedPassword] = useState('');

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

  const loginUser = async () => {
    setIsLoading(true);

    const result = await login(typedEmail, typedPassword);
    try {
      if (result.status === 200) {
        if (result.data.token) {
          dispatch(
            loginUserAction({
              token: result.data.token.token,
              name: result.data.user.name,
              email: result.data.user.email,
            })
          );
        }
      } else {
        Alert.alert('Error', result.data.message, [
          { text: 'Ok', style: 'destructive' },
        ]);
      }
    } catch (err) {
      Alert.alert('Error', 'There was an error while accessing the servers', [
        { text: 'Ok', style: 'destructive' },
      ]);
    }
    setIsLoading(false);
  };

  return (
    <KeyboardAwareScrollView>
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
              valid
            />
            <Label>Password</Label>
            <Input
              secureTextEntry
              placeholder='secret'
              value={typedPassword}
              onChangeText={setTypedPassword}
              valid
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
          {!isKeyboardOpen && (
            <ConfirmButton
              arrowDirection='FRONT'
              text='Sign Up'
              onPress={() => props.navigation.navigate('SignUp')}
            />
          )}
        </FormContainer>
      </Screen>
    </KeyboardAwareScrollView>
  );
};
