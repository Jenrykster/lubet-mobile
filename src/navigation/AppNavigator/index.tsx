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
        tabBarLabelStyle: { marginBottom: 1 },
      }}
    >
      <BetTabsNavigator.Screen
        name='Games'
        component={GamesScreen}
        options={{
          title: 'Bet History',
          tabBarIcon: () => (
            <Ionicons name='list' size={40} color={Colors.primary} />
          ),
        }}
      />
      <BetTabsNavigator.Screen
        name='NewBet'
        component={NewBetScreen}
        options={{
          title: 'New Bet',
          tabBarLabelStyle: { marginLeft: -2, marginTop: 6, marginBottom: 1 },
          tabBarIcon: () => (
            <Ionicons
              name='md-add-circle'
              size={60}
              color={Colors.primary}
              style={{
                padding: -20,
                overflow: 'hidden',
                borderRadius: 50,
                height: 60,
                marginBottom: 10,
              }}
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
