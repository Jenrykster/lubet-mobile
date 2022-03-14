import React from 'react';
import { Image, Text, View } from 'react-native';
import {
  NoBetsImageContainer,
  NoBetsMessageContainer,
  NoBetsText,
} from './styles';

export const NoBetsFound = () => {
  return (
    <NoBetsMessageContainer>
      <NoBetsImageContainer>
        <Image
          style={{ width: '100%', height: '100%' }}
          source={require('./../../../../assets/wallet.png')}
        />
      </NoBetsImageContainer>
      <NoBetsText>No bets found !</NoBetsText>
    </NoBetsMessageContainer>
  );
};
