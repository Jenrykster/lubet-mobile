import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@constants';
import { FormConfirmText, FormConfirmWrapper } from './styles';

type ARROW_DIRECTION = 'FRONT' | 'BACK';

type ButtonProps = {
  text: string;
  primary?: boolean;
  onPress: () => void;
  arrowDirection: ARROW_DIRECTION;
};

export const ConfirmButton = (props: ButtonProps) => {
  return (
    <FormConfirmWrapper
      activeOpacity={0.7}
      primary={props.primary || false}
      onPress={props.onPress}
    >
      <FormConfirmText primary={props.primary || false}>
        {props.arrowDirection === 'BACK' && (
          <Ionicons
            name='md-arrow-back'
            color={props.primary ? 'white' : Colors.grayText}
            size={30}
          />
        )}
        {props.text}
        {props.arrowDirection === 'FRONT' && (
          <Ionicons
            name='md-arrow-forward'
            color={props.primary ? 'white' : Colors.grayText}
            size={30}
          />
        )}
      </FormConfirmText>
    </FormConfirmWrapper>
  );
};
