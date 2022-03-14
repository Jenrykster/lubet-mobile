import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import { Bet } from '../../../shared/types';

import {
  BetCardContainer,
  BetCardDataContainer,
  NumberContainer,
  NumberTextStyle,
  TitleText,
} from './styles';

const Number = (props: { value: number | string }) => {
  return (
    <NumberContainer>
      <NumberTextStyle>{props.value}</NumberTextStyle>
    </NumberContainer>
  );
};

export const BetCard = (props: { bet: Bet; color: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((prevState) => !prevState);
  };

  const gradientEndColor = isOpen ? 'black' : 'transparent';

  return (
    <BetCardContainer
      height={isOpen ? 180 : 125}
      activeOpacity={0.9}
      onPress={toggleOpen}
      color={props.color}
    >
      <BetCardDataContainer>
        <TitleText>{props.bet.type.type}</TitleText>
        <TitleText>
          {new Date(props.bet.created_at).toLocaleDateString('pt-BR')}
        </TitleText>
      </BetCardDataContainer>
      <MaskedView
        style={{ flex: 1 }}
        maskElement={
          <LinearGradient
            colors={['black', gradientEndColor]}
            style={{ height: 160 }}
            start={{ x: 0, y: 0.2 }}
            end={{ x: 0, y: 0.5 }}
          />
        }
      >
        <FlatList
          data={props.bet.choosen_numbers.split(',')}
          keyExtractor={(item) => item.toString()}
          renderItem={(itemData) => <Number value={itemData.item} />}
          numColumns={8}
          fadingEdgeLength={10}
        />
      </MaskedView>
    </BetCardContainer>
  );
};
