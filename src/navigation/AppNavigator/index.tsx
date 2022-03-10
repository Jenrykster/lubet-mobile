import React from 'react';
import { Text } from 'react-native';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { Colors } from '../../constants';

import {
  LoginForm,
  SignUpForm,
  ResetPasswordForm,
} from '../../screens/AuthScreen';

class NavOptions
  implements NativeStackNavigationOptions, BottomTabNavigationOptions {}

const defaultNavOptions: NavOptions = {
  headerStyle: {
    backgroundColor: Colors.primary,
  },
  headerTitleStyle: {
    color: '#FFFFFF',
  },
};

const BetTabsNavigator = createBottomTabNavigator();

const BetNavigator = () => {
  return (
    <BetTabsNavigator.Navigator screenOptions={defaultNavOptions}>
      <BetTabsNavigator.Screen
        name='Games'
        component={() => {
          return <Text>Games</Text>;
        }}
      />
      <BetTabsNavigator.Screen
        name='NewGame'
        component={() => {
          return <Text>NewGame</Text>;
        }}
      />
      <BetTabsNavigator.Screen
        name='Cart'
        component={() => {
          return <Text>Cart</Text>;
        }}
      />
    </BetTabsNavigator.Navigator>
  );
};

const AuthStackNavigator = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <AuthStackNavigator.Screen
        name='Login'
        component={LoginForm}
        options={{ headerShown: false }}
      />
      <AuthStackNavigator.Screen
        name='SignUp'
        component={SignUpForm}
        options={{ headerShown: false }}
      />
      <AuthStackNavigator.Screen
        name='ResetPassword'
        component={ResetPasswordForm}
        options={{ headerShown: false }}
      />
    </AuthStackNavigator.Navigator>
  );
};

export default () => {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
};
