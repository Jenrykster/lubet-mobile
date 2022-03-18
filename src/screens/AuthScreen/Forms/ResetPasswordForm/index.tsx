import React, { useEffect, useState } from 'react';
import { FormContainer, Input, Label, Screen } from '../styles';
import { Card } from '../../../../components/';
import { ConfirmButton } from '../ConfirmButton';
import { Title } from '../Title';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthNavigatorParamList } from '../../../../shared/types';
import { changePassword, sendPasswordReset } from '../../../../shared/services';
import { ActivityIndicator, Alert } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Colors } from '../../../../constants';
import { validateEmail, validatePassword } from '../../../../shared/utils';

type ResetPasswordProps = NativeStackScreenProps<
  AuthNavigatorParamList,
  'ResetPassword'
>;

export const ResetPasswordForm = (props: ResetPasswordProps) => {
  const [isEmailInputValid, setIsEmailInputValid] = useState(false);
  const [isPasswordInputValid, setIsPasswordInputValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [typedEmail, setTypedEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    setIsPasswordInputValid(validatePassword(newPassword));
    setIsEmailInputValid(validateEmail(typedEmail));
  }, [typedEmail, newPassword]);

  const changeUserPassword = async () => {
    if (!isPasswordInputValid) {
      Alert.alert(
        'Invalid data',
        'Password must be AT LEAST 6 characters long'
      );
      return;
    }
    setIsLoading(true);
    if (token.length > 0) {
      const result = await changePassword(newPassword, token);
      if (result.status === 200) {
        Alert.alert(
          'Password changed',
          'You changed your password successfully, please login using your new info',
          [
            {
              text: 'OK',
              onPress: () => {
                props.navigation.replace('Login');
              },
            },
          ]
        );
      } else {
        console.log(result);
      }
    } else {
      Alert.alert('Error', 'There was an error, please try again', [
        { text: 'Ok' },
      ]);
    }
    setIsLoading(false);
  };

  const confirmValidMail = async () => {
    if (!isEmailInputValid) {
      Alert.alert(
        'Invalid data',
        'Please use a valid email for password recovering'
      );
      return;
    }

    setIsLoading(true);
    const result = await sendPasswordReset(typedEmail);
    if (result.status === 200) {
      setIsEmailValid(true);
      setToken(result.data.token);
    } else {
      if (result.status === 404) {
        Alert.alert('Error', result.data.message, [
          { text: 'Ok', style: 'destructive' },
        ]);
      } else {
        Alert.alert('Error', result.data.errors[0].message, [
          { text: 'Ok', style: 'destructive' },
        ]);
      }
    }
    setIsLoading(false);
  };

  const EmailLinkForm = (
    <>
      <Label>Email</Label>
      <Input
        autoCapitalize='none'
        keyboardType='email-address'
        placeholder='user@mail.com'
        value={typedEmail}
        onChangeText={setTypedEmail}
        valid={typedEmail.length === 0 || isEmailInputValid}
      />
      {isLoading && <ActivityIndicator size={60} color={Colors.primary} />}
      {!isLoading && (
        <ConfirmButton
          text='Send Link'
          primary
          onPress={confirmValidMail}
          arrowDirection='FRONT'
        />
      )}
    </>
  );

  const ChangePasswordForm = (
    <>
      <Label>New Password</Label>
      <Input
        autoCapitalize='none'
        secureTextEntry
        placeholder='newsecret123'
        keyboardType='default'
        value={newPassword}
        onChangeText={setNewPassword}
        key='randomKey'
        valid={newPassword.length === 0 || isPasswordInputValid}
      />
      {isLoading && <ActivityIndicator size={60} color={Colors.primary} />}
      {!isLoading && (
        <ConfirmButton
          text='Change Password'
          primary
          onPress={changeUserPassword}
          arrowDirection='FRONT'
        />
      )}
    </>
  );

  return (
    <KeyboardAwareScrollView>
      <Screen>
        <Title />
        <FormContainer biggerMargin>
          <Card>{isEmailValid ? ChangePasswordForm : EmailLinkForm}</Card>
          <ConfirmButton
            arrowDirection='BACK'
            text='Go back'
            onPress={() => {
              props.navigation.goBack();
            }}
          />
        </FormContainer>
      </Screen>
    </KeyboardAwareScrollView>
  );
};
