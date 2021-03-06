import React from 'react';
import { Animated, TouchableNativeFeedback } from 'react-native';
import {
  EditUserButtonContainer,
  EditUserButtonIcon,
  EditUserButtonText,
  TouchableContainer,
} from './styles';

export const EditUserButton = (props: {
  onPress: () => void;
  height?: Animated.Value;
  title: string;
  icon?: string;
  disabled?: boolean;
}) => {
  return (
    <TouchableContainer style={{ scaleY: props.height }}>
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple('#00330020', false)}
        disabled={props.disabled}
        onPress={props.disabled ? () => {} : props.onPress}
      >
        <EditUserButtonContainer disabled={props.disabled || false}>
          <EditUserButtonText>{props.title}</EditUserButtonText>
          <EditUserButtonIcon
            name={props.icon || 'md-create'}
            color='white'
            size={35}
          />
        </EditUserButtonContainer>
      </TouchableNativeFeedback>
    </TouchableContainer>
  );
};
