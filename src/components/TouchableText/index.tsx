import React, { ReactNode } from 'react';
import { TouchableOpacity } from 'react-native';
import { TouchableTextStyle } from './styles';

export const TouchableText = (props: {
  children: ReactNode;
  align: string;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <TouchableTextStyle align={props.align}>
        {props.children}
      </TouchableTextStyle>
    </TouchableOpacity>
  );
};
