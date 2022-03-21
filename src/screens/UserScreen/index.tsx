import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Text } from 'react-native';
import { MainNavigatorParamList } from '../../shared/types';

type UserScreenProps = BottomTabScreenProps<MainNavigatorParamList, 'User'>;

export const UserScreen = (props: UserScreenProps) => {
  return <Text>User screen</Text>;
};
