import React from 'react';
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
  GamesScreen,
  NewBetScreen,
  CartScreen,
} from '../../screens';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Ionicons } from '@expo/vector-icons';
import { BetNavigatorParamList } from '../../shared/types/';
import { AnimatedCartIcon } from '../../components/AnimatedCartIcon';

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

const BetTabsNavigator = createBottomTabNavigator<BetNavigatorParamList>();

const BetNavigator = () => {
  return (
    <BetTabsNavigator.Navigator
      screenOptions={{
        ...defaultNavOptions,
        tabBarActiveTintColor: Colors.primary,
      }}
    >
      <BetTabsNavigator.Screen
        name='Games'
        component={GamesScreen}
        options={{
          title: 'Bet History',
          tabBarIcon: () => (
            <Ionicons name='list' size={35} color={Colors.primary} />
          ),
        }}
      />
      <BetTabsNavigator.Screen
        name='NewBet'
        component={NewBetScreen}
        options={{
          title: 'New Bet',
          tabBarIcon: () => (
            <Ionicons
              name='md-add-circle'
              size={60}
              color={Colors.primary}
              style={{ height: 60, marginBottom: 10 }}
            />
          ),
        }}
      />
      <BetTabsNavigator.Screen
        name='Cart'
        component={CartScreen}
        options={{
          title: 'Your Cart',
          tabBarIcon: () => <AnimatedCartIcon />,
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
  const userToken = useSelector((state: RootState) => state.user.token);
  const tokenIsValid = userToken.length > 0;
  return (
    <NavigationContainer>
      {!tokenIsValid && <AuthNavigator />}
      {tokenIsValid && <BetNavigator />}
    </NavigationContainer>
  );
};
