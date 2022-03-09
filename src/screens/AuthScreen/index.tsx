import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigatorParamsList } from '../../navigation/AppNavigator';
import { LoginForm } from './Forms/LoginForm';
import { Screen } from './styles';
import { Title } from './Title';

export const AuthScreen = (
  props: NativeStackScreenProps<NavigatorParamsList, 'Auth'>
) => {
  return (
    <Screen>
      <Title />
      <LoginForm />
    </Screen>
  );
};
