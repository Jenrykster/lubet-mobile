import React from 'react';
import { NumberContainer, NumberText } from './styles';

export const TouchableNumber = (props: {
  value: number;
  isSelected: boolean;
  color: string;
  onNumberPress: (pressedNumber: number) => void;
}) => {
  return (
    <NumberContainer
      activeOpacity={0.7}
      isActive={props.isSelected}
      color={props.color}
      onPress={() => props.onNumberPress(props.value)}
    >
      <NumberText>{props.value}</NumberText>
    </NumberContainer>
  );
};
