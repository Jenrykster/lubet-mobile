import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import { Bet, CartItem } from '../../shared/types';
import { toRealCurrency } from '../../shared/utils';

import {
  BetCardContainer,
  BetCardDataContainer,
  NumberContainer,
  NumberList,
  NumberTextStyle,
  PriceContainer,
  TitleText,
} from './styles';

const Number = (props: { value: number | string }) => {
  return (
    <NumberContainer>
      <NumberTextStyle>{props.value}</NumberTextStyle>
    </NumberContainer>
  );
};

export const BetCard = (props: {
  bet: Bet | CartItem;
  color: string;
  width?: string;
  numOfColumns?: number;
  isInsideCart: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const betNumbers =
    typeof props.bet.choosen_numbers === 'string'
      ? props.bet.choosen_numbers.split(',')
      : props.bet.choosen_numbers.map((n) => n.toString());

  const numOfColumns = props.numOfColumns || 8;
  const isSingleRow = Math.ceil(betNumbers.length / numOfColumns) < 2;
  const gameType =
    'type' in props.bet ? props.bet.type.type : props.bet.game.type;

  const toggleOpen = () => {
    if (isSingleRow) {
      return;
    }
    setIsOpen((prevState) => !prevState);
  };

  const gradientEndColor = isOpen ? 'black' : 'transparent';

  return (
    <BetCardContainer
      activeOpacity={0.9}
      onPress={toggleOpen}
      color={props.color}
      width={props.width}
      isInsideCart={props.isInsideCart}
    >
      <BetCardDataContainer>
        <TitleText>{gameType}</TitleText>
        {'created_at' in props.bet && (
          <TitleText>
            {new Date(props.bet.created_at).toLocaleDateString('pt-BR')}
          </TitleText>
        )}
      </BetCardDataContainer>
      <MaskedView
        style={{ flex: 1, alignItems: 'center' }}
        maskElement={
          <LinearGradient
            colors={['black', gradientEndColor]}
            style={{ height: 160 }}
            start={{ x: 0, y: 0.2 }}
            end={{ x: 0, y: 0.5 }}
          />
        }
      >
        <NumberList
          data={betNumbers}
          keyExtractor={(item) => item.toString()}
          renderItem={(itemData) => <Number value={itemData.item} />}
          numColumns={numOfColumns}
          fadingEdgeLength={10}
          height={isOpen || isSingleRow ? 'auto' : '80px'}
        />
      </MaskedView>
      <PriceContainer>
        <TitleText>{toRealCurrency(props.bet.price)}</TitleText>
      </PriceContainer>
    </BetCardContainer>
  );
};
