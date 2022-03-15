import React from 'react';
import { ButtonContainer, ButtonsGroupContainer, ButtonText } from './styles';

export const Button = (props: {
  title: string;
  primary?: boolean;
  onPress: () => void;
}) => {
  const isPrimary = props.primary || false;
  return (
    <ButtonContainer primary={isPrimary} onPress={props.onPress}>
      <ButtonText primary={isPrimary}>{props.title}</ButtonText>
    </ButtonContainer>
  );
};

export const NewBetButtons = (props: {
  onClearButtonPressed: () => void;
  onCompleteButtonPressed: () => void;
  onAddToCartButtonPressed: () => void;
}) => {
  return (
    <ButtonsGroupContainer>
      <Button title='Clear' onPress={props.onClearButtonPressed} />
      <Button
        title='Add To Cart'
        primary
        onPress={props.onAddToCartButtonPressed}
      />
      <Button title='Complete' onPress={props.onCompleteButtonPressed} />
    </ButtonsGroupContainer>
  );
};
