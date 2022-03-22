import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Colors } from '@constants';
import { Input, InputContainer } from './styles';

export const CustomInput = (props: {
  valid: boolean;
  icon?: string;
  value: string;
  placeholder?: string;
  onChange: (text: string) => void;
}) => {
  return (
    <InputContainer valid={props.valid}>
      <Ionicons
        name={props.icon || 'md-mail'}
        size={25}
        color={Colors.grayText}
      />
      <Input
        value={props.value}
        placeholder={props.placeholder}
        onChangeText={props.onChange}
      />
    </InputContainer>
  );
};
