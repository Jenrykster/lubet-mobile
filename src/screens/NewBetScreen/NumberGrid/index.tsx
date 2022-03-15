import React from 'react';
import { FlatList, Text } from 'react-native';
import { NumberGridContainer } from './styles';
import { TouchableNumber } from './TouchableNumber';

export const NumberGrid = (props: {
  numberRange: number;
  selectedNumbers?: number[];
  selectedNumberColor: string;
  onNumberPress: (pressedNumber: number) => void;
}) => {
  const numbersArray = Array.from(
    { length: props.numberRange },
    (v, k) => k + 1
  );

  const renderNumber = (currentNumber: number) => {
    return (
      <TouchableNumber
        value={currentNumber}
        isSelected={props.selectedNumbers?.includes(currentNumber) || false}
        color={props.selectedNumberColor}
        onNumberPress={props.onNumberPress}
      />
    );
  };

  return (
    <NumberGridContainer
      data={numbersArray}
      keyExtractor={(item) => item.toString()}
      renderItem={(itemData) => renderNumber(itemData.item)}
      numColumns={5}
      columnWrapperStyle={{ justifyContent: 'center' }}
      showsVerticalScrollIndicator={false}
    />
  );
};
