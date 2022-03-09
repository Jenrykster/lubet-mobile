import React, { ReactNode } from 'react';
import { TouchableOpacity } from 'react-native';
import { TouchableTextStyle } from './styles';

export const TouchableText = (props: {
  children: ReactNode;
  align: string;
}) => {
  return (
    <TouchableOpacity>
      <TouchableTextStyle align={props.align}>
        {props.children}
      </TouchableTextStyle>
    </TouchableOpacity>
  );
};
