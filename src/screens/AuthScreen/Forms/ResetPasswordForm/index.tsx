import React, { useState } from 'react';
import { FormContainer, Input, Label, Screen } from '../styles';
import { Card } from '../../../../components/';
import { ConfirmButton } from '../ConfirmButton';
import { Title } from '../Title';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthNavigatorParamList } from '../../../../shared/types';
import { changePassword, sendPasswordReset } from '../../../../shared/services';
import { Alert } from 'react-native';

type ResetPasswordProps = NativeStackScreenProps<
  AuthNavigatorParamList,
  'ResetPassword'
>;

export const ResetPasswordForm = (props: ResetPasswordProps) => {
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [typedEmail, setTypedEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [token, setToken] = useState('');

  const changeUserPassword = async () => {
    if (token.length > 0) {
      const result = await changePassword(newPassword, token);
      if (result.status === 200) {
        console.log(result.data);
      } else {
        console.log(result);
      }
      props.navigation.replace('Login');
    } else {
      Alert.alert('Error', 'There was an error, please try again', [
        { text: 'Ok' },
      ]);
    }
  };

  const confirmValidMail = async () => {
    const result = await sendPasswordReset(typedEmail);
    if (result.status === 200) {
      setIsEmailValid(true);
      setToken(result.data.token);
    } else {
      Alert.alert('Error', result.data.message, [
        { text: 'Ok', style: 'destructive' },
      ]);
    }
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
      />
      <ConfirmButton
        text='Send Link'
        primary
        onPress={confirmValidMail}
        arrowDirection='FRONT'
      />
    </>
  );

  const ChangePasswordForm = (
    <>
      <Label>New Password</Label>
      <Input
        autoCapitalize='none'
        placeholder='newsecret123'
        value={newPassword}
        onChangeText={setNewPassword}
      />
      <ConfirmButton
        text='Change Password'
        primary
        onPress={changeUserPassword}
        arrowDirection='FRONT'
      />
    </>
  );

  return (
    <Screen>
      <Title />
      <FormContainer>
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
  );
};
