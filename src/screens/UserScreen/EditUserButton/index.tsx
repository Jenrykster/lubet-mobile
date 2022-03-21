import React from 'react';
import { Animated, TouchableNativeFeedback, View } from 'react-native';
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
}) => {
  return (
    <TouchableContainer style={{ scaleY: props.height }}>
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple('#00330020', false)}
        onPress={props.onPress}
      >
        <EditUserButtonContainer>
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
