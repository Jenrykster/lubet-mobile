import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigatorParamsList } from '../../navigation/AppNavigator';

export const AuthScreen = (
  props: NativeStackScreenProps<NavigatorParamsList, 'Auth'>
) => {
  return (
    <View>
      <Text>Opa</Text>
      <Button
        title='Login'
        onPress={() => {
          props.navigation.replace('Bets');
        }}
      />
    </View>
  );
};
