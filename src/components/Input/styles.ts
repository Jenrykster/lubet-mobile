import styled from 'styled-components/native';
import { Colors } from '../../constants';

export const Input = styled.TextInput`
  color: ${Colors.grayText};
  width: 90%;
  margin-left: 10px;
`;

export const InputContainer = styled.View<{ valid?: boolean }>`
  flex-direction: row;
  border-color: ${(props) => (props.valid ? Colors.primary : '#f25a41')};
  border-radius: 10px;
  padding: 10px;
  border-width: 2px;
  margin: 10px 0px;
  width: 60%;
`;
